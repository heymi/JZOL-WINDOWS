$(function () {
  $('[data-toggle="popover"]').popover();

  $('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
    e.stopPropagation();
  });
});