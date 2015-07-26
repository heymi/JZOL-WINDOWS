$(function () {
  $('.datetimepicker').datetimepicker({
    format: 'yyyy/mm/dd hh:ii',
    autoclose: true
  });
  $('.datepicker').datetimepicker({
    format: 'yyyy/mm/dd',
    autoclose: true,
    minView: 2
  });
  $('#cancel_add').on('click', function () {
    parent.document.getElementById("rightContent").setAttribute("src", "list-local.html");
  });
  //省市区控件
  $('.prov-city-area').province_city_area();

  $('#message_trigger_ok').on('click', function (e) {
    e.preventDefault();
    var paramData = {};
    paramData.source = 1;
    paramData.phone = $('#employer_phone').val();
    paramData.name = $('#employer_name').val();
    // paramData.identity = $('#employer_identity').val();
    paramData.sex = $('#employer_sex input:checked').val();
    paramData.service_prov = $('.prov-select').val();
    paramData.service_city = $('.city-select').val();
    paramData.service_area = $('.area-select').val();
    paramData.service_address = $('#service_address').val();
    if ($('#remark').val()) {
      paramData.remark = $('#remark').val();
    }
    if ($('#content').val()) {
      paramData.content = $('#content').val();
    }
    paramData.type = $('#type input:checked').val();
    paramData.in_home = $('#in_home input:checked').val();
    paramData.trial_time = $('#trial_time').val() ? new Date($('#trial_time').val()).getTime() / 1000 : 0;
    paramData.work_start_time = $('#work_start_time').val() ? new Date($('#work_start_time').val()).getTime() / 1000 : 0;
    paramData.work_end_time = $('#work_end_time').val() ? new Date($('#work_end_time').val()).getTime() / 1000 : 0;
    if ($('#working_day input:checked').length) {
      paramData.working_day = getMultiSelectValue('working_day');
    }
    if ($('#employee_age_lower').val()) {
      paramData.employee_age_lower = $('#employee_age_lower').val();
    }
    if ($('#employee_age_upper').val()) {
      paramData.employee_age_upper = $('#employee_age_upper').val();
    }
    if ($('#employee_experience').val()) {
      paramData.employee_experience = $('#employee_experience').val();
    }
    if ($('#employee_education input:checked').length) {
      paramData.employee_education = getMultiSelectValue('employee_education');
    }
    if ($('#employee_pay_lower').val()) {
      paramData.employee_pay_lower = $('#employee_pay_lower').val();
    }
    if ($('#employee_pay_upper').val()) {
      paramData.employee_pay_upper = $('#employee_pay_upper').val();
    }
    if ($('#employee_pay_types').val()) {
      paramData.employee_pay_types = $('#employee_pay_types').val();
    }
    if ($('#requirements').val()) {
      paramData.requirements = $('#requirements').val();
    }
    $.ajax({
      url: CONFIG.API_DOMAIN + '/demands/add',
      data: paramData,
      method: 'POST',
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          $.scojs_message('添加成功', $.scojs_message.TYPE_OK);
          setTimeout(function () {
            parent.document.getElementById("rightContent").setAttribute("src", "list-local.html");
          }, 1e3);
        } else {
          $.scojs_message(errorCode['code_' + retObj.code], $.scojs_message.TYPE_ERROR);
        }
      },
      error: function (ret) {
        $.scojs_message('添加失败', $.scojs_message.TYPE_ERROR);
      }
    })
  });
});