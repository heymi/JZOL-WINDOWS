var auntExists = false;
var isUpdate = getQueryString("isUpdate");
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
        var dataDynamic = retObj.data.dynamic;

        //基本信息
        $("#identity").val(retObj.data.static.identity);
        $("#name").val(retObj.data.static.name);
        $("#sex input[value=" + retObj.data.static.sex + "]").prop('checked', true);
        $("#qualification input[value=" + retObj.data.static.qualification + "]").prop('checked', true);
        $("#phone").val(retObj.data.static.phone || '');
        $("#age").val(retObj.data.static.age);
        $("#nationality").val(retObj.data.static.nationality);
        $("#stature").val(retObj.data.static.stature);
        $("#body").val(retObj.data.static.body);
        $("#identity").val(retObj.data.static.identity);
        $("#family").val(retObj.data.static.family);
        $("#content").val(retObj.data.static.content);
        $("#addr").val(retObj.data.static.addr);

        $('#service_provcityarea').province_city_area(dataDynamic.service_prov, dataDynamic.service_city, dataDynamic.service_area);

        $('#expected_salary').val(retObj.data.static.expect_salary)
        $('#daily_salary').val(retObj.data.static.daily_salary)

        //工作信息
        setMultiSelectValue('service_range', retObj.data.dynamic.service_range)
        setMultiSelectValue('status', retObj.data.dynamic.status)
        setMultiSelectValue('type', retObj.data.dynamic.type)
        $('#arrival_time').val(retObj.data.dynamic.arrival_time)
        $('#emergency').val(retObj.data.dynamic.emergency)
        $('#relationship').val(retObj.data.dynamic.relationship)
        $('#linkman_tel').val(retObj.data.dynamic.linkman_tel || '')
        $('#remark').val(retObj.data.dynamic.remark)
      }
    })
  }

  $('#prev_step').on('click', function () {
    var employId = getQueryString('employeeId');
    parent.document.getElementById("rightContent").setAttribute("src", "add-aunt.html?employeeId=" + employId);
  });
  $('#message_trigger_ok').on('click', function (e) {
    e.preventDefault();
    var employId = getQueryString('employeeId');
    var paramObj = {};
    paramObj.status = getMultiSelectValue('status');
    paramObj.employee_id = employId;
    paramObj.service_range = getMultiSelectValue('service_range');
    paramObj.emergency = $('#emergency').val();
    paramObj.relationship = $('#relationship').val();
    paramObj.linkman_tel = $('#linkman_tel').val();
    paramObj.arrival_time = $('#arrival_time').val();
    paramObj.remark = $('#remark').val();
    paramObj.service_prov = $('#service_provcityarea .prov-select').val();
    paramObj.service_city = $('#service_provcityarea .city-select').val();
    paramObj.service_area = $('#service_provcityarea .area-select').val();


    var postUrl = '';
    if (isUpdate == 'true') {
      postUrl = CONFIG.API_DOMAIN + "/employeeShop/update";
    } else {
      postUrl = CONFIG.API_DOMAIN + "/employeeShop/add";
    }
    $.ajax({
      url: postUrl,
      type: 'POST',
      data: paramObj,
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          parent.document.getElementById("rightContent").setAttribute("src", "addAunt-Certificate.html?employee_id=" + employId + "&isUpdate=" + auntExists);
        } else if (retObj.code == '12064') {
          alert('本门店已经添加过此阿姨')
        } else {
          alert('添加失败')
        }
      },
      error: function (ret) {
        alert('error')
      }
    })
  });

  $('#arrival_time').datetimepicker({
    format: 'yyyy/mm/dd',
    autoclose: true,
    minView: 2
  });

  $('#message_trigger_err').on('click', function (e) {
    e.preventDefault();
    $.scojs_message('添加失败', $.scojs_message.TYPE_ERROR);
  });

  $('.prov-city-area').province_city_area();
});