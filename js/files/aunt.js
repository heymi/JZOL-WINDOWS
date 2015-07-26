$(function () {
  $("#dataGrid").bootgrid({
    ajax: true,
    url: CONFIG.API_DOMAIN + "/employee/list",
    responseHandler: function (res) {
      if (res.code === -1) {
        $.scojs_message('登录失效，请退出后请重新登录！', $.scojs_message.TYPE_ERROR);
      }
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
      "sex": function (column, row) {
        return paramMap.sex[row.sex]
      },
      "qualification": function (column, row) {
        return paramMap.qualification[row.qualification]
      },
      "service_range": function (column, row) {
        return paramMap.getCodeValue('service_range', row.service_range)
      },
      "operations": function (column, row) {
        return "<button class=\"btn-green-small\"  onClick=\"location.href='aunt-resume.html?employeeId=" + row.id + "'\">简历</button>";
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
      header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}} shopGridHeader\">" +
      "<div class=\"row\">" +
      "<div class=\"col-sm-12 actionBar shopActionBar\">" +
      "<button type=\"button\" class=\"btn-blue mgl7 fr\" onClick=\"location.href='add-aunt.html'\">新增阿姨</button>" +
      "<p class=\"{{css.search}}\"></p>" +
//                    "<p class=\"{{css.actions}}\"></p>" +
      "</div>" +
      "</div>" +
      "</div>",
      search: ""
    },
    css: {
      search: "shopSearchField search"
//                    actions : "shopActionField"
    }
  });

  //删除阿姨
  $("#confirmDelete").on("click", function () {
    var removdeIdsArr = $("#dataGrid").bootgrid("getSelectedRows");

    var removedIdsStr = '';
    if (!removdeIdsArr || removdeIdsArr.length == 0) {
      return;
    }
    removedIdsStr = removdeIdsArr.join(',');
    $.ajax({
      url: CONFIG.API_DOMAIN + '/employeeShop/del',
      type: 'POST',
      data: {employee_id: removedIdsStr},
      success: function (ret) {
        $('#confirmDeleteModal').modal('hide');
        $("#dataGrid").bootgrid("remove");
      },
      error: function (ret) {
        $('#confirmDeleteModal').modal('hide');
        alert('内部错误')
      }
    })

  });
});