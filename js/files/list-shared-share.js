$(function () {
  $("#dataGrid").bootgrid({
        ajax: true,
        url: function () {
          var searchPhrase = $("#dataGrid").bootgrid("getSearchPhrase");
          if (searchPhrase.length) {
            return CONFIG.API_DOMAIN + "/demands/list";
          } else {
            return CONFIG.API_DOMAIN + "/demands/list";
          }
        },
        post: {
          is_public: 1
        },
        responseHandler: function (res) {
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
            var status = row.bill_status || row.status;
            switch (status) {
              case 0:
                if (parseInt(row.bidding, 10)) {
                  return "<button type=\"button\" class=\"btn-yellow-small\" onClick=\"location.href='order-shared-select.html?orderId=" + row.id + "'\">" + row.bidding + "名阿姨等待选择</button>";
                } else {
                  return "等待匹配";
                }
              case 1:
                return "<button type=\"button\" class=\"btn-blue-small\" onClick=\"location.href='order-setup.html?orderId=" + row.id + "'\">查看详情</button>";
              case 5:
                return "<button type=\"button\" class=\"btn-grey-small\" onClick=\"location.href='order-canceled.html?orderId=" + row.id + "'\">查看详情</button>";
              case 6:
                return "<button type=\"button\" class=\"btn-grey-small\" onClick=\"location.href='order-finish.html?orderId=" + row.id + "'\">查看详情</button>";
              default :
                return "<button type=\"button\" class=\"btn-green-small\" onClick=\"location.href='order-service.html?orderId=" + row.id + "'\">查看详情</button>";
            }
          },
          "employee_name": function (column, row) {
            if (row.employee_name) {
              return row.employee_name
            } else {
              return "未指派"
            }
          },
          "employee_phone": function (column, row) {
            if (row.employee_phone) {
              return row.employee_phone
            } else {
              return "无"
            }
          },
          "create_at": function (column, row) {
            return new Date(row.create_at * 1000).format('yyyy-mm-dd HH:MM');
          },
          "type": function (column, row) {
            return list_paramMap.type[row.type]
          },
          "status": function (column, row) {
            var status = row.bill_status || row.status;
            switch (status) {
              case 0:
                return '<span class="fontyellow">' + list_paramMap.status[status] + '</span>';
              case 1:
                return '<span class="fontblue">' + list_paramMap.status[status] + '</span>';
              case 2:
                return '<span class="fontgreen">' + list_paramMap.status[status] + '</span>';
              case 3:
                return '<span class="fontgreen">' + list_paramMap.status[status] + '</span>';
              default :
                return list_paramMap.status[status];
            }
          },
          "source": function (column, row) {
            return list_paramMap.source[row.source]
          }
        },
        rowCount: [10, 12, 18],
        labels: {
          infos: "",
          search: "搜索订单",
          noResults: '没有记录'
        },
        padding: 100,
        templates: {
          header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}} shopGridHeader\">" +
          "<div class=\"row\">" +
          "<div class=\"col-sm-12 actionBar shopActionBar\">" +
          "<button type=\"button\" class=\"btn-blue mgl7 fr\" onClick=\"location.href='add-list.html'\">新增订单</button>" +
          "<p class=\"{{css.search}}\"></p>" +
//                    "<p class=\"{{css.actions}}\"></p>" +
          "</div>" +
          "</div>" +
          "</div>",
          search: ""
        },
        css: {
          search: "shopSearchField search"
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