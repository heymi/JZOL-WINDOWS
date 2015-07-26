$(function () {
  $('#message_trigger_ok').on('click', function (e) {
    e.preventDefault();
    var paramObj = {};
    paramObj.identity = $("#identity").val();
    paramObj.username = $("#username").val();
    if ($("#tellphone").val()) {
      paramObj.tell = $("#tellphone").val();
    }

    paramObj.addr = $("#addr").val();
    paramObj.source = 1;
    if ($("#specfic_requirement").val()) {
      paramObj.specfic_requirement = $("#specfic_requirement").val();
    }
    paramObj.phone = parseInt($("#phone").val(), 10);
    paramObj.sex = $("#client_sex input:checked").val();
    paramObj.prov = $('.prov-select').val();
    paramObj.city = $('.city-select').val();
    paramObj.area = $('.area-select').val();
    if ($("#family").val()) {
      paramObj.family = $("#family").val();
    }
    if ($('#client_content').val()) {
      paramObj.content = $('#client_content').val();
    }
    if ($("#remark").val()) {
      paramObj.remark = $("#remark").val();
    }
    $.ajax({
      url: CONFIG.API_DOMAIN + "/employer/add",
      type: 'POST',
      data: paramObj,
      success: function (data, textStatus) {
        var obj = JSON.parse(data)
        if (obj.code == 0) {
          $.scojs_message('添加成功', $.scojs_message.TYPE_OK);
          parent.document.getElementById("rightContent").setAttribute("src", "client.html?employee_id=ret.data.id");
        } else {
          $.scojs_message(errorCode["code_" + obj.code], $.scojs_message.TYPE_ERROR)
        }
      },
      error: function (ret) {
        alert('error')
      }
    })
  });

  $('#message_trigger_err').on('click', function (e) {
    e.preventDefault();
    $.scojs_message('添加失败', $.scojs_message.TYPE_ERROR);
  });
  $('#datetimepicker').datetimepicker({
    format: 'yyyy-mm-dd hh:ii'
  });

  $('#cancel_add').on('click', function () {
    parent.document.getElementById("rightContent").setAttribute("src", "client.html");
  });
  $('.prov-city-area').province_city_area();
});