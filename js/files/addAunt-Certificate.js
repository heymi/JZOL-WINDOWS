var employeeId = getQueryString("employee_id");
var auntExists = false;
var imgUrl = CONFIG.IMG_URL;
function certificateChange(ele) {
  if (ele.checked) {
    var formLastChild = $('#certFormId:last-child');
    var newArea = createPhotoDiv(ele.name)
    formLastChild.append(newArea);
  } else {
    $('#certFormId [identify="' + ele.name + '"]').remove()
  }
}
$(function () {
  if (employeeId) {
    auntExists = true;
    auntId = employeeId;
    var paramData = {employee_id: employeeId};

    $.ajax({
      url: CONFIG.API_DOMAIN + '/employee/detail',
      type: 'POST',
      data: paramData,
      success: function (ret) {
        var retObj = JSON.parse(ret);


        _.each(retObj.data.upload, function (rec) {
          if (rec.type == 'identity' || rec.type == 'identityHander') {
            document.getElementById(rec.type + "ImgDiv").innerHTML = '<img id="' + rec.type + 'Img" src="' + imgUrl + rec.dir_name + '/' + rec.image_l + '">';
          }
        })
        //基本信息
        $("#identity").val(retObj.data.static.identity);
      }
    })
  }
  $('#prev_step').on('click', function () {
    var employId = getQueryString('employee_id');
    parent.document.getElementById("rightContent").setAttribute("src", "addAunt-JobDetail.html?employeeId=" + employId + "&isUpdate=" + auntExists);
  });
  $('#message_trigger_ok').on('click', function () {
    var employeeId = getQueryString("employee_id");
    window.location.href = "aunt-resume.html?employeeId=" + employeeId;
  });
});