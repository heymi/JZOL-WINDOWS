/**
 * Created by Leeiio on 15/6/26.
 */

$.fn.province_city_area = function (_province,_city,_area) {
      function getProvCityAreaData(callback){
        var PROVCITYAREA = window.PROVCITYAREA;
        if(PROVCITYAREA){
          callback(PROVCITYAREA);
        }else{
          $.ajax({
              url: 'http://test.fuhui.com/user/getFiles',
              type: 'POST',
              success : function (ret) {
                var data = JSON.parse(ret).data;
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
          $elem.append($prov_select.clone()).append($city_select.clone()).append($area_select.clone());
          $elem.delegate('select', 'change', function(){
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
}