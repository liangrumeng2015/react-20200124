module.exports = app =>{
    const {router,controller} = app;
    const adminAuthor = app.middleware.adminAuthor();
    router.get('/admin/index',controller.admin.main.index);
    router.post('/admin/checkLogin',controller.admin.main.checkLogin);
    router.get('/admin/getTypeInfo',controller.admin.main.getTypeInfo);
}