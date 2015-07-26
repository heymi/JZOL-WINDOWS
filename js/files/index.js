//根据左侧菜单显示相应右侧的网页内容
$(function () {
  $("#rightContent").attr("src", "./indexContent.html");
  $("#menuUl li").addClass("menuLi")
});
$("#menuUl li").click(function (e) {
  $("#menuUl .selected").removeClass("selected");
  $(this).addClass("selected");
})
$(".shop").click(function (e) {
  $("#rightContent").attr("src", "./shop.html");
});
$(".list").click(function (e) {
  $("#rightContent").attr("src", "./list-local.html");
});
$(".aunt").click(function (e) {
  $("#rightContent").attr("src", "./aunt.html");
});
$(".client").click(function (e) {
  $("#rightContent").attr("src", "./client.html");
});
$(".account").click(function (e) {
  $("#rightContent").attr("src", "./change-password.html");
});
$(".notificationBtn").click(function (e) {
  $("#rightContent").attr("src", "./notification.html");
})
$("#orderFinishedLink").click(function (e) {
  $("#rightContent").attr("src", "./order-finish.html");
})
$("#orderSharedLink").click(function (e) {
  $("#rightContent").attr("src", "./order-shared-select.html");
});
$('#shop_detail').on('click', function () {
  $("#rightContent").attr("src", "./profile.html");
});

$(function () {
  $('[data-toggle="popover"]').popover();
});

$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

$(function () {
  $(".dropdown-menu").on("click", "[data-stopPropagation]", function (e) {
    e.stopPropagation();
  });
  //获取省市区数据
  $.ajax({
    url: CONFIG.API_DOMAIN + '/user/getFiles',
    type: 'POST',
    success: function (ret) {
      window.PROVCITYAREA = JSON.parse(ret).data;
    }
  });
  //根据窗口缩放设置主题内容的高度
  var windowHeight = $(window).height();
  var headerHeight = $('#header').height();
  $('#rightContent').height(windowHeight - headerHeight - 48);
  $(window).resize(function () {
    var windowHeight = $(window).height();
    var headerHeight = $('#header').height();
    $('#rightContent').height(windowHeight - headerHeight - 48);
  });
  //登出
  $('#logout').on('click', function () {
    $.ajax({
      url: CONFIG.API_DOMAIN + '/user/loginOut',
      type: 'POST',
      success: function (ret) {
        window.location.href = "login.html";
      }
    });
  });
});