//定义一个全局变量用于存放推荐阿姨的 post 数据
var postAuntData = {};
$(function () {
  function getDemandDetail(callback) {
    var orderId = getQueryString('orderId');
    var paramData = {id: orderId};
    $.ajax({
      url: CONFIG.API_DOMAIN + '/demands/detail',
      type: 'POST',
      data: paramData,
      success: function (ret) {
        var retObj = JSON.parse(ret).data;
        return callback(retObj);
      }
    })
  }

  function getShopDetail(id, callback) {
    var paramData = {id: id};
    $.ajax({
      url: CONFIG.API_DOMAIN + '/Shop/detail',
      type: 'POST',
      data: paramData,
      success: function (ret) {
        var retObj = JSON.parse(ret).data;
        return callback(retObj);
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
        return callback(retObj.data);
      }
    })
  }

  function init(match_aunt) {
    $("#dataGrid").bootgrid({
          ajax: true,
          post: match_aunt,
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
              return "<!--<button class=\"btn-white-small button-slide-menu\" type=\"button\">查看简历</button>--><button class=\"btn-green-small open-modal\" type=\"button\" data-toggle=\"modal\" data-id=\"" + row.id + "\" data-target=\"#sendingAunt\">推荐</button>";
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
          $('.open-modal').on('click', function (e) {
            e.preventDefault();
            getAuntDetail($(this).attr('data-id'), function (auntdata) {
              postAuntData.employee_id = auntdata.static.id;
              postAuntData.employee_shop_status = auntdata.dynamic.status;
              postAuntData.employee_native_prov = auntdata.static.living_prov;
              postAuntData.employee_native_city = auntdata.static.living_city;
              postAuntData.employee_native_area = auntdata.static.living_area;
              postAuntData.employee_native_address = auntdata.static.living_address;
              postAuntData.employee_qualification = auntdata.static.qualification;
              getShopDetail(postAuntData.proposer_id, function (data) {
                $('#proposer_name').text(data.name);
                $('#manager_name').text(data.manager_name);
                $('#manager_phone').text(data.manager_phone);
                $('#suggest_aunt').modal('show');
                $('#employee_name').text(auntdata.static.name);
                $('#employee_service_range').text(getMultiValue('service_range', auntdata.dynamic.service_range, paramMap));
                $('#proposer_addr').text(data.address);
              });
            });
            return false;
          });
        });
  }

  getDemandDetail(function (data) {
    var demands_info = data.demands_info;

    postAuntData.demand_id = demands_info.id;
    postAuntData.proposer_id = getQueryString('proposerId');
    postAuntData.employer_id = demands_info.employer_id;
    postAuntData.employee_service_range = demands_info.type;
    postAuntData.content = demands_info.content || "暂无";
    postAuntData.requirement = demands_info.requirements;
    postAuntData.remark = demands_info.remark || "暂无";

    // 把查询条件存储到 localstorage
    var match_aunt = {};
    match_aunt.service = demands_info.type;
//			match_aunt.qualification = demands_info.employee_education;
    init(match_aunt);
  });

  $("#confirmPromote").on("click", function (e) {
    e.preventDefault();
    postAuntData.bidder_phone = $('#bidder_phone').val();
    postAuntData.bidder_tel = $('#bidder_tel').val();
    console.log(postAuntData)
    $.ajax({
      url: CONFIG.API_DOMAIN + "/DemandsBiddings/add",
      type: 'POST',
      data: postAuntData,
      success: function (ret) {
        var retObj = JSON.parse(ret);
        if (retObj.code == '0') {
          $.scojs_message('推荐成功', $.scojs_message.TYPE_OK);
          $('#suggest_aunt').modal('hide');
          setTimeout(function () {
            parent.document.getElementById("rightContent").setAttribute("src", "list-shared.html");
          }, 1e3);
        } else {
          if (retObj.code == 8062) {
            $.scojs_message('您已推荐过阿姨，不可重复操作', $.scojs_message.TYPE_ERROR);
          } else {
            $.scojs_message(errorCode['code_' + retObj.code], $.scojs_message.TYPE_ERROR);
          }
        }
      },
      error: function (ret) {
        $.scojs_message('推荐失败', $.scojs_message.TYPE_ERROR)
      }
    });
//		parent.document.getElementById("rightContent").setAttribute("src", "list-shared.html")
  })
});