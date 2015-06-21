/**
 * Created by samsung on 2015/6/12.
 */
function callServer(remark, data) {
    $.ajax({
        url: domainId + remark,
        method: 'POST',
        data: data,
        success: function (returnRec, statusStr) {
            console.log('success')
        },
        error: function (returnRec, statusStr) {
            console.log('error')
        }
    })
}