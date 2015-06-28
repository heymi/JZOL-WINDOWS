/**
 * Created by Leeiio on 15/6/24.
 */

$(function () {
  //$('.container').height($(window).height());
  if (window.top != window.self) {
    var paddingHeight = parseInt($('.container').css('padding-top').replace('px', ''),10) + parseInt($('.container').css('padding-bottom').replace('px', ''),10);
    $('.container').height($(window).height() - paddingHeight);
  }
});