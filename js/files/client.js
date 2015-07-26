$(function () {
  $("#dataGrid").bootgrid({
        ajax: true,
        ajaxSettings: {
          method: "GET",
          cache: false
        },
        url: function () {
          var searchPhrase = $("#dataGrid").bootgrid("getSearchPhrase");
          if (searchPhrase.length) {
            return CONFIG.API_DOMAIN + "/employer/list";
          } else {
            return CONFIG.API_DOMAIN + "/employer/list";
          }
        },
        responseHandler: function (res) {
          if (res.code === -1) {
            $.scojs_message('登录失效，请退出后请重新登录！', $.scojs_message.TYPE_ERROR);
          }
          var retResult = {
            "current": 1,
            "rows": []
          }
          retResult["rows"] = res.data.list;
          retResult["rowCount"] = res.data.list.length;
          retResult["total"] = res.data.pager.count;
          retResult["current"] = res.data.pager.page;
          return retResult;
        },
        formatters: {
          "operations": function (column, row) {
//                                        return "<a href=\"client-info.html?clientId="+ row.id + "\">" +  + "</a>";
            return "<button type=\"button\" class=\"btn-green-small\" onClick=\"location.href='client-info.html?employerId=" + row.eid + "'\">查看资料</button>";
          },
          "source": function (column, row) {
            return client_paramMap.source[row.source]
          },
          "content": function (column, row) {
            return "<span title='" + row.content + "'>" + row.content + "</span>";
          }
        },
        rowCount: [10, 12, 18],
        labels: {
          infos: "",
          search: "搜索雇主",
          noResults: '没有记录'
        },
        padding: 100,
        templates: {
          header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}} shopGridHeader\">" +
          "<div class=\"row\">" +
          "<div class=\"col-sm-12 actionBar shopActionBar\">" +
          "<button type=\"button\" class=\"btn-blue mgl7 fr\" onClick=\"location.href='add-client.html'\">新增雇主</button>" +
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
      }
  ).on("selected.rs.jquery.bootgrid", function (e) {
      });

  $("#confirmDelete").on("click", function () {
    var removdeIdsArr = $("#dataGrid").bootgrid("getSelectedRows");
    var removedIdsStr = '';
    if (!removdeIdsArr || removdeIdsArr.length == 0) {
      $('#confirmDeleteModal').modal('hide');
      return;
    }
    removedIdsStr = removdeIdsArr.join(',');
    $.ajax({
      url: CONFIG.API_DOMAIN + '/employer/del?isdel=1&eid=' + removedIdsStr,
      type: 'GET',
      data: {},
      success: function (ret) {
        $('#confirmDeleteModal').modal('hide');
        $("#dataGrid").bootgrid("remove");
      },
      error: function (ret) {
        alert('内部错误')
      }
    })
  });
});