$(function () {
  $('.prov-city-area').province_city_area();

  $('#cancel_add').on('click', function () {
    parent.document.getElementById("rightContent").setAttribute("src", "shop.html");
  });

  $('#message_trigger_ok').on('click', function (e) {
    e.preventDefault();
    var paramData = {};
    paramData.user_name = $.trim($('#user_name').val());
    paramData.password = $.trim($('#password').val());
    paramData.name = $('#shop_name').val();
    paramData.city_id = $('.city-select').val();
    paramData.area_id = $('.area-select').val();
    paramData.prov_id = $('.prov-select').val();
    paramData.address = $('#address').val();
    paramData.manager_name = $('#manager_name').val();
    paramData.manager_phone = $('#manager_phone').val();
    paramData.type = $("#shop_type input:checked").val();
    paramData.business = getMultiSelectValue('business_range');
    $.ajax({
      url: CONFIG.API_DOMAIN + '/Shop/add',
      data: paramData,
      method: 'POST',
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          $.scojs_message('添加成功', $.scojs_message.TYPE_OK);
          setTimeout(function () {
            parent.document.getElementById("rightContent").setAttribute("src", "shop.html");
          }, 1e3);
        } else {
          $.scojs_message(errorCode['code_' + retObj.code], $.scojs_message.TYPE_ERROR);
        }
      },
      error: function (ret) {
      }
    })
  });
});