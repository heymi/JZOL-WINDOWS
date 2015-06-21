/**
 * Created by samsung on 2015/6/5.
 */
function pageScroll(pageUrl) {
    var localPage = pageUrl;
    parent.window.scrollBy(0, -100);
    scrolldelay = setTimeout('pageScroll()', 100);
    var sTop = parent.document.documentElement.scrollTop + parent.document.body.scrollTop;
    if (sTop == 0) {
        clearTimeout(scrolldelay);
        parent.document.getElementById("rightContent").setAttribute("src", pageUrl)
    }
    ;
}

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function parseJSON(str) {
    return JSON.parse(str);
}

function getMultiSelectValue(eleId) {
    var retValues = '';
    $("#" + eleId + " input:checked").each(function (index, element) {
        retValues += element.value + ','
    })
    return retValues.substring(0, retValues.length - 1)
}

function getLocalTime(nS) {
    if (!nS) {
        return '';
    }
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
}

function setMultiSelectValue(eleId, values) {
    if (!values || typeof values !== 'string') {
        return;
    }
    var valArr = values.split(',');
    _.each(valArr, function (rec) {
        $("#" + eleId + " input[value=" + rec + "]").prop('checked', true);
    })
}