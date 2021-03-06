var xhr;

function zswFun(callback) {
  var $btn = $('#message_trigger_ok');
  if (xhr.readyState == 4 && xhr.status == 200) {
    var retObj = JSON.parse(xhr.responseText);
    if (retObj.code != "0") {
      setTimeout(function () {
        $.scojs_message(errorCode["code_" + retObj.code], $.scojs_message.TYPE_ERROR);
        callback && callback();
      }, 1e3);
      //$btn.button('reset');
    } else {
      setTimeout(function () {
        $.scojs_message('上传成功', $.scojs_message.TYPE_OK);
        callback && callback();
      }, 1e3);
      //$btn.button('reset');
    }
  } else if (xhr.readyState == 4 && xhr.status != 200) {
    setTimeout(function () {
      $.scojs_message('服务器异常错误', $.scojs_message.TYPE_ERROR);
      callback && callback();
    }, 1e3);
    //$btn.button('reset');
  }
}

function UploadFiles(paramArr) {

}

function UploadFile(param, callback) {

  var FileController = CONFIG.API_DOMAIN + "/employee/upload";

  var form = new FormData();

  form.append("type", param.type);

  form.append("employee_id", param.employee_id);

  form.append("upfile", param.upfile);
  //form.append("upfile", $('#testInput')[0].files[0]);

  xhr = new XMLHttpRequest();

  xhr.open("post", FileController, true);

  xhr.onreadystatechange = function () {
    zswFun(callback)
  };

  xhr.send(form);

}

function createPhotoDiv(eleName) {

  var template = '<div class="fl" identify="' + eleName + '" id="' + eleName + '"><div id="' + eleName + 'ImgDiv">' +
      '<img id="' + eleName + 'Img" width=180 height=180 border=0 src="img/jiazhengol.jpg"></div>' +
      '<br/><center>' + paramMap['certificateType'][eleName] + '</center>' +
      '<br/>上传文件： <input type="file" onchange="previewImage(this)" value="上传" id="' + eleName + 'Input"/></div>';

  return template;

}

function createPhotoDisplayDiv4Cert(eleName, imgSrc) {

  var template = '<div class="fl" identify="' + eleName + '" id="' + eleName + '"><div id="' + eleName + 'ImgDiv">' +
      '<img id="' + eleName + 'Img" width=180 height=180 border=0 src="' + imgSrc + '"></div>' +
      '<br/><center>' + paramMap['certificateType'][eleName] + '</center>' +
      '<br/>上传文件： <input type="file" onchange="previewImage(this)" value="上传" id="' + eleName + 'Input"/></div>';

  return template;

}

function createPhotoDisplayDiv4Resume(eleName, imgSrc) {

  var template = '<div class="fl col-xs-6 col-md-3" identify="' + eleName + '" id="' + eleName + '"><div id="' + eleName + 'ImgDiv">' +
      '<img id="' + eleName + 'Img" width=180 height=180 border=0 src="' + imgSrc + '">' +
      '<br/><center>' + paramMap['certificateType'][eleName] + '</center>'
  '</div>';

  return template;

}

function previewImage(file) {
  var MAXWIDTH = 260;
  var MAXHEIGHT = 180;
  var elementName = file.id.substr(0, file.id.indexOf('Input'));
  var div = document.getElementById(elementName + 'ImgDiv');
  if (file.files && file.files[0]) {
    var imgName = elementName + 'Img';
    div.innerHTML = '<img id="' + imgName + '">';
    var img = document.getElementById(imgName);
    img.onload = function () {
      var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
      img.width = rect.width;
      img.height = rect.height;
//                 img.style.marginLeft = rect.left+'px';
      img.style.marginTop = rect.top + 'px';
    }
    var reader = new FileReader();
    reader.onload = function (evt) {
      img.src = evt.target.result;
    }
    reader.readAsDataURL(file.files[0]);
  }
  else {
    var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
    file.select();
    var src = document.selection.createRange().text;
    div.innerHTML = '<img id=imghead>';
    var img = document.getElementById('imghead');
    img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
    var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
    status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
    div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
  }

  // 预览后上传
  var $btn = $('#message_trigger_ok').button('loading');
  var paramObj = {};
  var $identify = $(file).parents('[identify]');
  $identify.find('.progress').show();
  var fileId = $identify[0].id;
  paramObj.type = fileId;
  paramObj.employee_id = employeeId;
  paramObj.upfile = $('#' + fileId + 'Input')[0].files[0];
  UploadFile(paramObj, function () {
    $identify.find('.progress').hide();
    $btn.button('reset');
  });
}
function clacImgZoomParam(maxWidth, maxHeight, width, height) {
  var param = {top: 0, left: 0, width: width, height: height};
  if (width > maxWidth || height > maxHeight) {
    rateWidth = width / maxWidth;
    rateHeight = height / maxHeight;

    if (rateWidth > rateHeight) {
      param.width = maxWidth;
      param.height = Math.round(height / rateWidth);
    } else {
      param.width = Math.round(width / rateHeight);
      param.height = maxHeight;
    }
  }

  param.left = Math.round((maxWidth - param.width) / 2);
  param.top = Math.round((maxHeight - param.height) / 2);
  return param;
}