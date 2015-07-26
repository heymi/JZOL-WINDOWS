/**
 * Created by Leeiio on 15/7/26.
 */

//程序菜单项
var gui = require('nw.gui');

// Setup and hide extraneous menu items for Mac Menu
if (process.platform === "darwin") {
  var mb = new gui.Menu({type: 'menubar'});
  mb.createMacBuiltin('家政在线', {
    hideEdit: false,
    hideWindow: false
  });
  gui.Window.get().menu = mb;
}