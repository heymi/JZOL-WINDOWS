/**
 * Created by samsung on 2015/6/12.
 */


var paramData = {};

function testShopAdd() {
    paramData.user_name = "1"
    paramData.name = "1"
    paramData.city_id = "1"
    paramData.area_id = "1"
    paramData.address = "1"
    paramData.manager_name = "1"
    paramData.manager_phone = "1"
    paramData.type = "1"
    paramData.business = "1"
    callServer('Shop/add', paramData)
}
function testShopDetail() {
    paramData.id = "1"
    callServer('Shop/detail', paramData)
}


function testShopUpdate() {
    paramData.id = "1"
    paramData.type = "1"
    paramData.name = "1"
    paramData.city_id = "1"
    paramData.area_id = "1"
    paramData.manager_name = "1"
    paramData.manager_phone = "1"
    paramData.address = "1"
    paramData.business = "1"
    paramData.status = "1"

    callServer('Shop/update', paramData)
}


function testShopDel() {
    paramData.id = "1"
    callServer('Shop/del', paramData)
}


function testShopApplyDeletion() {
    paramData.id = "1"
    callServer('Shop/applyDeletion', paramData)
}


function testShopList() {
    callServer('Shop/list', paramData)
}



