$(function () {
  var employerId = getQueryString('employerId');
  var paramData = {eid: employerId};
  $.ajax({
    url: CONFIG.API_DOMAIN + '/employer/detail',
    type: 'GET',
    data: paramData,
    success: function (ret) {
      var retObj = JSON.parse(ret);
      $("#username").val(retObj.data.list.username);
      $("#client_sex input[value=" + retObj.data.list.sex + "]").prop('checked', true);
      $("#phone").val(retObj.data.list.phone);
      $("#tell").val(retObj.data.list.tell);
      $("#identity").val(retObj.data.list.identity);
      $("#family").val(retObj.data.list.family);
      $("#client_content").val(retObj.data.list.content);
      $("#specfic_requirement").val(retObj.data.list.specfic_requirement);
      $("#remark").val(retObj.data.list.remark);
      $("#addr").val(retObj.data.list.addr);
      $('.prov-city-area').province_city_area(retObj.data.list.prov, retObj.data.list.city, retObj.data.list.area);
    }
  });

  $('#message_trigger_ok').on('click', function (e) {

    e.preventDefault();
    var paramObj = {};
    var employerId = getQueryString('employerId');
    paramObj.identity = $("#identity").val();
    paramObj.username = $("#username").val();
    paramObj.tell = $("#tellphone").val();
    paramObj.addr = $("#addr").val();
    paramObj.specfic_requirement = $("#content").val();
    paramObj.phone = $("#phone").val();
    paramObj.sex = $("#client_sex input:checked").val();
    paramObj.specfic_requirement = $("#specfic_requirement").val();
    paramObj.family = $("#family").val();
    paramObj.content = $("#client_content").val();
    paramObj.remark = $("#remark").val();
    paramObj.prov = $('.prov-select').val();
    paramObj.city = $('.city-select').val();
    paramObj.area = $('.area-select').val();
    $.ajax({
      url: CONFIG.API_DOMAIN + "/employer/update?eid=" + employerId,
      type: 'POST',
      data: paramObj,
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          $.scojs_message('添加成功', $.scojs_message.TYPE_OK);


          parent.document.getElementById("rightContent").setAttribute("src", "client.html");
        } else {
          alert('修改失败')
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
});