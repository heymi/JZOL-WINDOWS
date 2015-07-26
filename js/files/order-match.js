function getAuntDetail(id, callback) {
  var paramData = {employee_id: id};

  $.ajax({
    url: CONFIG.API_DOMAIN + '/employee/detail',
    type: 'POST',
    data: paramData,
    success: function (ret) {
      var retObj = JSON.parse(ret);
      return callback(retObj.data.static);
    }
  })
}

$(function () {
  var postData = store('match_aunt');
  $("#dataGrid").bootgrid({
        ajax: true,
        post: postData,
        url: CONFIG.API_DOMAIN + "/employee/list",
        responseHandler: function (res) {
          var retResult = {};
          retResult["rows"] = res.data.list;
          retResult["rowCount"] = res.data.list.length;
          retResult["total"] = res.data.pager.count;
          retResult["current"] = parseInt(res.data.pager.page);
          return retResult;
        },
        formatters: {
          "status": function (column, row) {
            return paramMap.status[row.status]
          },
          "qualification": function (column, row) {
            return paramMap.qualification[row.qualification]
          },
          "service_range": function (column, row) {
            return paramMap.getCodeValue('service_range', row.service_range)
          },
          "operations": function (column, row) {
            return "<!--<button class=\"btn-white-small button-slide-menu\" type=\"button\">查看简历</button>--><button class=\"btn-green-small open-modal\" type=\"button\" data-toggle=\"modal\" data-id=\"" + row.id + "\" data-target=\"#sendingAunt\">派送</button>";
          },
          "update_time": function (column, row) {
            return getLocalTime(row.update_time)
          },
          "native_prov": function (column, row) {
            return $.province_city_area(row.native_prov);
          }
        },
        rowCount: [10, 12, 18],
        labels: {
          infos: "",
          search: "搜索阿姨",
          noResults: '没有记录'
        },
        padding: 100,
        templates: {
          header: "",
          search: ""
        },
        css: {
          search: "shopSearchField search"
        }
      }
  ).on("loaded.rs.jquery.bootgrid", function (e) {
        $('.button-slide-menu').on("click", function () {
          $(".slide-menu").toggleClass("slide-menu-show");
          $(".fog-hover").toggleClass("fog");
          $('.slide-menu iframe').attr('src', 'aunt-resume.html?employeeId=56');
        });
        $(".fog-hover").on("click", function () {
          $(".slide-menu").toggleClass("slide-menu-show");
          $(".fog-hover").toggleClass("fog");
        });
        $('.open-modal').on('click', function (e) {
          e.preventDefault();
          getAuntDetail($(this).attr('data-id'), function (data) {
            $('#employee_id').val(data.id);
            $('#employee_tel').text(data.phone);
            $('#employee_name').text(data.name);
            $('#sendingAunt').modal('show');
          });
          return false;
        });
      });

  $('.datetimepicker').datetimepicker({
    format: 'yyyy/mm/dd',
    autoclose: true,
    minView: 2
  });
  $('#dispath_aunt').on('click', function (e) {
    e.preventDefault();
    var paramObj = {};
    paramObj.id = getQueryString('demandId');
    paramObj.employee_id = $('#employee_id').val();
    paramObj.employee_name = $('#employee_name').text();
    paramObj.employee_tel = $('#employee_tel').text();
    paramObj.employee_money = $('#employee_money').val();
    paramObj.employer_money = $('#employer_money').val();
    paramObj.employee_end_pay_money = $('#employee_end_pay_money').val();
    paramObj.employee_end_pay_types = $('#employee_end_pay_types').val();
    paramObj.trial_time = $('#trial_time').val() ? new Date($('#trial_time').val()).getTime() / 1000 : 0;
    paramObj.trial_day = $('#trial_day').val();
    $.ajax({
      url: CONFIG.API_DOMAIN + "/demands/dispath",
      type: 'POST',
      data: paramObj,
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          $.scojs_message('派送成功', $.scojs_message.TYPE_OK);
          setTimeout(function () {
            parent.document.getElementById("rightContent").setAttribute("src", "order-setup.html?orderId=" + getQueryString('demandId'));
            $('#sendingAunt').modal('hide');
          }, 1e3);
        } else {
          $.scojs_message(errorCode['code_' + retObj.code], $.scojs_message.TYPE_ERROR);
        }
      },
      error: function (ret) {
        $.scojs_message('派送失败', $.scojs_message.TYPE_ERROR)
      }
    });
  });
});