const httpUrI = 'http://127.0.0.1:7001/admin/'

var serviceApi = {
    checkLogin: httpUrI + 'checkLogin',   // 登录接口   post
    getTypeInfo: httpUrI + 'getTypeInfo',   // 获取类型信息   get
    saveAndRelease: httpUrI + 'saveAndRelease',   // 添加文章 post
    updateArticle: httpUrI + 'updateArticle'   // 更新文章内容 post
}

export default serviceApi