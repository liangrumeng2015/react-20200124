'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller{
    async index(){
        const {ctx} = this;
        ctx.body = 'api 接口 admin';
    }

    async checkLogin(){
        const {ctx} = this;
        const userName = ctx.request.body.userName;
        const password = ctx.request.body.password;
        ctx.body = await ctx.service.admin.main.checkLogin(userName,password)
        
    }

    async getTypeInfo(){
        const {ctx} = this;
        ctx.body = await ctx.service.admin.main.getTypeInfo();
    }

    async saveAndRelease(){
        const {ctx} = this;
        ctx.body = await ctx.service.admin.main.saveAndRelease();
    }

    async updateArticle(){
        const {ctx} = this;
        ctx.body = await ctx.service.admin.main.updateArticle();
    }
    async getArticleList(){
        const {ctx} = this;
        ctx.body = await ctx.service.admin.main.getArticleList();
    }
}
module.exports = MainController;

