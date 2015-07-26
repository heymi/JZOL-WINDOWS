$(function () {
  var show_share = getQueryString('noshare');
  if (show_share == '1') {
    $('#share_button').hide();
  }

  var orderId = getQueryString('orderId');
  var paramData = {id: orderId};
  $.ajax({
    url: CONFIG.API_DOMAIN + '/demands/detail',
    type: 'POST',
    data: paramData,
    success: function (ret) {
      var retObj = JSON.parse(ret);
      var demands_info = retObj.data.demands_info;
      var bill_info = retObj.data.bill_info;
      $('#order_id').text(demands_info.id);
      $('.order-type').text(paramMap['service_range'][demands_info.type]);
      $('#work_time').text(new Date(demands_info.work_start_time * 1000).format('yyyy.mm.dd') + ' - ' + new Date(demands_info.work_end_time * 1000).format('yyyy.mm.dd'));
      $('#employer_name').text(demands_info.employer_name);
      $('#employer_phone').text(demands_info.employer_phone);
      $('#remark').text(demands_info.remark || '暂无');
      $('#content').text(demands_info.content || '暂无');
      $('#employee_pay_lower').text(demands_info.employee_pay_lower);
      $('#employee_pay_upper').text(demands_info.employee_pay_upper);
      $('#employee_pay_types').text(demands_info.employee_pay_types === 1 ? '小时' : '月');
      $('#trial_time').text(demands_info.trial_time ? new Date(demands_info.trial_time * 1000).format('yyyy.mm.dd HH:MM') : '暂无');
      $('#service_address').text($.province_city_area(demands_info.service_prov, demands_info.service_city, demands_info.service_area, demands_info.service_address) || '无');
      $('#employee_age_lower').text(demands_info.employee_age_lower);
      $('#employee_age_upper').text(demands_info.employee_age_upper);
      $('#employee_experience').text(demands_info.employee_experience);
      $('#requirements').text(demands_info.requirements);
      $('#employee_education').text(paramMap.qualification[demands_info.employee_education]);

      // 把查询条件存储到 localstorage
      var postData = {};
      postData.service = demands_info.type;
//				postData.qualification = demands_info.employee_education;
      store('match_aunt', postData);
      $('#to_dispath').attr('onclick', "location.href='order-match.html?demandId=" + demands_info.id + "'");
    }
  });

  $('#drop_order').on('click', function () {
    var paramObj = {};
    var order_id = getQueryString('orderId');
    var remark = $('#drop_order_remark').val();
    paramObj.id = order_id;
    paramObj.remark = remark;
    $.ajax({
      url: CONFIG.API_DOMAIN + "/demands/over",
      type: 'POST',
      data: paramObj,
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          $.scojs_message('取消成功', $.scojs_message.TYPE_OK);
          setTimeout(function () {
            parent.document.getElementById("rightContent").setAttribute("src", "list-local.html");
            $('#sendingAunt').modal('hide');
          }, 1e3);
        } else {
          $.scojs_message(errorCode['code_' + retObj.code], $.scojs_message.TYPE_ERROR);
        }
      },
      error: function (ret) {
        $.scojs_message('取消失败', $.scojs_message.TYPE_ERROR)
      }
    });
  });

  $('.datetimepicker').datetimepicker({
    format: 'yyyy/mm/dd',
    autoclose: true,
    minView: 2
  });
  $('#share_order').on('click', function () {
    var paramObj = {};
    paramObj.id = getQueryString('orderId');
    paramObj.public_demand = $('#public_demand').val();
    paramObj.public_time = $('#public_time').val() ? new Date($('#public_time').val()).getTime() / 1000 : 0;
    paramObj.public_phone = $('#public_phone').val();
    paramObj.public_tel = $('#public_tel').val();
    $.ajax({
      url: CONFIG.API_DOMAIN + "/demands/shareDemands",
      type: 'POST',
      data: paramObj,
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          $.scojs_message('分享订单成功', $.scojs_message.TYPE_OK);
          setTimeout(function () {
            parent.document.getElementById("rightContent").setAttribute("src", "list-shared.html");
          }, 1e3);
        } else {
          $.scojs_message(errorCode['code_' + retObj.code], $.scojs_message.TYPE_ERROR);
        }
      },
      error: function (ret) {
        $.scojs_message('合同签订失败', $.scojs_message.TYPE_ERROR)
      }
    });
  });
});