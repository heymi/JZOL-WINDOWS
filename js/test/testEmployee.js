/**
 * Created by samsung on 2015/6/12.
 */

var domainId = "http://api.fuhui.com/"


function testAddEmployee() {
    var paramData = {};
    paramData.key = "1";
    paramData.name = "1";
    paramData.sex = "1";
    paramData.phone = "1";
    paramData.identity = "321281199012055670";
    paramData.age = "1";
    paramData.native_prov = "1";
    paramData.nationality = "1";
    paramData.zodiac_sign = "1";
    paramData.body = "1";
    paramData.stature = "1";
    paramData.qualification = "1";
    paramData.career = "1";
    paramData.marriage = "1";
    paramData.living_prov = "1";
    paramData.living_address = "1";
    callServer('employee/add', paramData)
}

function testEmployeeShopAdd() {
    var paramData = {};
    paramData.status = "1"
    paramData.employee_id = "1"
    paramData.shop_id = "1"
    paramData.job_intention = "1"
    paramData.emergency = "1"
    paramData.relationship = "1"
    paramData.linkman_tel = "1"
    paramData.expected_salary = "1"
    paramData.daily_salary = "1"
    paramData.arrival_time = "1"
    paramData.service_prov = "1"
    paramData.service_city = "1"
    paramData.experience = "1"
    paramData.remard = "1"
    callServer('employeeShop/add', paramData)
}

function testEmployeeUpload() {
    var paramData = {};
    paramData.type = "identity";
    paramData.employee_id = "1";
    callServer('employee/upload', paramData)
}
function testEmployeeList() {
    var paramData = {};
    callServer('employee/list', paramData)
}

function testEmployeeDelete() {
    var paramData = {};
    paramData.employee_id = "1";
    paramData.id = "1";
    callServer('employee/delImg', paramData)
}