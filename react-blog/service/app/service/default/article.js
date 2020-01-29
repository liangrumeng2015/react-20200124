'use strict';

const Service = require('egg').Service;
class ArticleService extends Service{
    async getArticleList(){
        const {ctx} = this;
        const result = await ctx.model.Article.find({});
        return result;
    }
}
module.exports = ArticleService;

