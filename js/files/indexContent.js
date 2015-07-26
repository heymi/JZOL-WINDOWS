var list_paramMap = {
  source: {
    0: '未选择',
    1: '本地',
    2: '网络',
    3: '家政在线'
  },
  type: {
    1: '临时钟点工',
    2: '长期钟点工',
    3: '保姆',
    4: '育儿嫂',
    5: '疾病护理',
    6: '老人护理',
    7: '月嫂',
    8: '早教',
    9: '催乳师'
  },
  status: {
    0: '待处理',
    1: '试工中',
    2: '服务中',
    3: '已完成',
    4: '试工失败',
    5: '需求终止',
    6: '已取消'
  }
};
$(function () {
  $.get(CONFIG.API_DOMAIN + '/demands/list', function (data) {
    var listdata = JSON.parse(data).data.list;
    var str = ''
    $.each(listdata, function (index, value) {
      if (index > 3) return false;
      var status = value.bill_status || value.status;
      var link_button;
      switch (status) {
        case 0:
          link_button = "order-wait.html?orderId=" + value.id;
          break;
        case 1:
          link_button = "order-setup.html?orderId=" + value.id;
          break;
        case 3:
          link_button = "order-finish.html?orderId=" + value.id;
          break;
        case 5:
          link_button = "order-abend.html?orderId=" + value.id;
          break;
        case 6:
          link_button = "order-canceled.html?orderId=" + value.id;
          break;
        default :
          link_button = "order-service.html?orderId=" + value.id;
      }
      str += "<tr>\
                  <td><strong>" + (value.employee_name || '未指派') + "</strong></td>\
                  <td>" + value.employer_name + "</td>\
                  <td>" + paramMap.service_range[value.type] + "</td>\
                  <td><button data-url='" + link_button + "' type=\"button\" class=\"btn-green-small click-button\">" + list_paramMap.status[value.status] + "</button></td>\
                </tr>";
    });
    $('#order_list').html(str);
  });
  $('#click_for_more').on('click', function () {
    window.location.href = 'list-local.html';
    $(parent.document).find("#menuUl .selected").removeClass("selected");
    $(parent.document).find("#menuUl li").eq(2).addClass("selected");
  });
  $('#order_list_wrap').delegate('.click-button', 'click', function () {
    var url = $(this).attr('data-url');
    window.location.href = url;
    $(parent.document).find("#menuUl .selected").removeClass("selected");
    $(parent.document).find("#menuUl li").eq(2).addClass("selected");
  });
});

$(function () {
  $('#download-manual').click(function () {
    gui.Shell.openExternal("http://www.jiazhengol.com/download/%E4%BA%A7%E5%93%81%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E-%E5%85%AC%E6%B5%8B%E7%89%88.rar");
  })
});