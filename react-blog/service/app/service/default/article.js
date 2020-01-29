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
        let result = await ctx.model.Article.find({'_id':ObjectId(id)})

        const [articleType] = await ctx.model.Type.find({id})
        const {typeName,orderNum} = articleType;
        result[0].typeName = typeName;
        result[0].orderNum = orderNum;
        
        console.log(result);

        return result;
    }
}
module.exports = ArticleService;

