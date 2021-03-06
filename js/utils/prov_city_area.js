/*!
 * Province City Area Chosen
 * Version: 1.0
 *
 * Copyright 2015 Leeiio
 * Released under the MIT license
 */

$.fn.province_city_area = function (_province,_city,_area) {
      function getProvCityAreaData(callback){
        var PROVCITYAREA = parent.window.PROVCITYAREA || window.PROVCITYAREA;
        if(PROVCITYAREA){
          callback(PROVCITYAREA);
        }else{
          $.ajax({
              url: CONFIG.API_DOMAIN + '/user/getFiles',
              type: 'POST',
              success : function (ret) {
                var data = JSON.parse(ret).data;
                window.PROVCITYAREA = data;
                callback(data);
              }
          });
        }
      }
      function genOptionsHtml(data){
        var option_html = '<option value="0">请选择</option>';
        $.each(data, function (index, value) {
          option_html += '<option value="'+value.id+'">'+value.name+'</option>';
        });
        return option_html;
      }
      return this.each(function() {
        var elem = this,
          $elem = $(elem);

        getProvCityAreaData(function(data){
          var $prov_select = $('<select class="form-control prov-select" data-type="prov"><option value="0">请选择</option></select>');
          var $city_select = $('<select class="form-control city-select" data-type="city"><option value="0">请选择</option></select>');
          var $area_select = $('<select class="form-control area-select" data-type="area"><option value="0">请选择</option></select>');
          var DATA_PROV = data.province;
          var DATA_CITY = data.cityData;
          var DATA_AREA = data.areaData;
          var prov_option_html = genOptionsHtml(DATA_PROV);
          $.each(DATA_PROV, function (index, prov) {
            prov_option_html += '<option value="'+prov.id+'">'+prov.name+'</option>';
          });
          $prov_select.html(prov_option_html);
          $elem.empty().append($prov_select.clone()).append($city_select.clone()).append($area_select.clone());
          $elem.undelegate().delegate('select', 'change', function(){
            var select_type = $(this).attr('data-type');
            if(select_type === 'prov'){
              var _prov_value = parseInt($(this).val(),10);
              var dataCity = [];
              $.each(DATA_CITY, function(index, value){
                if(value.province_id === _prov_value) dataCity.push(value);
              });
              var city_option_html = genOptionsHtml(dataCity);
              $elem.find('.city-select').html(city_option_html);
              $elem.find('.area-select').html(genOptionsHtml([]));
            }else if(select_type === 'city'){
              var _city_value = $(this).val();
              var dataArea = [];
              $.each(DATA_AREA, function(index, value){
                if(value.city_id === _city_value) dataArea.push(value);
              });
              var area_option_html = genOptionsHtml(dataArea);
              $elem.find('.area-select').html(area_option_html);
            }
          });
          if(_province){
            $elem.find('.prov-select').val(_province).change();
          }
          if(_city){
            $elem.find('.city-select').val(_city).change();
          }
          if(_area){
            $elem.find('.area-select').val(_area);
          }
        });
      });
};
$.province_city_area = function(_province,_city,_area,_address){
  var PROVCITYAREA = parent.window.PROVCITYAREA || window.PROVCITYAREA;
  _province = parseInt(_province,10);
  _city = parseInt(_city,10);
  _area = parseInt(_area,10);
  var DATA_PROV = PROVCITYAREA.province;
  var DATA_CITY = PROVCITYAREA.cityData;
  var DATA_AREA = PROVCITYAREA.areaData;
  var prov_str = _province && _province !== 0 ? DATA_PROV[_province - 1].name + '省' || '' : '';
  var city_str = _city & _city !== 0 ? DATA_CITY[_city - 1].name || '' : '';
  var area_str = _area && _area !== 0 ? DATA_AREA[_area - 1].name || '' : '';
  var address = _address || '';
  return prov_str + city_str + area_str + address;
};