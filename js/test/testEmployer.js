/**
 * Created by samsung on 2015/6/12.
 */

function testEmployerAdd() {

    paramData.identity = "321281199012055670"
    paramData.username = "1"
    paramData.tell = "62588882"
    paramData.addr = "1"
    paramData.source = "1"
    paramData.specfic_requirement = "1"
    paramData.phone = "13381881990"
    paramData.sex = "1"
    paramData.prov = "1"
    paramData.city = "1"
    paramData.area = "1"
    paramData.family = "1"
    paramData.content = "1"
    paramData.remark = "1"

    callServer('employer/add', paramData)
}

function testEmployerList() {
    var paramData = {};
    callServer('employer/list', paramData)
}
function testEmployerDetail() {
    paramData.eid = "1"
    callServer('employer/detail', paramData)
}

function testEmployerUpdate() {
    paramData.type = "1"
    paramData.identity = "1"
    paramData.username = "1"
    paramData.tell = "1"
    paramData.addr = "1"
    paramData.source = "1"
    paramData.specfic_requirement = "1"
    paramData.contract_status = "1"
    paramData.phone = "1"
    paramData.sex = "1"
    paramData.prov = "1"
    paramData.city = "1"
    paramData.area = "1"
    paramData.family = "1"
    paramData.content = "1"
    paramData.remark = "1"

    callServer('employer/update', paramData)
}

function testEmployerDel() {
    paramData.eid = "1"

    callServer('employer/del', paramData)
}