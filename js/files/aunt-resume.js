var imgUrl = CONFIG.IMG_URL;
$(function () {
  var employeeId = getQueryString('employeeId');
  var paramData = {employee_id: employeeId};

  $.ajax({
    url: CONFIG.API_DOMAIN + '/employee/detail',
    type: 'POST',
    data: paramData,
    success: function (ret) {
      var retObj = JSON.parse(ret);
      var dataDynamic = retObj.data.dynamic;
      var dataStatic = retObj.data.static;

      //基本信息
      var header_desc_str = $.province_city_area(retObj.data.static.native_prov, retObj.data.static.native_city, retObj.data.static.native_area) + '人。';
      if (retObj.data.static.career) {
        header_desc_str += '年工作经验。';
      }
      $('#header-desc').text(header_desc_str);
      if (retObj.data.static.career) {
        $('#career').text(retObj.data.static.career + '年');
      } else {
        $('#career').hide().prev().hide();
      }
      $('#aunt_native').text($.province_city_area(retObj.data.static.native_prov, retObj.data.static.native_city, retObj.data.static.native_area));
      $('#aunt_living').text($.province_city_area(retObj.data.static.living_prov, retObj.data.static.living_city, retObj.data.static.living_area, retObj.data.static.living_address));
      $("#identity").text(retObj.data.static.identity);
      $(".aunt-name").text(retObj.data.static.name);
      $("#sex").text(paramMap.sex[retObj.data.static.sex]);
      $("#qualification").text(paramMap.qualification[retObj.data.static.qualification]);
      $("#phone").text(retObj.data.static.phone);
      $("#age").text(retObj.data.static.age);
      $("#identity").text(retObj.data.static.identity);
      $('#marriage').text(paramMap.marriage[retObj.data.static.marriage])
      var aunt_addr = retObj.data.static.living_address;
      $('#addr').attr('href', 'http://map.baidu.com/?l=&s=s%26wd%3D' + aunt_addr).text(aunt_addr);
      $('#expected_salary').text(retObj.data.static.expect_salary ? retObj.data.static.expect_salary + '/月' : '无');
      $('#arrival_time').text(dataDynamic.arrival_time || '暂无');
      $('#zodiac_sign').text(paramMap.zodiac_sign[dataStatic.zodiac_sign]);
      $('#constellation').text(paramMap.constellation[dataStatic.constellation]);

      if (dataDynamic.service_prov && dataDynamic.service_city) {
        $('#service_addr').text($.province_city_area(dataDynamic.service_prov, dataDynamic.service_city));
      }
      if (retObj.data.upload[1]) {
        $('#aunt_avatar').attr('src', imgUrl + retObj.data.upload[1].dir_name + '/' + retObj.data.upload[1].image_l);
      }
      _.each(retObj.data.upload, function (rec) {
        if (rec.type == 'identity' || rec.type == 'identityHander') {
          document.getElementById(rec.type + "ImgDiv").innerHTML = '<img id="' + rec.type + 'Img" src="' + imgUrl + rec.dir_name + '/' + rec.image_l + '">';
        } else {
          var imgSrc = imgUrl + rec.dir_name + '/' + rec.image_l;
          var formLastChild = $('#certFormId:last-child');
          var newArea = createPhotoDisplayDiv4Resume(rec.type, imgSrc)
          formLastChild.append(newArea);
        }
      })

      //工作信息
      var service_range = getMultiValue('service_range', retObj.data.dynamic.service_range, paramMap);
      $('#service_range').text(service_range || '暂无');

      $('#remard').text(retObj.data.dynamic.remark || '暂无');
    }
  });

  $('#datetimepicker').datetimepicker({
    format: 'yyyy-mm-dd hh:ii'
  });
});