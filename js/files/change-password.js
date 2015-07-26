$(function () {
  $('#message_trigger_ok').on('click', function (e) {
    $.ajax({
      url: CONFIG.API_DOMAIN + "/user/updatePassWord",
      type: 'POST',
      data: {
        passWord: $('#passWord').val(),
        newPassWord: $('#newPassWord').val()
      },
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          $.scojs_message('密码修改成功，请用新密码重新登录！', $.scojs_message.TYPE_OK);
          $.ajax({
            url: CONFIG.API_DOMAIN + '/user/loginOut',
            type: 'POST',
            success: function (ret) {
              setTimeout(function () {
                parent.window.location.href = "login.html";
              }, 1e3);
            }
          });
        } else {
          $.scojs_message(errorCode["code_" + retObj.code], $.scojs_message.TYPE_ERROR);
        }
      },
      error: function (ret) {
        alert('error');
      }
    })
  });
});