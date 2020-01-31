module.exports = app=>{
    const {router,controller} =  app;
    router.get('/default/index',controller.default.home.index)
    router.get('/default/user',controller.default.user.add)
    router.get('/default/getArticleList',controller.default.article.getArticleList)
    router.get('/default/getArticleById/:id',controller.default.article.getArticleById)
    router.post('/default/getTypeInfo',controller.default.article.getTypeInfo)
    router.get('/default/getListById/:id',controller.default.article.getListById)
}