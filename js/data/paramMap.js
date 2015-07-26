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

    marriage: {
      '-1':'离异',
      0:'未婚',
      1:'已婚'
    },

    certificateType : {
        Healthy : '健康证',
        eniorCare : '老人护理',
        domestic : '家政上岗证',
        nurseryTeacher : '育婴师',
        lactagogue : '母婴护理',
        montessori : '催乳',
        education : '早教',
        pediatricMassage : '小儿推拿',
        maternalSweating : '产妇发汗',
        monthOfMeals : '月子餐',
        postpartumSlimming : '产后纤体',
        dietitians : '营养师',
        nurse : '保育员'
    },

    constellation: {
        0: '摩羯',
        1: '水瓶',
        2: '双鱼',
        3: '白羊',
        4:'金牛',
        5:'双子',
        6:'巨蟹',
        7:'狮子',
        8:'处女',
        9:'天秤',
        10:'天蝎',
        11:'射手'
    },

    zodiac_sign: {
        1: '鼠',
        2: '牛',
        3: '虎',
        4: '兔',
        5: '龙',
        6: '蛇',
        7: '马',
        8: '羊',
        9: '猴',
        10: '鸡',
        11: '狗',
        12: '猪'
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