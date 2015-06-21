/**
 * Created by samsung on 2015/6/17.
 */


var paramMap = {
    status: {
        0: '待岗',
        1: '在职',
        2: '可兼职',
        4: '外派中'
    },
    sex: {
        0: "女",
        1: "男"
    },
    qualification: {
        1: '小学',
        2: '初中',
        3: '高中',
        4: '大专',
        5: '本科',
        6: '其它'
    },

    service_range: {
        1: '临时钟点工',
        2: '长期钟点工',
        3: '保姆',
        4: '育儿嫂',
        5: '疾病护理',
        6: '老人护理',
        7: '月嫂',
        8: '早教',
        9: '催乳师'
    },


    getCodeValue: function (paramType, codes) {
        var returnValue = '';
        if (typeof codes !== 'string') {
            return returnValue;
        }
        var codeArr = codes.split(',');
        for (var i in codeArr) {
            var rec = codes[i];
            if (this[paramType][rec]) {
                returnValue += returnValue + this[paramType][rec] + ',';
            }
        }
        return returnValue.substring(0, returnValue.length - 1);
    }
}