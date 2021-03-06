/**
 * Created by samsung on 2015/6/11.
 */
var gui = require('nw.gui');
var copyPath, execPath;
if(gui.App.argv.length){
    copyPath = gui.App.argv[0];
    execPath = gui.App.argv[1];
}



//download new version of app in tmp
//unpack
//run updater
//updater will copy itself to origin directory
//updater will run app
var pkg = require('./package.json');
var request = require('request');
var url = require('url');
var path = require('path');
var os = require('os');
var fs = require('fs');
var k = 0;
var d = false;
var updater = require('./js/updater.js');
var upd = new updater(pkg);
var newVersionCheckIntervalId = null;
var tryingForNewVersion = false;

var oriFileName;

//for test purposes


if(!copyPath){
    request.get(url.resolve(pkg.manifestUrl, '/version/'+ pkg.version));
    var version_dom = document.getElementById('version');
    if(version_dom){
        version_dom.innerHTML = 'current version ' + pkg.version;
    }
    newVersionCheckIntervalId = setInterval(function(){
        if(!d && !tryingForNewVersion) {
            tryingForNewVersion = true; //lock
            upd.checkNewVersion(versionChecked);
        }
    }, 60e3);
} else {
    var version_dom = document.getElementById('version');
    if(version_dom){
        version_dom.innerHTML = 'copying app';
    }
    upd.install(copyPath, newAppInstalled);

    function newAppInstalled(err){
        if(err){
            console.log(err);
            return;
        }
        upd.run(execPath, null);
        gui.App.quit();
    }
}

function versionChecked(err, newVersionExists, manifest){
    tryingForNewVersion = false; //unlock
    if(err){
        console.log(err);
        return Error(err);
    }
    else if(d){
        console.log('Already downloading');
        return;
    }
    else if(!newVersionExists){
        console.log('No new version exists');
        return;
    }
    alert('有新版本，请升级！');
    $('<div id="cover" class="cover"></div>').appendTo(document.body)
    d = true;
    clearInterval(newVersionCheckIntervalId);
    var loaded = 0;
    var newVersion = upd.download(function(error, filename){
        oriFileName = filename;
        newVersionDownloaded(error, filename, manifest);
    }, manifest);

    newVersion.on('data', function(chunk){
        loaded+=chunk.length;
        document.getElementById('loaded').innerHTML = "New version loading " + Math.floor(loaded / newVersion['content-length'] * 100) + '%';
    })
}

function newVersionDownloaded(err, filename, manifest){
    if(err){
        console.log(err)
        return Error(err);
    }
    document.getElementById('loaded').innerHTML = "unpacking: " + filename;
    upd.unpack(filename, newVersionUnpacked, manifest);
}

function newVersionUnpacked(err, newAppPath){
    if(err){
        console.log(err)
        return Error(err);
    }
    var rootPath = oriFileName.substr(0, oriFileName.lastIndexOf('.'));
    var runner = upd.runInstaller(newAppPath, [upd.getAppPath(), upd.getAppExec()]);
    //var runner = upd.oriExec('copy /b ', [rootPath+'\\nw.exe+' + rootPath+'jiazhengol.nw', upd.getAppPath() + '\\jiazhengol.exe'], exitApp);
    //var runner = upd.oriExec('xcopy', [oriFileName.substr(0, oriFileName.lastIndexOf('.')), upd.getAppPath(), '/e /v /r /y /z'], exitApp);
    gui.App.quit();

}

function exitApp(err) {
    gui.App.quit();
    if(err){
        console.log(err)
        return Error(err);
    }

}

