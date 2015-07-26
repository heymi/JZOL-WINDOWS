$(function () {
  var cid = getQueryString('cid');
  $.ajax({
    url: CONFIG.API_DOMAIN + '/contracts/detail?cid=' + cid,
    type: 'GET',
    success: function (ret) {
      var retObj = JSON.parse(ret).data.list;
      $('#type').text(paramMap.service_range[retObj.type]);
      $('#userName').text(retObj.userName);
      $('#eename').text(retObj.eename);
      $('#create').text(retObj.create);
      $('#start').text(retObj.start);
      $('#end').text(retObj.end);
      $('#payMoney').text(retObj.payMoney);
      $('#payType').text(retObj.payType === 0 ? '月' : '小时');
      $('#ePay').text(retObj.ePay);
      $('#eePay').text(retObj.eePay);
      $('#remark').text(retObj.remark);
    }
  })
});