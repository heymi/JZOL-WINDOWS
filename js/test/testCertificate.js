/**
 * Created by samsung on 2015/6/12.
 */


function testCertificateAdd() {
    paramData.type = "1"
    paramData.name = "1"
    paramData.pics = "1"
    paramData.sid = "1"
    paramData.eeid = "1"
    paramData.requestTime = "1"
    paramData.content = "1"

    callServer('certificates/add', paramData)
}

function testCertificateList() {
    paramData.type = "1"
    callServer('certificates/list', paramData)
}

function testCertificateUpdate() {
    paramData.type = "1"
    paramData.name = "1"
    paramData.pics = "1"
    paramData.sid = "1"
    paramData.eeid = "1"
    paramData.requestTime = "1"
    paramData.content = "1"

    callServer('certificates/update', paramData)
}
function testCertificateDel() {
    paramData.cid = "1"
    callServer('certificates/del', paramData)
}