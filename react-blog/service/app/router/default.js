module.exports = app=>{
    const {router,controller} =  app;
    router.get('/default/index',controller.default.home.index)
    router.get('/default/user',controller.default.user.add)
    router.get('/default/getArticleList',controller.default.article.getArticleList)
    router.get('/default/getArticleById/:_id',controller.default.article.getArticleById)
    router.post('/default/getTypeInfo',controller.default.article.getTypeInfo)

}