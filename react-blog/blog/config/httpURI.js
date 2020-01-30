const httpUrI = 'http://127.0.0.1:7001/default/'

var serviceApi = {
    getArticleList: httpUrI + 'getArticleList',   // 获取文章列表   get
    getArticleById: httpUrI + 'getArticleById/',  // 通过id获取文章  get 
    getTypeInfo:httpUrI + 'getTypeInfo',   // 获取类型信息  post
}

export default serviceApi