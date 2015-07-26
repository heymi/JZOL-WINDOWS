$(function () {
  $.ajax({
    url: CONFIG.API_DOMAIN + '/Shop/list',
    type: 'POST',
    success: function (ret) {
      var retObj = JSON.parse(ret);
      if (retObj.code == '0') {
        alert('检测到您已经登录，正在为您跳转到首页...');
        window.location.href = "index.html";
      }
    }
  });

  $('#loginForm').submit(function (e) {
    var param = {};
    param.userName = $('#userName').val();
    param.passWord = $('#passWord').val();
    $.ajax({
      cache: true,
      type: "POST",
      url: CONFIG.API_DOMAIN + "/user/shopLogin",
      data: param,
      async: false,
      error: function (request) {
        window.location.reload()
      },
      success: function (data, textStatus) {
        var obj = JSON.parse(data)
        if (obj.code == 0) {
          window.open('index.html', '_self')
        } else {
          alert('账号或密码错误请重新输入！');
          window.location.reload();
        }
      }
    });
    e.preventDefault(); //STOP default action
    e.unbind(); //unbind. to stop multiple form submit.
  });
});