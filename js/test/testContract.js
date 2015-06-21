/**
 * Created by samsung on 2015/6/12.
 */




function testContractAdd() {

    paramData.type = "1"
    paramData.did = "1"
    paramData.oid = "1"
    paramData.shareid = "1"
    paramData.shopid = "1"
    paramData.eid = "1"
    paramData.eeid = "1"
    paramData.eename = "1"
    paramData.create = "1"
    paramData.shopUser = "1"
    paramData.userName = "1"
    paramData.start = "1"
    paramData.end = "1"
    paramData.payType = "1"
    paramData.payMoney = "1"
    paramData.ePay = "1"
    paramData.sPay = "1"
    paramData.eePay = "1"
    paramData.remark = "1"
    paramData.status = "1"
    paramData.type = "1"
    paramData.pics


    callServer('contracts/add', paramData)
}

function testContractList() {

    paramData.type = "1"
    callServer('contracts/list', paramData)
}
function testContractUpdate() {


    paramData.type = "7"
    paramData.name = "7"
    paramData.pics = "7"
    paramData.sid = "7"
    paramData.eeid = "7"
    paramData.requestTime = "7"
    paramData.content = "7"

    callServer('contracts/update', paramData)
}
function testContractDel() {


    paramData.cid = "7"

    callServer('contracts/del', paramData)
}