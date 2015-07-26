var auntExists = false;
var auntId = '';
function checkAuntExists(rec) {
  var param = {};
  param.identity = rec.value;
  $.ajax({
    url: CONFIG.API_DOMAIN + '/employee/identity',
    type: 'POST',
    data: param,
    success: function (returnData) {
      var returnObj = parseJSON(returnData);
      if (returnObj.code == '0') {
        auntExists = true;
        auntId = returnObj.data.id;
        $("#name").val(returnObj.data.name);
        $("#sex input[value=" + returnObj.data.sex + "]").prop('checked', true);
//                    $("#qualification input[value="+ returnObj.data.qualification +"]").prop('checked', true);
        $("#phone").val(returnObj.data.phone);
        $("#age").val(returnObj.data.age);
        $("#nationality").val(returnObj.data.nationality);
        $("#stature").val(returnObj.data.stature);
        $("#body").val(returnObj.data.body);
        $("#qualification input[value=" + returnObj.data.qualification + "]").prop('checked', true);
        $("#age").val(returnObj.data.age);
      } else {
        auntExists = false
        delete auntId;
//                    $('#basicInfoForm')[0].reset();
      }
    },
    error: function () {
      auntExists = false
      delete auntId;
//                $('#basicInfoForm')[0].reset();
    }
  })
}

$(function () {
  var employeeId = getQueryString('employeeId');

  if (employeeId) {
    auntExists = true;
    auntId = employeeId;
    var paramData = {employee_id: employeeId};

    $.ajax({
      url: CONFIG.API_DOMAIN + '/employee/detail',
      type: 'POST',
      data: paramData,
      success: function (ret) {
        var retObj = JSON.parse(ret);
//                    $('#native_section').hide();
        $('#add_or_edit').text('编辑阿姨');

        //基本信息
        $("#identity").val(retObj.data.static.identity);
        $("#name").val(retObj.data.static.name);
        $("#sex input[value=" + retObj.data.static.sex + "]").prop('checked', true);
        $("#qualification input[value=" + retObj.data.static.qualification + "]").prop('checked', true);
        $("#phone").val(retObj.data.static.phone);
        $("#age").val(retObj.data.static.age);
        $("#nationality").val(retObj.data.static.nationality);
        $("#stature").val(retObj.data.static.stature || '');
        $("#body").val(retObj.data.static.body || '');
        $("#identity").val(retObj.data.static.identity);
        $("#marriage").val(retObj.data.static.marriage);
        $("#family").val(retObj.data.static.family);
        $("#content").val(retObj.data.static.content);
        $('#career').val(retObj.data.static.career);
//                    $("#addr").val(retObj.data.static.addr);

        $('#native_provcityarea').province_city_area(retObj.data.static.native_prov, retObj.data.static.native_city, retObj.data.static.native_area);
        $('#native_addr').val(retObj.data.static.native_address);
        $('#native_provcityarea select').prop('disabled', 'disabled');
        $('#native_addr').prop('disabled', 'disabled');
        $('#living_provcityarea').province_city_area(retObj.data.static.living_prov, retObj.data.static.living_city, retObj.data.static.living_area);
        $('#living_addr').val(retObj.data.static.living_address);

        $('#expected_salary').val(retObj.data.static.expect_salary || '')
        $('#daily_salary').val(retObj.data.static.daily_salary || '')

        //工作信息
        setMultiSelectValue('service_range', retObj.data.dynamic.service_range)
        setMultiSelectValue('status', retObj.data.dynamic.status)
        setMultiSelectValue('type', retObj.data.dynamic.type)
//                $('#expected_salary').val(retObj.data.static.expected_salary)
//                $('#daily_salary').val(retObj.data.static.daily_salary)
        $('#arrival_time').val(retObj.data.dynamic.arrival_time)
        $('#emergency').val(retObj.data.dynamic.emergency)
        $('#relationship').val(retObj.data.dynamic.relationship)
        $('#linkman_tel').val(retObj.data.dynamic.linkman_tel)
        $('#remark').val(retObj.data.dynamic.remark)
      }
    })
  }

  $("#identity").bind('blur', function () {
    var identity = $(this).val();
    var id_pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/i;
    if (!id_pattern.test(identity)) {
      $.scojs_message('请输入正确的身份证号码', $.scojs_message.TYPE_ERROR);
      return false;
    }
    if (parseInt(identity.substr(16, 1), 10) % 2 == 1) {
      $('#male').prop('checked', true);
    } else {
      $('#female').prop('checked', true);
    }
    //获取年龄
    var myDate = new Date();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();

    var age = myDate.getFullYear() - identity.substring(6, 10) - 1;
    if (identity.substring(10, 12) < month || identity.substring(10, 12) == month && identity.substring(12, 14) <= day) {
      age++;
    }
    $('#age').val(age);
    //获取籍贯
    var nativeNo = identity.substr(0, 6)
    var areaName = _.find(districtData.district, function (district) {
      return district.id == nativeNo;
    });
    var area = _.find(parent.window.PROVCITYAREA.areaData, function (area) {
      return area.name == areaName.text;
    });
    var area_id = area.id;
    var city_id = area.city_id;
    var provData = _.find(parent.window.PROVCITYAREA.cityData, function (province) {
      return province.id == area.city_id;
    });
    var province_id = provData.province_id;
    $('#native_provcityarea').province_city_area(province_id, city_id, area_id);
    $('#native_provcityarea select').prop('disabled', 'disabled');
  });
  $("#name").bind('blur', function () {
    var name = $(this).val();
    if ($.trim(name).length === 0) {
      $.scojs_message('请输入长度在10字符以内的姓名', $.scojs_message.TYPE_ERROR);
    }
  });
  $('#message_trigger_ok').on('click', function (e) {

    e.preventDefault();

    var paramObj = {};
    paramObj.name = $("#name").val();
    paramObj.sex = $("#sex input:checked").val();
    paramObj.phone = $("#phone").val();
    var identity = $("#identity").val();
    paramObj.identity = identity;
    paramObj.age = $("#age").val();
//        if(!auntExists){
    paramObj.native_prov = $('#native_provcityarea .prov-select').val();
    paramObj.native_city = $('#native_provcityarea .city-select').val();
    paramObj.native_area = $('#native_provcityarea .area-select').val();
    paramObj.native_address = $('#native_addr').val();
//        }
    if ($('#nationality').val()) {
      paramObj.nationality = $('#nationality').val();
    }
//        paramObj.zodiac_sign = '1';
    if ($("#body").val()) {
      paramObj.body = $("#body").val();
    }
    if ($("#stature").val()) {
      paramObj.stature = $("#stature").val();
    }
    paramObj.qualification = $("#qualification input:checked").val();
    paramObj.living_prov = $('#living_provcityarea .prov-select').val();
    paramObj.living_city = $('#living_provcityarea .city-select').val();
    paramObj.living_area = $('#living_provcityarea .area-select').val();
    paramObj.living_address = $('#living_addr').val();
    paramObj.marriage = $('#marriage').val();
    if ($('#career').val()) {
      paramObj.career = $('#career').val();
    }
    if ($('#expected_salary').val()) {
      paramObj.expect_salary = $('#expected_salary').val();
    }
    if ($('#daily_salary').val()) {
      paramObj.daily_salary = $('#daily_salary').val();
    }


    var postUrl = '';
    if (auntExists) {
      postUrl = CONFIG.API_DOMAIN + "/employee/update";
    } else {
      postUrl = CONFIG.API_DOMAIN + "/employee/add";
    }
    $.ajax({
      url: postUrl,
      type: 'POST',
      data: paramObj,
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          if (auntExists) {
            parent.document.getElementById("rightContent").setAttribute("src", "addAunt-JobDetail.html?employeeId=" + auntId + "&isUpdate=" + auntExists);
          } else {
            parent.document.getElementById("rightContent").setAttribute("src", "addAunt-JobDetail.html?employeeId=" + retObj.data.id + "&isUpdate=" + auntExists);
          }
        } else {
          $.scojs_message(errorCode["code_" + retObj.code], $.scojs_message.TYPE_ERROR)
        }
      },
      error: function (ret) {
        $.scojs_message('服务器异常错误', $.scojs_message.TYPE_ERROR)
      }
    })

  });
  $('#datetimepicker').datetimepicker({
    format: 'yyyy-mm-dd hh:ii'
  });
  $('#cancel_add').on('click', function () {
    parent.document.getElementById("rightContent").setAttribute("src", "aunt.html");
  });
  $('.prov-city-area').province_city_area();
  $('#native_provcityarea select').prop('disabled', 'disabled');
});