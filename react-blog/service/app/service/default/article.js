'use strict';

const Service = require('egg').Service;
const ObjectId = require('mongodb').ObjectId;
class ArticleService extends Service{
    async getArticleList(){
        const {ctx} = this;
        const result = await ctx.model.Article.find({});
        return result;
    }

    async getArticleById(id){
        const {ctx} = this;
        const result = await ctx.model.Article.find({'_id':ObjectId(id)});
        const articleType = await ctx.model.Type.find({id})
        return {result,articleType};
    }

    async getTypeInfo(){
        const {ctx} = this;
        const result = await ctx.model.Type.find({});
        return result;
    }

    async getListById(id){
        const {ctx} = this;
        const result = await ctx.model.Article.find({'typeId':id})
        return result
    }
}

module.exports = ArticleService;

