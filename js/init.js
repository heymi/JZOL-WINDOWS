/**
 * Created by Leeiio on 15/6/24.
 */

$(function () {
  $.ajaxSetup({
    complete: function(xhr, status){
      var code = JSON.parse(xhr.responseText).code;
      if(code === -1){
        $.scojs_message('登录失效，请退出后请重新登录！', $.scojs_message.TYPE_ERROR);
      }
    }
  });
  //$('.container').height($(window).height());
  if (window.top != window.self) {
    var paddingHeight = parseInt($('.container').css('padding-top').replace('px', ''),10) + parseInt($('.container').css('padding-bottom').replace('px', ''),10);
    $('.container').height($(window).height() - paddingHeight);
  }
});