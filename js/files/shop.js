var shop_paramMap = {
  type: {
    1: '连锁',
    2: '加盟'
  },
  status: {
    0: '审核中',
    1: '审核未通过',
    2: '审核通过',
    3: '申请删除中'
  }
};

$(function () {
  //门店列表显示
  $("#dataGrid").bootgrid({
        ajax: true,
        sorting: false,
        url: function () {
          var searchPhrase = $("#dataGrid").bootgrid("getSearchPhrase");
          if (searchPhrase.length) {
            return CONFIG.API_DOMAIN + "/Shop/list";
          } else {
            return CONFIG.API_DOMAIN + "/Shop/list";
          }
        },
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
          "link": function (column, row) {
            return "<a href=\"#\">" + column.id + ": " + row.id + "</a>";
          },
          "type": function (column, row) {
            return shop_paramMap.type[row.status]
          },
          "status": function (column, row) {
            return shop_paramMap.status[row.status]
          },
          "business": function (column, row) {
            return paramMap.service_range[row.status]
          }
        },
        rowCount: [10, 12, 18],
        labels: {
          infos: "",
          search: "搜索门店",
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
  );

  //门店删除
  $("#confirmDelete").on("click", function () {
    var removdeIdsArr = $("#dataGrid").bootgrid("getSelectedRows");

    var removedIdsStr = '';
    if (!removdeIdsArr || removdeIdsArr.length == 0) {
      return;
    }
    removedIdsStr = removdeIdsArr.join(',');
    $.ajax({
      url: CONFIG.API_DOMAIN + '/Shop/del',
      type: 'POST',
      data: {id: removedIdsStr},
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

  // Select first tab
  $('#myTab li:first').tab('show');
});