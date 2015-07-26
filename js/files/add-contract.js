$(function () {
  var contract_needed_data = store('contract_needed_data');
  $('#userName').val(contract_needed_data.userName);
  $('#eename').val(contract_needed_data.eename);
  $('#type').val(contract_needed_data.type);

  $('#message_trigger_ok').on('click', function () {
    var paramObj = {};
    paramObj.type = getQueryString('type');
    paramObj.status = getQueryString('status');
    paramObj.oid = getQueryString('oid');
    paramObj.eid = getQueryString('eid');
    paramObj.eeid = getQueryString('eeid');
    paramObj.eename = $('#eename').val();
    paramObj.userName = $('#userName').val();
    paramObj.create = $('#create').val();
    paramObj.start = $('#start').val();
    paramObj.end = $('#end').val();
    paramObj.payType = $('#payType').val();
    paramObj.payMoney = $('#payMoney').val();
    paramObj.ePay = $('#ePay').val();
    paramObj.eePay = $('#eePay').val();
    paramObj.remark = $('#remark').val();
    $.ajax({
      url: CONFIG.API_DOMAIN + "/contracts/add",
      type: 'POST',
      data: paramObj,
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          $.scojs_message('合同签订成功', $.scojs_message.TYPE_OK);
          $.ajax({
            url: CONFIG.API_DOMAIN + "/bill/update",
            type: 'POST',
            data: {
              id: retObj.data.order_id,
              cid: retObj.data.cid
            },
            success: function (ret) {
              var retObj = JSON.parse(ret);
              if (retObj.code == '0') {
                setTimeout(function () {
                  parent.document.getElementById("rightContent").setAttribute("src", "order-service.html?orderId=" + getQueryString('did'));
                }, 1e3);
              } else {
                window.location.reload();
              }
            }
          });
        } else {
          $.scojs_message(errorCode['code_' + retObj.code], $.scojs_message.TYPE_ERROR);
        }
      },
      error: function (ret) {
        $.scojs_message('合同签订失败', $.scojs_message.TYPE_ERROR)
      }
    });
  });

  $('#cancel_add_contract').on('click', function () {
    window.location.href = "order-setup.html?orderId=" + getQueryString('did');
  });
  $('.datetimepicker').datetimepicker({
    format: 'yyyy/mm/dd',
    autoclose: true,
    minView: 2
  });
});