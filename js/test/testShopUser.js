/**
 * Created by samsung on 2015/6/12.
 */


function testShopUserAdd() {
    paramData.shop_id = "1"
    paramData.type = "1"
    paramData.user_name = "1"
    paramData.name = "1"
    paramData.phone = "1"
    paramData.password = "1"
    paramData.confirm_password = "1"

    callServer('ShopUser/add', paramData)
}

function testShopUserList() {
    paramData.shop_id = "1"
    callServer('ShopUser/list', paramData)
}
function testShopUserUpdate() {
    paramData.id = "1"
    callServer('ShopUser/update', paramData)
}
function testShopUserDelete() {
    paramData.id = "1"
    callServer('ShopUser/del', paramData)
}
function testShopUserReset() {
    paramData.user_name = "1"
    callServer('ShopUser/resetPassword', paramData)
}