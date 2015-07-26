var auntData = {};
function getBiddingDetail(id, callback) {
  $.ajax({
    url: CONFIG.API_DOMAIN + '/DemandsBiddings/detail',
    type: 'POST',
    data: {
      id: id
    },
    success: function (ret) {
      var retObj = JSON.parse(ret);
      return callback(retObj.data);
    }
  })
}
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
  function init() {
    var demand_id = getQueryString('orderId');
    $("#dataGrid").bootgrid({
          ajax: true,
          post: {
            demand_id: demand_id
          },
          url: CONFIG.API_DOMAIN + "/DemandsBiddings/list",
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
            "employee_qualification": function (column, row) {
              return paramMap.qualification[row.employee_qualification]
            },
            "employee_service_range": function (column, row) {
              return paramMap.getCodeValue('service_range', row.employee_service_range)
            },
            "operations": function (column, row) {
              if (row.status === 1) {
                return "审核不通过"
              } else if (row.status === 2) {
                return "已录用"
              } else {
                return "<button class=\"btn-grey-danger\" id='no_suit' data-id=\"" + row.id + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"点击会删除此阿姨的信息，并且对方公司可再次推荐其他阿姨\">不合适</button><!--<button class=\"btn-white-small button-slide-menu\" type=\"button\">查看简历</button>--><button class=\"btn-green-small open-modal\" type=\"button\" data-toggle=\"modal\" data-id=\"" + row.id + "\" data-target=\"#contactAunt\">联系</button>";
              }
            },
            "update_time": function (column, row) {
              return getLocalTime(row.update_time)
            },
            "remark": function (column, row) {
              return "<span title='" + row.remark + "'>" + row.remark + "</span>";
            },
            "employee_native_prov": function (column, row) {
              return $.province_city_area(row.employee_native_prov);
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
          $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
          });
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
            getBiddingDetail($(this).attr('data-id'), function (data) {
              auntData.id = data.employee_id;
              auntData.name = data.employee_name;

              $('#contact_employee_name').text(data.employee_name);
              $('#contact_proposer_name').text(data.proposer_name);
              $('#contact_employee_native_address').text(data.employee_native_address);
              $('#contact_bidder_name').text(data.bidder_name);
              $('#contact_bidder_phone').text(data.bidder_phone);
              $('#contact_content').text(data.content);
              $('#go_to_work').attr('data-id', data.id);
              $('#go_to_work').attr('data-eid', data.employee_id);
              $('#contactAunt').modal('show');
            });
            return false;
          });
          $('#no_suit').on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('data-id');
            $.ajax({
              url: CONFIG.API_DOMAIN + "/DemandsBiddings/nosuit",
              type: 'POST',
              data: {
                id: id
              },
              success: function (ret) {
                var retObj = JSON.parse(ret);
                if (retObj.code == '0') {
                  $.scojs_message('操作成功', $.scojs_message.TYPE_OK);
                  setTimeout(function () {
                    window.location.reload();
                  }, 1e3);
                } else {
                  $.scojs_message(errorCode['code_' + retObj.code], $.scojs_message.TYPE_ERROR);
                }
              },
              error: function (ret) {
                $.scojs_message('操作失败', $.scojs_message.TYPE_ERROR)
              }
            });
            return false;
          });
        });
  }

  init();

  $('#go_to_work').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('data-id');
    var eid = $(this).attr('data-eid');
    $.ajax({
      url: CONFIG.API_DOMAIN + "/DemandsBiddings/suit",
      type: 'POST',
      data: {
        id: id
      },
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          $.scojs_message('操作成功', $.scojs_message.TYPE_OK);
          $('#contactAunt').modal('hide');
          $('#employee_id').val(auntData.id);
          $('#employee_name').text(auntData.name);
          $('#sendingAunt').modal('show');
        } else {
          $.scojs_message(errorCode['code_' + retObj.code], $.scojs_message.TYPE_ERROR);
        }
      },
      error: function (ret) {
        $.scojs_message('操作失败', $.scojs_message.TYPE_ERROR);
      }
    });
  });
  $('#dispath_aunt').on('click', function (e) {
    e.preventDefault();
    var paramObj = {};
    paramObj.id = getQueryString('orderId');
    paramObj.employee_id = $('#employee_id').val();
    paramObj.employee_name = $('#employee_name').text();
    paramObj.employee_tel = $('#employee_tel').val();
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
            parent.document.getElementById("rightContent").setAttribute("src", "order-setup.html?orderId=" + getQueryString('orderId'));
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

  $('.datetimepicker').datetimepicker({
    format: 'yyyy/mm/dd',
    autoclose: true,
    minView: 2
  });
});