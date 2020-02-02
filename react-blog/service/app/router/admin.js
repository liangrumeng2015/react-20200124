module.exports = app =>{
    const {router,controller} = app;
    const adminAuthor = app.middleware.adminAuthor();
    router.get('/admin/index',controller.admin.main.index);
    router.post('/admin/checkLogin',controller.admin.main.checkLogin);
    router.get('/admin/getTypeInfo',controller.admin.main.getTypeInfo);
    router.post('/admin/saveAndRelease',controller.admin.main.saveAndRelease);
    router.post('/admin/updateArticle',controller.admin.main.updateArticle);
}