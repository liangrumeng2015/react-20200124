const httpUrI = 'http://127.0.0.1:7001/admin/'

var serviceApi = {
    checkLogin: httpUrI + 'checkLogin',   // 登录接口   post
    getTypeInfo: httpUrI + 'getTypeInfo',   // 获取类型信息   get
}

export default serviceApi