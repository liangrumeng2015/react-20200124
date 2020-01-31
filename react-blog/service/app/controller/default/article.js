'use strict';
const Controller = require('egg').Controller;

class ArticleController extends Controller{
    // 获取文章列表
    async getArticleList(){
        const {ctx} = this;
        ctx.body = {module:await ctx.service.default.article.getArticleList()}
    }
    // 通过id获取文章详情页信息
    async getArticleById(){
        const {ctx} = this;
        const id = ctx.params.id;
        ctx.body = {module:await ctx.service.default.article.getArticleById(id)}
    }
    // 获取类型信息
    async getTypeInfo(){
        const {ctx} = this;
        ctx.body = {module:await ctx.service.default.article.getTypeInfo()}
    }
    // 根据id获取文章
    async getListById(){
        const {ctx} = this;
        const id = ctx.params.id;
        ctx.body = {module:await ctx.service.default.article.getListById(id)}
    }
}
module.exports = ArticleController;

