/**
 * Created by Leeiio on 15/6/21.
 */

var errorCode = {
  "code_0": "成功：哈哈",
  "code_1001": "操作阿姨时：失败",
  "code_1002": "操作阿姨时：数据不能为空",
  "code_1003": "操作阿姨时：保存失败",
  "code_1004": "操作阿姨时：抛出异常保存失败",
  "code_1005": "操作阿姨时：暂无数据",
  "code_1006": "操作阿姨时：没有可以删除的数据",
  "code_1007": "操作阿姨时：没有可以更新的数据",
  "code_1008": "操作阿姨时：不存在该条数据或已被删除",
  "code_1009": "操作阿姨时：手机号格式不正确",
  "code_1010": "操作阿姨时：电话号格式不正确",
  "code_1011": "操作阿姨时：邮箱格式不正确",
  "code_1012": "操作阿姨时：身份证格式不正确",
  "code_1013": "操作阿姨时：QQ格式不正确",
  "code_1014": "操作阿姨时：无效参数",
  "code_1015": "操作阿姨时：有特定参数不能为空",
  "code_1016": "操作阿姨时：异常操作",
  "code_1017": "操作阿姨时：参数格式输入有误",
  "code_1018": "操作阿姨时：密码不能为空",
  "code_1019": "操作阿姨时：确认密码不能为空",
  "code_1020": "操作阿姨时：密码与确认密码不匹配",
  "code_1021": "操作阿姨时：用户名已存在",
  "code_1022": "操作阿姨时：手机已被使用",
  "code_1023": "操作阿姨时：门店员工级别不能为空",
  "code_1024": "操作阿姨时：门店不存在",
  "code_1025": "操作阿姨时：用户名不能为空",
  "code_1026": "操作阿姨时：用户名格式不正确",
  "code_1027": "操作阿姨时：用户真实姓名不能为空",
  "code_1028": "操作阿姨时：手机号码不能为空",
  "code_1029": "操作阿姨时：门店员工信息不存在",
  "code_1030": "操作阿姨时：用户不存在",
  "code_1031": "操作阿姨时：数据已被删除",
  "code_1032": "操作阿姨时：门店员工类型对应的权限不存在",
  "code_1033": "操作阿姨时：门店员工类型不存在",
  "code_1034": "操作阿姨时：用户已经拥有门店",
  "code_1035": "操作阿姨时：用户未登录",
  "code_1036": "操作阿姨时：不是门店员工",
  "code_1037": "操作阿姨时：帐号被冻结",
  "code_1038": "操作阿姨时：帐号或密码错误",
  "code_1039": "操作阿姨时：帐号不能为空",
  "code_1040": "操作阿姨时：请先登陆",
  "code_1041": "操作阿姨时：新密码不能为空",
  "code_1042": "操作阿姨时：请输入冻结天数",
  "code_1043": "操作阿姨时：请输入id",
  "code_1044": "操作阿姨时：state参数不正确",
  "code_1045": "操作阿姨时：state参数不能为空",
  "code_1046": "操作阿姨时：您只可以操作管理员和业务员类型用户权限",
  "code_1047": "操作阿姨时：您只可以操作业务员类型用户权限",
  "code_1048": "操作阿姨时：没有操作权限",
  "code_1049": "操作阿姨时：您没有对该用户重置密码权限",
  "code_1050": "操作阿姨时：您不能对自己的账号重置密码",
  "code_1051": "操作阿姨时：登陆的身份不正确",
  "code_1052": "操作阿姨时：不能删除自己的信息",
  "code_1053": "操作阿姨时：文件太大",
  "code_1054": "操作阿姨时：文件不存在",
  "code_1055": "操作阿姨时：不能上传此类型文件",
  "code_1056": "操作阿姨时：同名文件已经存在了",
  "code_1057": "操作阿姨时：移动文件出错",
  "code_1058": "操作阿姨时：已经提交删除申请",
  "code_1059": "操作阿姨时：不处在审核中",
  "code_1060": "操作阿姨时：类型不匹配",
  "code_2001": "操作雇主时：失败",
  "code_2002": "操作雇主时：数据不能为空",
  "code_2003": "操作雇主时：保存失败",
  "code_2004": "操作雇主时：抛出异常保存失败",
  "code_2005": "操作雇主时：暂无数据",
  "code_2006": "操作雇主时：没有可以删除的数据",
  "code_2007": "操作雇主时：没有可以更新的数据",
  "code_2008": "操作雇主时：不存在该条数据或已被删除",
  "code_2009": "操作雇主时：手机号格式不正确",
  "code_2010": "操作雇主时：电话号格式不正确",
  "code_2011": "操作雇主时：邮箱格式不正确",
  "code_2012": "操作雇主时：身份证格式不正确",
  "code_2013": "操作雇主时：QQ格式不正确",
  "code_2014": "操作雇主时：无效参数",
  "code_2015": "操作雇主时：有特定参数不能为空",
  "code_2016": "操作雇主时：异常操作",
  "code_2017": "操作雇主时：参数格式输入有误",
  "code_2018": "操作雇主时：密码不能为空",
  "code_2019": "操作雇主时：确认密码不能为空",
  "code_2020": "操作雇主时：密码与确认密码不匹配",
  "code_2021": "操作雇主时：用户名已存在",
  "code_2022": "操作雇主时：手机已被使用",
  "code_2023": "操作雇主时：门店员工级别不能为空",
  "code_2024": "操作雇主时：门店不存在",
  "code_2025": "操作雇主时：用户名不能为空",
  "code_2026": "操作雇主时：用户名格式不正确",
  "code_2027": "操作雇主时：用户真实姓名不能为空",
  "code_2028": "操作雇主时：手机号码不能为空",
  "code_2029": "操作雇主时：门店员工信息不存在",
  "code_2030": "操作雇主时：用户不存在",
  "code_2031": "操作雇主时：数据已被删除",
  "code_2032": "操作雇主时：门店员工类型对应的权限不存在",
  "code_2033": "操作雇主时：门店员工类型不存在",
  "code_2034": "操作雇主时：用户已经拥有门店",
  "code_2035": "操作雇主时：用户未登录",
  "code_2036": "操作雇主时：不是门店员工",
  "code_2037": "操作雇主时：帐号被冻结",
  "code_2038": "操作雇主时：帐号或密码错误",
  "code_2039": "操作雇主时：帐号不能为空",
  "code_2040": "操作雇主时：请先登陆",
  "code_2041": "操作雇主时：新密码不能为空",
  "code_2042": "操作雇主时：请输入冻结天数",
  "code_2043": "操作雇主时：请输入id",
  "code_2044": "操作雇主时：state参数不正确",
  "code_2045": "操作雇主时：state参数不能为空",
  "code_2046": "操作雇主时：您只可以操作管理员和业务员类型用户权限",
  "code_2047": "操作雇主时：您只可以操作业务员类型用户权限",
  "code_2048": "操作雇主时：没有操作权限",
  "code_2049": "操作雇主时：您没有对该用户重置密码权限",
  "code_2050": "操作雇主时：您不能对自己的账号重置密码",
  "code_2051": "操作雇主时：登陆的身份不正确",
  "code_2052": "操作雇主时：不能删除自己的信息",
  "code_2053": "操作雇主时：文件太大",
  "code_2054": "操作雇主时：文件不存在",
  "code_2055": "操作雇主时：不能上传此类型文件",
  "code_2056": "操作雇主时：同名文件已经存在了",
  "code_2057": "操作雇主时：移动文件出错",
  "code_2058": "操作雇主时：已经提交删除申请",
  "code_2059": "操作雇主时：不处在审核中",
  "code_2060": "操作雇主时：类型不匹配",
  "code_3001": "操作订单时：失败",
  "code_3002": "操作订单时：数据不能为空",
  "code_3003": "操作订单时：保存失败",
  "code_3004": "操作订单时：抛出异常保存失败",
  "code_3005": "操作订单时：暂无数据",
  "code_3006": "操作订单时：没有可以删除的数据",
  "code_3007": "操作订单时：没有可以更新的数据",
  "code_3008": "操作订单时：不存在该条数据或已被删除",
  "code_3009": "操作订单时：手机号格式不正确",
  "code_3010": "操作订单时：电话号格式不正确",
  "code_3011": "操作订单时：邮箱格式不正确",
  "code_3012": "操作订单时：身份证格式不正确",
  "code_3013": "操作订单时：QQ格式不正确",
  "code_3014": "操作订单时：无效参数",
  "code_3015": "操作订单时：有特定参数不能为空",
  "code_3016": "操作订单时：异常操作",
  "code_3017": "操作订单时：参数格式输入有误",
  "code_3018": "操作订单时：密码不能为空",
  "code_3019": "操作订单时：确认密码不能为空",
  "code_3020": "操作订单时：密码与确认密码不匹配",
  "code_3021": "操作订单时：用户名已存在",
  "code_3022": "操作订单时：手机已被使用",
  "code_3023": "操作订单时：门店员工级别不能为空",
  "code_3024": "操作订单时：门店不存在",
  "code_3025": "操作订单时：用户名不能为空",
  "code_3026": "操作订单时：用户名格式不正确",
  "code_3027": "操作订单时：用户真实姓名不能为空",
  "code_3028": "操作订单时：手机号码不能为空",
  "code_3029": "操作订单时：门店员工信息不存在",
  "code_3030": "操作订单时：用户不存在",
  "code_3031": "操作订单时：数据已被删除",
  "code_3032": "操作订单时：门店员工类型对应的权限不存在",
  "code_3033": "操作订单时：门店员工类型不存在",
  "code_3034": "操作订单时：用户已经拥有门店",
  "code_3035": "操作订单时：用户未登录",
  "code_3036": "操作订单时：不是门店员工",
  "code_3037": "操作订单时：帐号被冻结",
  "code_3038": "操作订单时：帐号或密码错误",
  "code_3039": "操作订单时：帐号不能为空",
  "code_3040": "操作订单时：请先登陆",
  "code_3041": "操作订单时：新密码不能为空",
  "code_3042": "操作订单时：请输入冻结天数",
  "code_3043": "操作订单时：请输入id",
  "code_3044": "操作订单时：state参数不正确",
  "code_3045": "操作订单时：state参数不能为空",
  "code_3046": "操作订单时：您只可以操作管理员和业务员类型用户权限",
  "code_3047": "操作订单时：您只可以操作业务员类型用户权限",
  "code_3048": "操作订单时：没有操作权限",
  "code_3049": "操作订单时：您没有对该用户重置密码权限",
  "code_3050": "操作订单时：您不能对自己的账号重置密码",
  "code_3051": "操作订单时：登陆的身份不正确",
  "code_3052": "操作订单时：不能删除自己的信息",
  "code_3053": "操作订单时：文件太大",
  "code_3054": "操作订单时：文件不存在",
  "code_3055": "操作订单时：不能上传此类型文件",
  "code_3056": "操作订单时：同名文件已经存在了",
  "code_3057": "操作订单时：移动文件出错",
  "code_3058": "操作订单时：已经提交删除申请",
  "code_3059": "操作订单时：不处在审核中",
  "code_3060": "操作订单时：类型不匹配",
  "code_4001": "操作内部系统时：失败",
  "code_4002": "操作内部系统时：数据不能为空",
  "code_4003": "操作内部系统时：保存失败",
  "code_4004": "操作内部系统时：抛出异常保存失败",
  "code_4005": "操作内部系统时：暂无数据",
  "code_4006": "操作内部系统时：没有可以删除的数据",
  "code_4007": "操作内部系统时：没有可以更新的数据",
  "code_4008": "操作内部系统时：不存在该条数据或已被删除",
  "code_4009": "操作内部系统时：手机号格式不正确",
  "code_4010": "操作内部系统时：电话号格式不正确",
  "code_4011": "操作内部系统时：邮箱格式不正确",
  "code_4012": "操作内部系统时：身份证格式不正确",
  "code_4013": "操作内部系统时：QQ格式不正确",
  "code_4014": "操作内部系统时：无效参数",
  "code_4015": "操作内部系统时：有特定参数不能为空",
  "code_4016": "操作内部系统时：异常操作",
  "code_4017": "操作内部系统时：参数格式输入有误",
  "code_4018": "操作内部系统时：密码不能为空",
  "code_4019": "操作内部系统时：确认密码不能为空",
  "code_4020": "操作内部系统时：密码与确认密码不匹配",
  "code_4021": "操作内部系统时：用户名已存在",
  "code_4022": "操作内部系统时：手机已被使用",
  "code_4023": "操作内部系统时：门店员工级别不能为空",
  "code_4024": "操作内部系统时：门店不存在",
  "code_4025": "操作内部系统时：用户名不能为空",
  "code_4026": "操作内部系统时：用户名格式不正确",
  "code_4027": "操作内部系统时：用户真实姓名不能为空",
  "code_4028": "操作内部系统时：手机号码不能为空",
  "code_4029": "操作内部系统时：门店员工信息不存在",
  "code_4030": "操作内部系统时：用户不存在",
  "code_4031": "操作内部系统时：数据已被删除",
  "code_4032": "操作内部系统时：门店员工类型对应的权限不存在",
  "code_4033": "操作内部系统时：门店员工类型不存在",
  "code_4034": "操作内部系统时：用户已经拥有门店",
  "code_4035": "操作内部系统时：用户未登录",
  "code_4036": "操作内部系统时：不是门店员工",
  "code_4037": "操作内部系统时：帐号被冻结",
  "code_4038": "操作内部系统时：帐号或密码错误",
  "code_4039": "操作内部系统时：帐号不能为空",
  "code_4040": "操作内部系统时：请先登陆",
  "code_4041": "操作内部系统时：新密码不能为空",
  "code_4042": "操作内部系统时：请输入冻结天数",
  "code_4043": "操作内部系统时：请输入id",
  "code_4044": "操作内部系统时：state参数不正确",
  "code_4045": "操作内部系统时：state参数不能为空",
  "code_4046": "操作内部系统时：您只可以操作管理员和业务员类型用户权限",
  "code_4047": "操作内部系统时：您只可以操作业务员类型用户权限",
  "code_4048": "操作内部系统时：没有操作权限",
  "code_4049": "操作内部系统时：您没有对该用户重置密码权限",
  "code_4050": "操作内部系统时：您不能对自己的账号重置密码",
  "code_4051": "操作内部系统时：登陆的身份不正确",
  "code_4052": "操作内部系统时：不能删除自己的信息",
  "code_4053": "操作内部系统时：文件太大",
  "code_4054": "操作内部系统时：文件不存在",
  "code_4055": "操作内部系统时：不能上传此类型文件",
  "code_4056": "操作内部系统时：同名文件已经存在了",
  "code_4057": "操作内部系统时：移动文件出错",
  "code_4058": "操作内部系统时：已经提交删除申请",
  "code_4059": "操作内部系统时：不处在审核中",
  "code_4060": "操作内部系统时：类型不匹配",
  "code_5001": "操作门店时：失败",
  "code_5002": "操作门店时：数据不能为空",
  "code_5003": "操作门店时：保存失败",
  "code_5004": "操作门店时：抛出异常保存失败",
  "code_5005": "操作门店时：暂无数据",
  "code_5006": "操作门店时：没有可以删除的数据",
  "code_5007": "操作门店时：没有可以更新的数据",
  "code_5008": "操作门店时：不存在该条数据或已被删除",
  "code_5009": "操作门店时：手机号格式不正确",
  "code_5010": "操作门店时：电话号格式不正确",
  "code_5011": "操作门店时：邮箱格式不正确",
  "code_5012": "操作门店时：身份证格式不正确",
  "code_5013": "操作门店时：QQ格式不正确",
  "code_5014": "操作门店时：无效参数",
  "code_5015": "操作门店时：有特定参数不能为空",
  "code_5016": "操作门店时：异常操作",
  "code_5017": "操作门店时：参数格式输入有误",
  "code_5018": "操作门店时：密码不能为空",
  "code_5019": "操作门店时：确认密码不能为空",
  "code_5020": "操作门店时：密码与确认密码不匹配",
  "code_5021": "操作门店时：用户名已存在",
  "code_5022": "操作门店时：手机已被使用",
  "code_5023": "操作门店时：门店员工级别不能为空",
  "code_5024": "操作门店时：门店不存在",
  "code_5025": "操作门店时：用户名不能为空",
  "code_5026": "操作门店时：用户名格式不正确",
  "code_5027": "操作门店时：用户真实姓名不能为空",
  "code_5028": "操作门店时：手机号码不能为空",
  "code_5029": "操作门店时：门店员工信息不存在",
  "code_5030": "操作门店时：用户不存在",
  "code_5031": "操作门店时：数据已被删除",
  "code_5032": "操作门店时：门店员工类型对应的权限不存在",
  "code_5033": "操作门店时：门店员工类型不存在",
  "code_5034": "操作门店时：用户已经拥有门店",
  "code_5035": "操作门店时：用户未登录",
  "code_5036": "操作门店时：不是门店员工",
  "code_5037": "操作门店时：帐号被冻结",
  "code_5038": "操作门店时：帐号或密码错误",
  "code_5039": "操作门店时：帐号不能为空",
  "code_5040": "操作门店时：请先登陆",
  "code_5041": "操作门店时：新密码不能为空",
  "code_5042": "操作门店时：请输入冻结天数",
  "code_5043": "操作门店时：请输入id",
  "code_5044": "操作门店时：state参数不正确",
  "code_5045": "操作门店时：state参数不能为空",
  "code_5046": "操作门店时：您只可以操作管理员和业务员类型用户权限",
  "code_5047": "操作门店时：您只可以操作业务员类型用户权限",
  "code_5048": "操作门店时：没有操作权限",
  "code_5049": "操作门店时：您没有对该用户重置密码权限",
  "code_5050": "操作门店时：您不能对自己的账号重置密码",
  "code_5051": "操作门店时：登陆的身份不正确",
  "code_5052": "操作门店时：不能删除自己的信息",
  "code_5053": "操作门店时：文件太大",
  "code_5054": "操作门店时：文件不存在",
  "code_5055": "操作门店时：不能上传此类型文件",
  "code_5056": "操作门店时：同名文件已经存在了",
  "code_5057": "操作门店时：移动文件出错",
  "code_5058": "操作门店时：已经提交删除申请",
  "code_5059": "操作门店时：不处在审核中",
  "code_5060": "操作门店时：类型不匹配",
  "code_5001": "操作门店时：失败",
  "code_5002": "操作门店时：数据不能为空",
  "code_5003": "操作门店时：保存失败",
  "code_5004": "操作门店时：抛出异常保存失败",
  "code_5005": "操作门店时：暂无数据",
  "code_5006": "操作门店时：没有可以删除的数据",
  "code_5007": "操作门店时：没有可以更新的数据",
  "code_5008": "操作门店时：不存在该条数据或已被删除",
  "code_5009": "操作门店时：手机号格式不正确",
  "code_5010": "操作门店时：电话号格式不正确",
  "code_5011": "操作门店时：邮箱格式不正确",
  "code_5012": "操作门店时：身份证格式不正确",
  "code_5013": "操作门店时：QQ格式不正确",
  "code_5014": "操作门店时：无效参数",
  "code_5015": "操作门店时：有特定参数不能为空",
  "code_5016": "操作门店时：异常操作",
  "code_5017": "操作门店时：参数格式输入有误",
  "code_5018": "操作门店时：密码不能为空",
  "code_5019": "操作门店时：确认密码不能为空",
  "code_5020": "操作门店时：密码与确认密码不匹配",
  "code_5021": "操作门店时：用户名已存在",
  "code_5022": "操作门店时：手机已被使用",
  "code_5023": "操作门店时：门店员工级别不能为空",
  "code_5024": "操作门店时：门店不存在",
  "code_5025": "操作门店时：用户名不能为空",
  "code_5026": "操作门店时：用户名格式不正确",
  "code_5027": "操作门店时：用户真实姓名不能为空",
  "code_5028": "操作门店时：手机号码不能为空",
  "code_5029": "操作门店时：门店员工信息不存在",
  "code_5030": "操作门店时：用户不存在",
  "code_5031": "操作门店时：数据已被删除",
  "code_5032": "操作门店时：门店员工类型对应的权限不存在",
  "code_5033": "操作门店时：门店员工类型不存在",
  "code_5034": "操作门店时：用户已经拥有门店",
  "code_5035": "操作门店时：用户未登录",
  "code_5036": "操作门店时：不是门店员工",
  "code_5037": "操作门店时：帐号被冻结",
  "code_5038": "操作门店时：帐号或密码错误",
  "code_5039": "操作门店时：帐号不能为空",
  "code_5040": "操作门店时：请先登陆",
  "code_5041": "操作门店时：新密码不能为空",
  "code_5042": "操作门店时：请输入冻结天数",
  "code_5043": "操作门店时：请输入id",
  "code_5044": "操作门店时：state参数不正确",
  "code_5045": "操作门店时：state参数不能为空",
  "code_5046": "操作门店时：您只可以操作管理员和业务员类型用户权限",
  "code_5047": "操作门店时：您只可以操作业务员类型用户权限",
  "code_5048": "操作门店时：没有操作权限",
  "code_5049": "操作门店时：您没有对该用户重置密码权限",
  "code_5050": "操作门店时：您不能对自己的账号重置密码",
  "code_5051": "操作门店时：登陆的身份不正确",
  "code_5052": "操作门店时：不能删除自己的信息",
  "code_5053": "操作门店时：文件太大",
  "code_5054": "操作门店时：文件不存在",
  "code_5055": "操作门店时：不能上传此类型文件",
  "code_5056": "操作门店时：同名文件已经存在了",
  "code_5057": "操作门店时：移动文件出错",
  "code_5058": "操作门店时：已经提交删除申请",
  "code_5059": "操作门店时：不处在审核中",
  "code_5060": "操作门店时：类型不匹配",
  "code_6001": "操作帐号时：失败",
  "code_6002": "操作帐号时：数据不能为空",
  "code_6003": "操作帐号时：保存失败",
  "code_6004": "操作帐号时：抛出异常保存失败",
  "code_6005": "操作帐号时：暂无数据",
  "code_6006": "操作帐号时：没有可以删除的数据",
  "code_6007": "操作帐号时：没有可以更新的数据",
  "code_6008": "操作帐号时：不存在该条数据或已被删除",
  "code_6009": "操作帐号时：手机号格式不正确",
  "code_6010": "操作帐号时：电话号格式不正确",
  "code_6011": "操作帐号时：邮箱格式不正确",
  "code_6012": "操作帐号时：身份证格式不正确",
  "code_6013": "操作帐号时：QQ格式不正确",
  "code_6014": "操作帐号时：无效参数",
  "code_6015": "操作帐号时：有特定参数不能为空",
  "code_6016": "操作帐号时：异常操作",
  "code_6017": "操作帐号时：参数格式输入有误",
  "code_6018": "操作帐号时：密码不能为空",
  "code_6019": "操作帐号时：确认密码不能为空",
  "code_6020": "操作帐号时：密码与确认密码不匹配",
  "code_6021": "操作帐号时：用户名已存在",
  "code_6022": "操作帐号时：手机已被使用",
  "code_6023": "操作帐号时：门店员工级别不能为空",
  "code_6024": "操作帐号时：门店不存在",
  "code_6025": "操作帐号时：用户名不能为空",
  "code_6026": "操作帐号时：用户名格式不正确",
  "code_6027": "操作帐号时：用户真实姓名不能为空",
  "code_6028": "操作帐号时：手机号码不能为空",
  "code_6029": "操作帐号时：门店员工信息不存在",
  "code_6030": "操作帐号时：用户不存在",
  "code_6031": "操作帐号时：数据已被删除",
  "code_6032": "操作帐号时：门店员工类型对应的权限不存在",
  "code_6033": "操作帐号时：门店员工类型不存在",
  "code_6034": "操作帐号时：用户已经拥有门店",
  "code_6035": "操作帐号时：用户未登录",
  "code_6036": "操作帐号时：不是门店员工",
  "code_6037": "操作帐号时：帐号被冻结",
  "code_6038": "操作帐号时：帐号或密码错误",
  "code_6039": "操作帐号时：帐号不能为空",
  "code_6040": "操作帐号时：请先登陆",
  "code_6041": "操作帐号时：新密码不能为空",
  "code_6042": "操作帐号时：请输入冻结天数",
  "code_6043": "操作帐号时：请输入id",
  "code_6044": "操作帐号时：state参数不正确",
  "code_6045": "操作帐号时：state参数不能为空",
  "code_6046": "操作帐号时：您只可以操作管理员和业务员类型用户权限",
  "code_6047": "操作帐号时：您只可以操作业务员类型用户权限",
  "code_6048": "操作帐号时：没有操作权限",
  "code_6049": "操作帐号时：您没有对该用户重置密码权限",
  "code_6050": "操作帐号时：您不能对自己的账号重置密码",
  "code_6051": "操作帐号时：登陆的身份不正确",
  "code_6052": "操作帐号时：不能删除自己的信息",
  "code_6053": "操作帐号时：文件太大",
  "code_6054": "操作帐号时：文件不存在",
  "code_6055": "操作帐号时：不能上传此类型文件",
  "code_6056": "操作帐号时：同名文件已经存在了",
  "code_6057": "操作帐号时：移动文件出错",
  "code_6058": "操作帐号时：已经提交删除申请",
  "code_6059": "操作帐号时：不处在审核中",
  "code_6060": "操作帐号时：类型不匹配",
  "code_7001": "操作数据统计时：失败",
  "code_7002": "操作数据统计时：数据不能为空",
  "code_7003": "操作数据统计时：保存失败",
  "code_7004": "操作数据统计时：抛出异常保存失败",
  "code_7005": "操作数据统计时：暂无数据",
  "code_7006": "操作数据统计时：没有可以删除的数据",
  "code_7007": "操作数据统计时：没有可以更新的数据",
  "code_7008": "操作数据统计时：不存在该条数据或已被删除",
  "code_7009": "操作数据统计时：手机号格式不正确",
  "code_7010": "操作数据统计时：电话号格式不正确",
  "code_7011": "操作数据统计时：邮箱格式不正确",
  "code_7012": "操作数据统计时：身份证格式不正确",
  "code_7013": "操作数据统计时：QQ格式不正确",
  "code_7014": "操作数据统计时：无效参数",
  "code_7015": "操作数据统计时：有特定参数不能为空",
  "code_7016": "操作数据统计时：异常操作",
  "code_7017": "操作数据统计时：参数格式输入有误",
  "code_7018": "操作数据统计时：密码不能为空",
  "code_7019": "操作数据统计时：确认密码不能为空",
  "code_7020": "操作数据统计时：密码与确认密码不匹配",
  "code_7021": "操作数据统计时：用户名已存在",
  "code_7022": "操作数据统计时：手机已被使用",
  "code_7023": "操作数据统计时：门店员工级别不能为空",
  "code_7024": "操作数据统计时：门店不存在",
  "code_7025": "操作数据统计时：用户名不能为空",
  "code_7026": "操作数据统计时：用户名格式不正确",
  "code_7027": "操作数据统计时：用户真实姓名不能为空",
  "code_7028": "操作数据统计时：手机号码不能为空",
  "code_7029": "操作数据统计时：门店员工信息不存在",
  "code_7030": "操作数据统计时：用户不存在",
  "code_7031": "操作数据统计时：数据已被删除",
  "code_7032": "操作数据统计时：门店员工类型对应的权限不存在",
  "code_7033": "操作数据统计时：门店员工类型不存在",
  "code_7034": "操作数据统计时：用户已经拥有门店",
  "code_7035": "操作数据统计时：用户未登录",
  "code_7036": "操作数据统计时：不是门店员工",
  "code_7037": "操作数据统计时：帐号被冻结",
  "code_7038": "操作数据统计时：帐号或密码错误",
  "code_7039": "操作数据统计时：帐号不能为空",
  "code_7040": "操作数据统计时：请先登陆",
  "code_7041": "操作数据统计时：新密码不能为空",
  "code_7042": "操作数据统计时：请输入冻结天数",
  "code_7043": "操作数据统计时：请输入id",
  "code_7044": "操作数据统计时：state参数不正确",
  "code_7045": "操作数据统计时：state参数不能为空",
  "code_7046": "操作数据统计时：您只可以操作管理员和业务员类型用户权限",
  "code_7047": "操作数据统计时：您只可以操作业务员类型用户权限",
  "code_7048": "操作数据统计时：没有操作权限",
  "code_7049": "操作数据统计时：您没有对该用户重置密码权限",
  "code_7050": "操作数据统计时：您不能对自己的账号重置密码",
  "code_7051": "操作数据统计时：登陆的身份不正确",
  "code_7052": "操作数据统计时：不能删除自己的信息",
  "code_7053": "操作数据统计时：文件太大",
  "code_7054": "操作数据统计时：文件不存在",
  "code_7055": "操作数据统计时：不能上传此类型文件",
  "code_7056": "操作数据统计时：同名文件已经存在了",
  "code_7057": "操作数据统计时：移动文件出错",
  "code_7058": "操作数据统计时：已经提交删除申请",
  "code_7059": "操作数据统计时：不处在审核中",
  "code_7060": "操作数据统计时：类型不匹配",
  "code_13001": "操作需求时：失败",
  "code_13002": "操作需求时：数据不能为空",
  "code_13003": "操作需求时：保存失败",
  "code_13004": "操作需求时：抛出异常保存失败",
  "code_13005": "操作需求时：暂无数据",
  "code_13006": "操作需求时：没有可以删除的数据",
  "code_13007": "操作需求时：没有可以更新的数据",
  "code_13008": "操作需求时：不存在该条数据或已被删除",
  "code_13009": "操作需求时：手机号格式不正确",
  "code_13010": "操作需求时：电话号格式不正确",
  "code_13011": "操作需求时：邮箱格式不正确",
  "code_13012": "操作需求时：身份证格式不正确",
  "code_13013": "操作需求时：QQ格式不正确",
  "code_13014": "操作需求时：无效参数",
  "code_13015": "操作需求时：有特定参数不能为空",
  "code_13016": "操作需求时：异常操作",
  "code_13017": "操作需求时：参数格式输入有误",
  "code_13018": "操作需求时：密码不能为空",
  "code_13019": "操作需求时：确认密码不能为空",
  "code_13020": "操作需求时：密码与确认密码不匹配",
  "code_13021": "操作需求时：用户名已存在",
  "code_13022": "操作需求时：手机已被使用",
  "code_13023": "操作需求时：门店员工级别不能为空",
  "code_13024": "操作需求时：门店不存在",
  "code_13025": "操作需求时：用户名不能为空",
  "code_13026": "操作需求时：用户名格式不正确",
  "code_13027": "操作需求时：用户真实姓名不能为空",
  "code_13028": "操作需求时：手机号码不能为空",
  "code_13029": "操作需求时：门店员工信息不存在",
  "code_13030": "操作需求时：用户不存在",
  "code_13031": "操作需求时：数据已被删除",
  "code_13032": "操作需求时：门店员工类型对应的权限不存在",
  "code_13033": "操作需求时：门店员工类型不存在",
  "code_13034": "操作需求时：用户已经拥有门店",
  "code_13035": "操作需求时：用户未登录",
  "code_13036": "操作需求时：不是门店员工",
  "code_13037": "操作需求时：帐号被冻结",
  "code_13038": "操作需求时：帐号或密码错误",
  "code_13039": "操作需求时：帐号不能为空",
  "code_13040": "操作需求时：请先登陆",
  "code_13041": "操作需求时：新密码不能为空",
  "code_13042": "操作需求时：请输入冻结天数",
  "code_13043": "操作需求时：请输入id",
  "code_13044": "操作需求时：state参数不正确",
  "code_13045": "操作需求时：state参数不能为空",
  "code_13046": "操作需求时：您只可以操作管理员和业务员类型用户权限",
  "code_13047": "操作需求时：您只可以操作业务员类型用户权限",
  "code_13048": "操作需求时：没有操作权限",
  "code_13049": "操作需求时：您没有对该用户重置密码权限",
  "code_13050": "操作需求时：您不能对自己的账号重置密码",
  "code_13051": "操作需求时：登陆的身份不正确",
  "code_13052": "操作需求时：不能删除自己的信息",
  "code_13053": "操作需求时：文件太大",
  "code_13054": "操作需求时：文件不存在",
  "code_13055": "操作需求时：不能上传此类型文件",
  "code_13056": "操作需求时：同名文件已经存在了",
  "code_13057": "操作需求时：移动文件出错",
  "code_13058": "操作需求时：已经提交删除申请",
  "code_13059": "操作需求时：不处在审核中",
  "code_13060": "操作需求时：类型不匹配",
  "code_9001": "操作合同时：失败",
  "code_9002": "操作合同时：数据不能为空",
  "code_9003": "操作合同时：保存失败",
  "code_9004": "操作合同时：抛出异常保存失败",
  "code_9005": "操作合同时：暂无数据",
  "code_9006": "操作合同时：没有可以删除的数据",
  "code_9007": "操作合同时：没有可以更新的数据",
  "code_9008": "操作合同时：不存在该条数据或已被删除",
  "code_9009": "操作合同时：手机号格式不正确",
  "code_9010": "操作合同时：电话号格式不正确",
  "code_9011": "操作合同时：邮箱格式不正确",
  "code_9012": "操作合同时：身份证格式不正确",
  "code_9013": "操作合同时：QQ格式不正确",
  "code_9014": "操作合同时：无效参数",
  "code_9015": "操作合同时：有特定参数不能为空",
  "code_9016": "操作合同时：异常操作",
  "code_9017": "操作合同时：参数格式输入有误",
  "code_9018": "操作合同时：密码不能为空",
  "code_9019": "操作合同时：确认密码不能为空",
  "code_9020": "操作合同时：密码与确认密码不匹配",
  "code_9021": "操作合同时：用户名已存在",
  "code_9022": "操作合同时：手机已被使用",
  "code_9023": "操作合同时：门店员工级别不能为空",
  "code_9024": "操作合同时：门店不存在",
  "code_9025": "操作合同时：用户名不能为空",
  "code_9026": "操作合同时：用户名格式不正确",
  "code_9027": "操作合同时：用户真实姓名不能为空",
  "code_9028": "操作合同时：手机号码不能为空",
  "code_9029": "操作合同时：门店员工信息不存在",
  "code_9030": "操作合同时：用户不存在",
  "code_9031": "操作合同时：数据已被删除",
  "code_9032": "操作合同时：门店员工类型对应的权限不存在",
  "code_9033": "操作合同时：门店员工类型不存在",
  "code_9034": "操作合同时：用户已经拥有门店",
  "code_9035": "操作合同时：用户未登录",
  "code_9036": "操作合同时：不是门店员工",
  "code_9037": "操作合同时：帐号被冻结",
  "code_9038": "操作合同时：帐号或密码错误",
  "code_9039": "操作合同时：帐号不能为空",
  "code_9040": "操作合同时：请先登陆",
  "code_9041": "操作合同时：新密码不能为空",
  "code_9042": "操作合同时：请输入冻结天数",
  "code_9043": "操作合同时：请输入id",
  "code_9044": "操作合同时：state参数不正确",
  "code_9045": "操作合同时：state参数不能为空",
  "code_9046": "操作合同时：您只可以操作管理员和业务员类型用户权限",
  "code_9047": "操作合同时：您只可以操作业务员类型用户权限",
  "code_9048": "操作合同时：没有操作权限",
  "code_9049": "操作合同时：您没有对该用户重置密码权限",
  "code_9050": "操作合同时：您不能对自己的账号重置密码",
  "code_9051": "操作合同时：登陆的身份不正确",
  "code_9052": "操作合同时：不能删除自己的信息",
  "code_9053": "操作合同时：文件太大",
  "code_9054": "操作合同时：文件不存在",
  "code_9055": "操作合同时：不能上传此类型文件",
  "code_9056": "操作合同时：同名文件已经存在了",
  "code_9057": "操作合同时：移动文件出错",
  "code_9058": "操作合同时：已经提交删除申请",
  "code_9059": "操作合同时：不处在审核中",
  "code_9060": "操作合同时：类型不匹配",
  "code_10001": "操作证书时：失败",
  "code_10002": "操作证书时：数据不能为空",
  "code_10003": "操作证书时：保存失败",
  "code_10004": "操作证书时：抛出异常保存失败",
  "code_10005": "操作证书时：暂无数据",
  "code_10006": "操作证书时：没有可以删除的数据",
  "code_10007": "操作证书时：没有可以更新的数据",
  "code_10008": "操作证书时：不存在该条数据或已被删除",
  "code_10009": "操作证书时：手机号格式不正确",
  "code_10010": "操作证书时：电话号格式不正确",
  "code_10011": "操作证书时：邮箱格式不正确",
  "code_10012": "操作证书时：身份证格式不正确",
  "code_10013": "操作证书时：QQ格式不正确",
  "code_10014": "操作证书时：无效参数",
  "code_10015": "操作证书时：有特定参数不能为空",
  "code_10016": "操作证书时：异常操作",
  "code_10017": "操作证书时：参数格式输入有误",
  "code_10018": "操作证书时：密码不能为空",
  "code_10019": "操作证书时：确认密码不能为空",
  "code_10020": "操作证书时：密码与确认密码不匹配",
  "code_10021": "操作证书时：用户名已存在",
  "code_10022": "操作证书时：手机已被使用",
  "code_10023": "操作证书时：门店员工级别不能为空",
  "code_10024": "操作证书时：门店不存在",
  "code_10025": "操作证书时：用户名不能为空",
  "code_10026": "操作证书时：用户名格式不正确",
  "code_10027": "操作证书时：用户真实姓名不能为空",
  "code_10028": "操作证书时：手机号码不能为空",
  "code_10029": "操作证书时：门店员工信息不存在",
  "code_10030": "操作证书时：用户不存在",
  "code_10031": "操作证书时：数据已被删除",
  "code_10032": "操作证书时：门店员工类型对应的权限不存在",
  "code_10033": "操作证书时：门店员工类型不存在",
  "code_10034": "操作证书时：用户已经拥有门店",
  "code_10035": "操作证书时：用户未登录",
  "code_10036": "操作证书时：不是门店员工",
  "code_10037": "操作证书时：帐号被冻结",
  "code_10038": "操作证书时：帐号或密码错误",
  "code_10039": "操作证书时：帐号不能为空",
  "code_10040": "操作证书时：请先登陆",
  "code_10041": "操作证书时：新密码不能为空",
  "code_10042": "操作证书时：请输入冻结天数",
  "code_10043": "操作证书时：请输入id",
  "code_10044": "操作证书时：state参数不正确",
  "code_10045": "操作证书时：state参数不能为空",
  "code_10046": "操作证书时：您只可以操作管理员和业务员类型用户权限",
  "code_10047": "操作证书时：您只可以操作业务员类型用户权限",
  "code_10048": "操作证书时：没有操作权限",
  "code_10049": "操作证书时：您没有对该用户重置密码权限",
  "code_10050": "操作证书时：您不能对自己的账号重置密码",
  "code_10051": "操作证书时：登陆的身份不正确",
  "code_10052": "操作证书时：不能删除自己的信息",
  "code_10053": "操作证书时：文件太大",
  "code_10054": "操作证书时：文件不存在",
  "code_10055": "操作证书时：不能上传此类型文件",
  "code_10056": "操作证书时：同名文件已经存在了",
  "code_10057": "操作证书时：移动文件出错",
  "code_10058": "操作证书时：已经提交删除申请",
  "code_10059": "操作证书时：不处在审核中",
  "code_10060": "操作证书时：类型不匹配",
  "code_11001": "操作消息时：失败",
  "code_11002": "操作消息时：数据不能为空",
  "code_11003": "操作消息时：保存失败",
  "code_11004": "操作消息时：抛出异常保存失败",
  "code_11005": "操作消息时：暂无数据",
  "code_11006": "操作消息时：没有可以删除的数据",
  "code_11007": "操作消息时：没有可以更新的数据",
  "code_11008": "操作消息时：不存在该条数据或已被删除",
  "code_11009": "操作消息时：手机号格式不正确",
  "code_11010": "操作消息时：电话号格式不正确",
  "code_11011": "操作消息时：邮箱格式不正确",
  "code_11012": "操作消息时：身份证格式不正确",
  "code_11013": "操作消息时：QQ格式不正确",
  "code_11014": "操作消息时：无效参数",
  "code_11015": "操作消息时：有特定参数不能为空",
  "code_11016": "操作消息时：异常操作",
  "code_11017": "操作消息时：参数格式输入有误",
  "code_11018": "操作消息时：密码不能为空",
  "code_11019": "操作消息时：确认密码不能为空",
  "code_11020": "操作消息时：密码与确认密码不匹配",
  "code_11021": "操作消息时：用户名已存在",
  "code_11022": "操作消息时：手机已被使用",
  "code_11023": "操作消息时：门店员工级别不能为空",
  "code_11024": "操作消息时：门店不存在",
  "code_11025": "操作消息时：用户名不能为空",
  "code_11026": "操作消息时：用户名格式不正确",
  "code_11027": "操作消息时：用户真实姓名不能为空",
  "code_11028": "操作消息时：手机号码不能为空",
  "code_11029": "操作消息时：门店员工信息不存在",
  "code_11030": "操作消息时：用户不存在",
  "code_11031": "操作消息时：数据已被删除",
  "code_11032": "操作消息时：门店员工类型对应的权限不存在",
  "code_11033": "操作消息时：门店员工类型不存在",
  "code_11034": "操作消息时：用户已经拥有门店",
  "code_11035": "操作消息时：用户未登录",
  "code_11036": "操作消息时：不是门店员工",
  "code_11037": "操作消息时：帐号被冻结",
  "code_11038": "操作消息时：帐号或密码错误",
  "code_11039": "操作消息时：帐号不能为空",
  "code_11040": "操作消息时：请先登陆",
  "code_11041": "操作消息时：新密码不能为空",
  "code_11042": "操作消息时：请输入冻结天数",
  "code_11043": "操作消息时：请输入id",
  "code_11044": "操作消息时：state参数不正确",
  "code_11045": "操作消息时：state参数不能为空",
  "code_11046": "操作消息时：您只可以操作管理员和业务员类型用户权限",
  "code_11047": "操作消息时：您只可以操作业务员类型用户权限",
  "code_11048": "操作消息时：没有操作权限",
  "code_11049": "操作消息时：您没有对该用户重置密码权限",
  "code_11050": "操作消息时：您不能对自己的账号重置密码",
  "code_11051": "操作消息时：登陆的身份不正确",
  "code_11052": "操作消息时：不能删除自己的信息",
  "code_11053": "操作消息时：文件太大",
  "code_11054": "操作消息时：文件不存在",
  "code_11055": "操作消息时：不能上传此类型文件",
  "code_11056": "操作消息时：同名文件已经存在了",
  "code_11057": "操作消息时：移动文件出错",
  "code_11058": "操作消息时：已经提交删除申请",
  "code_11059": "操作消息时：不处在审核中",
  "code_11060": "操作消息时：类型不匹配",
  "code_12001": "操作阿姨和中介时：失败",
  "code_12002": "操作阿姨和中介时：数据不能为空",
  "code_12003": "操作阿姨和中介时：保存失败",
  "code_12004": "操作阿姨和中介时：抛出异常保存失败",
  "code_12005": "操作阿姨和中介时：暂无数据",
  "code_12006": "操作阿姨和中介时：没有可以删除的数据",
  "code_12007": "操作阿姨和中介时：没有可以更新的数据",
  "code_12008": "操作阿姨和中介时：不存在该条数据或已被删除",
  "code_12009": "操作阿姨和中介时：手机号格式不正确",
  "code_12010": "操作阿姨和中介时：电话号格式不正确",
  "code_12011": "操作阿姨和中介时：邮箱格式不正确",
  "code_12012": "操作阿姨和中介时：身份证格式不正确",
  "code_12013": "操作阿姨和中介时：QQ格式不正确",
  "code_12014": "操作阿姨和中介时：无效参数",
  "code_12015": "操作阿姨和中介时：有特定参数不能为空",
  "code_12016": "操作阿姨和中介时：异常操作",
  "code_12017": "操作阿姨和中介时：参数格式输入有误",
  "code_12018": "操作阿姨和中介时：密码不能为空",
  "code_12019": "操作阿姨和中介时：确认密码不能为空",
  "code_12020": "操作阿姨和中介时：密码与确认密码不匹配",
  "code_12021": "操作阿姨和中介时：用户名已存在",
  "code_12022": "操作阿姨和中介时：手机已被使用",
  "code_12023": "操作阿姨和中介时：门店员工级别不能为空",
  "code_12024": "操作阿姨和中介时：门店不存在",
  "code_12025": "操作阿姨和中介时：用户名不能为空",
  "code_12026": "操作阿姨和中介时：用户名格式不正确",
  "code_12027": "操作阿姨和中介时：用户真实姓名不能为空",
  "code_12028": "操作阿姨和中介时：手机号码不能为空",
  "code_12029": "操作阿姨和中介时：门店员工信息不存在",
  "code_12030": "操作阿姨和中介时：用户不存在",
  "code_12031": "操作阿姨和中介时：数据已被删除",
  "code_12032": "操作阿姨和中介时：门店员工类型对应的权限不存在",
  "code_12033": "操作阿姨和中介时：门店员工类型不存在",
  "code_12034": "操作阿姨和中介时：用户已经拥有门店",
  "code_12035": "操作阿姨和中介时：用户未登录",
  "code_12036": "操作阿姨和中介时：不是门店员工",
  "code_12037": "操作阿姨和中介时：帐号被冻结",
  "code_12038": "操作阿姨和中介时：帐号或密码错误",
  "code_12039": "操作阿姨和中介时：帐号不能为空",
  "code_12040": "操作阿姨和中介时：请先登陆",
  "code_12041": "操作阿姨和中介时：新密码不能为空",
  "code_12042": "操作阿姨和中介时：请输入冻结天数",
  "code_12043": "操作阿姨和中介时：请输入id",
  "code_12044": "操作阿姨和中介时：state参数不正确",
  "code_12045": "操作阿姨和中介时：state参数不能为空",
  "code_12046": "操作阿姨和中介时：您只可以操作管理员和业务员类型用户权限",
  "code_12047": "操作阿姨和中介时：您只可以操作业务员类型用户权限",
  "code_12048": "操作阿姨和中介时：没有操作权限",
  "code_12049": "操作阿姨和中介时：您没有对该用户重置密码权限",
  "code_12050": "操作阿姨和中介时：您不能对自己的账号重置密码",
  "code_12051": "操作阿姨和中介时：登陆的身份不正确",
  "code_12052": "操作阿姨和中介时：不能删除自己的信息",
  "code_12053": "操作阿姨和中介时：文件太大",
  "code_12054": "操作阿姨和中介时：文件不存在",
  "code_12055": "操作阿姨和中介时：不能上传此类型文件",
  "code_12056": "操作阿姨和中介时：同名文件已经存在了",
  "code_12057": "操作阿姨和中介时：移动文件出错",
  "code_12058": "操作阿姨和中介时：已经提交删除申请",
  "code_12059": "操作阿姨和中介时：不处在审核中",
  "code_12060": "操作阿姨和中介时：类型不匹配",
  "code_7001": "操作数据统计时：失败",
  "code_7002": "操作数据统计时：数据不能为空",
  "code_7003": "操作数据统计时：保存失败",
  "code_7004": "操作数据统计时：抛出异常保存失败",
  "code_7005": "操作数据统计时：暂无数据",
  "code_7006": "操作数据统计时：没有可以删除的数据",
  "code_7007": "操作数据统计时：没有可以更新的数据",
  "code_7008": "操作数据统计时：不存在该条数据或已被删除",
  "code_7009": "操作数据统计时：手机号格式不正确",
  "code_7010": "操作数据统计时：电话号格式不正确",
  "code_7011": "操作数据统计时：邮箱格式不正确",
  "code_7012": "操作数据统计时：身份证格式不正确",
  "code_7013": "操作数据统计时：QQ格式不正确",
  "code_7014": "操作数据统计时：无效参数",
  "code_7015": "操作数据统计时：有特定参数不能为空",
  "code_7016": "操作数据统计时：异常操作",
  "code_7017": "操作数据统计时：参数格式输入有误",
  "code_7018": "操作数据统计时：密码不能为空",
  "code_7019": "操作数据统计时：确认密码不能为空",
  "code_7020": "操作数据统计时：密码与确认密码不匹配",
  "code_7021": "操作数据统计时：用户名已存在",
  "code_7022": "操作数据统计时：手机已被使用",
  "code_7023": "操作数据统计时：门店员工级别不能为空",
  "code_7024": "操作数据统计时：门店不存在",
  "code_7025": "操作数据统计时：用户名不能为空",
  "code_7026": "操作数据统计时：用户名格式不正确",
  "code_7027": "操作数据统计时：用户真实姓名不能为空",
  "code_7028": "操作数据统计时：手机号码不能为空",
  "code_7029": "操作数据统计时：门店员工信息不存在",
  "code_7030": "操作数据统计时：用户不存在",
  "code_7031": "操作数据统计时：数据已被删除",
  "code_7032": "操作数据统计时：门店员工类型对应的权限不存在",
  "code_7033": "操作数据统计时：门店员工类型不存在",
  "code_7034": "操作数据统计时：用户已经拥有门店",
  "code_7035": "操作数据统计时：用户未登录",
  "code_7036": "操作数据统计时：不是门店员工",
  "code_7037": "操作数据统计时：帐号被冻结",
  "code_7038": "操作数据统计时：帐号或密码错误",
  "code_7039": "操作数据统计时：帐号不能为空",
  "code_7040": "操作数据统计时：请先登陆",
  "code_7041": "操作数据统计时：新密码不能为空",
  "code_7042": "操作数据统计时：请输入冻结天数",
  "code_7043": "操作数据统计时：请输入id",
  "code_7044": "操作数据统计时：state参数不正确",
  "code_7045": "操作数据统计时：state参数不能为空",
  "code_7046": "操作数据统计时：您只可以操作管理员和业务员类型用户权限",
  "code_7047": "操作数据统计时：您只可以操作业务员类型用户权限",
  "code_7048": "操作数据统计时：没有操作权限",
  "code_7049": "操作数据统计时：您没有对该用户重置密码权限",
  "code_7050": "操作数据统计时：您不能对自己的账号重置密码",
  "code_7051": "操作数据统计时：登陆的身份不正确",
  "code_7052": "操作数据统计时：不能删除自己的信息",
  "code_7053": "操作数据统计时：文件太大",
  "code_7054": "操作数据统计时：文件不存在",
  "code_7055": "操作数据统计时：不能上传此类型文件",
  "code_7056": "操作数据统计时：同名文件已经存在了",
  "code_7057": "操作数据统计时：移动文件出错",
  "code_7058": "操作数据统计时：已经提交删除申请",
  "code_7059": "操作数据统计时：不处在审核中",
  "code_7060": "操作数据统计时：类型不匹配",
  "code_7001": "操作数据统计时：失败",
  "code_7002": "操作数据统计时：数据不能为空",
  "code_7003": "操作数据统计时：保存失败",
  "code_7004": "操作数据统计时：抛出异常保存失败",
  "code_7005": "操作数据统计时：暂无数据",
  "code_7006": "操作数据统计时：没有可以删除的数据",
  "code_7007": "操作数据统计时：没有可以更新的数据",
  "code_7008": "操作数据统计时：不存在该条数据或已被删除",
  "code_7009": "操作数据统计时：手机号格式不正确",
  "code_7010": "操作数据统计时：电话号格式不正确",
  "code_7011": "操作数据统计时：邮箱格式不正确",
  "code_7012": "操作数据统计时：身份证格式不正确",
  "code_7013": "操作数据统计时：QQ格式不正确",
  "code_7014": "操作数据统计时：无效参数",
  "code_7015": "操作数据统计时：有特定参数不能为空",
  "code_7016": "操作数据统计时：异常操作",
  "code_7017": "操作数据统计时：参数格式输入有误",
  "code_7018": "操作数据统计时：密码不能为空",
  "code_7019": "操作数据统计时：确认密码不能为空",
  "code_7020": "操作数据统计时：密码与确认密码不匹配",
  "code_7021": "操作数据统计时：用户名已存在",
  "code_7022": "操作数据统计时：手机已被使用",
  "code_7023": "操作数据统计时：门店员工级别不能为空",
  "code_7024": "操作数据统计时：门店不存在",
  "code_7025": "操作数据统计时：用户名不能为空",
  "code_7026": "操作数据统计时：用户名格式不正确",
  "code_7027": "操作数据统计时：用户真实姓名不能为空",
  "code_7028": "操作数据统计时：手机号码不能为空",
  "code_7029": "操作数据统计时：门店员工信息不存在",
  "code_7030": "操作数据统计时：用户不存在",
  "code_7031": "操作数据统计时：数据已被删除",
  "code_7032": "操作数据统计时：门店员工类型对应的权限不存在",
  "code_7033": "操作数据统计时：门店员工类型不存在",
  "code_7034": "操作数据统计时：用户已经拥有门店",
  "code_7035": "操作数据统计时：用户未登录",
  "code_7036": "操作数据统计时：不是门店员工",
  "code_7037": "操作数据统计时：帐号被冻结",
  "code_7038": "操作数据统计时：帐号或密码错误",
  "code_7039": "操作数据统计时：帐号不能为空",
  "code_7040": "操作数据统计时：请先登陆",
  "code_7041": "操作数据统计时：新密码不能为空",
  "code_7042": "操作数据统计时：请输入冻结天数",
  "code_7043": "操作数据统计时：请输入id",
  "code_7044": "操作数据统计时：state参数不正确",
  "code_7045": "操作数据统计时：state参数不能为空",
  "code_7046": "操作数据统计时：您只可以操作管理员和业务员类型用户权限",
  "code_7047": "操作数据统计时：您只可以操作业务员类型用户权限",
  "code_7048": "操作数据统计时：没有操作权限",
  "code_7049": "操作数据统计时：您没有对该用户重置密码权限",
  "code_7050": "操作数据统计时：您不能对自己的账号重置密码",
  "code_7051": "操作数据统计时：登陆的身份不正确",
  "code_7052": "操作数据统计时：不能删除自己的信息",
  "code_7053": "操作数据统计时：文件太大",
  "code_7054": "操作数据统计时：文件不存在",
  "code_7055": "操作数据统计时：不能上传此类型文件",
  "code_7056": "操作数据统计时：同名文件已经存在了",
  "code_7057": "操作数据统计时：移动文件出错",
  "code_7058": "操作数据统计时：已经提交删除申请",
  "code_7059": "操作数据统计时：不处在审核中",
  "code_7060": "操作数据统计时：类型不匹配"
}