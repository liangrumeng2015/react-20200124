'use strict';
const Controller = require('egg').Controller;

class ArticleController extends Controller{
    async getArticleList(){
        const {ctx} = this;
        ctx.body = {module:await ctx.service.default.article.getArticleList()}
    }
}
module.exports = ArticleController;

