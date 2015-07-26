$(function () {
  var orderId = getQueryString('orderId');
  var paramData = {id: orderId};
  $.ajax({
    url: CONFIG.API_DOMAIN + '/demands/detail',
    type: 'POST',
    data: paramData,
    success: function (ret) {
      var retObj = JSON.parse(ret);
      var demands_info = retObj.data.demands_info;
      var bill_id = JSON.parse(demands_info.bill_id);
      bill_id = bill_id[bill_id.length - 1];
      var bill_info = retObj.data.bill_info[bill_id];
      console.log(bill_info)
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

      if (bill_info) {
        $('#visit_time').text(new Date(bill_info.trial_time * 1000).format('yyyy.mm.dd HH:MM'));
        $('#trial_day').text(bill_info.trial_day);
        $('#employer_money').text(bill_info.employer_money);
        $('#employee_money').text(bill_info.employee_money);
        $('#employee_end_pay_money').text(bill_info.employee_end_pay_money);
        $('#employee_end_pay_types').text(bill_info.employee_end_pay_types === '0' ? '月' : '小时');
      } else {
        $('#bill_info').hide();
      }

      // 把查询条件存储到 localstorage
      var postData = {};
      postData.service = demands_info.type;
//				postData.qualification = demands_info.employee_education;
      store('match_aunt', postData);
      $('#to_dispath').attr('onclick', "location.href='order-match.html?demandId=" + demands_info.id + "'");
    }
  });

  $(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});
});