$(function () {
  var employerId = getQueryString('employerId');
  var paramData = {eid: employerId};
  $.ajax({
    url: CONFIG.API_DOMAIN + '/employer/detail',
    type: 'GET',
    data: paramData,
    success: function (ret) {
      var retObj = JSON.parse(ret);
      var data = retObj.data.list;
      $("#username").text(retObj.data.list.username);
      $("#client_sex").text(retObj.data.list.sex === '0' ? '保密' : retObj.data.list.sex === '1' ? '先生' : '女士');
      $("#phone").text(retObj.data.list.phone || "暂无");
      $("#tell").text(retObj.data.list.tell || "暂无");
      $("#identity").text(retObj.data.list.identity || "暂无");
      $("#family").text(retObj.data.list.family == '0' ? "暂无" : retObj.data.list.family);
      $("#client_content").text(retObj.data.list.content == '0' ? "暂无" : retObj.data.list.content);
      $("#specfic_requirement").text(retObj.data.list.specfic_requirement == '0' ? "暂无" : retObj.data.list.specfic_requirement);
      $("#remark").text(retObj.data.list.remark == '0' ? "暂无" : retObj.data.list.remark);
      $("#addr").text($.province_city_area(data.prov, data.city, data.area, data.addr) || "暂无");
    }
  });

  var employerId = getQueryString('employerId');
  $('.client-edit').attr('onclick', 'window.location.href="client-edit.html?employerId=' + employerId + '"');
});