const Service = require('egg').Service;
const ObjectId = require('mongodb').ObjectId;

class MainService extends Service{
    // 登录接口
    async checkLogin(userName,password){
        const {ctx} = this;
        let result;
        const data = await  ctx.model.User.find({userName});
        const openId = new Date().getTime();
        ctx.session = {openId}
        if(data.length !=0){
            if(data[0].password != password){
                result = {
                    msg:'用户名或密码错误',
                    success:false
                }
            }else{
                result = {
                    msg:'登录成功',
                    openId,
                    success:true
                }
            }
        }else{
            result = {
                msg:'用户名不存在',
                success:false
            }
        }
        return result;
    }

    // 获取类型信息
    async getTypeInfo(){
        const {ctx} = this;
        let result = await ctx.model.Type.find({})
        if(result){
            result = {
                module:result,
                success:true
            }
        }else{
            result = {
                success:false
            }
        }
        return result;
    }

    // 保存发布、修改文章
    async saveAndRelease(){
        const {ctx} = this;
        const data = ctx.request.body
        let result;
        const tmpArticle = await ctx.model.Article.create(data);
        if(tmpArticle){
            result = {
                module:tmpArticle,
                success:true
            }
        }else{
            result = {
                success:false
            }
        }
        return result 
    }

    // 根据_id 更新文章
    async updateArticle(){
        const {ctx} = this;
        let result;
        const _id = ctx.request.body._id;
        const data = {
            title:ctx.request.body.articleTitle,
            articleContent:ctx.request.body.articleContent,
            typeId:ctx.request.body.articleId,
            introduce:ctx.request.body.introducemd,
            addTime:ctx.request.body.showDate,
            viewCount:ctx.request.body.viewCount
        }
        const tmpArticle = await ctx.model.Article.update({'_id':_id},data);
        if(tmpArticle.ok == 1){
            result = {
                success:true,
                msg:'修改成功'
            }
        }else{
            result = {
                success:false,
                msg:'修改失败'
            }
        }
        return result
    }

    // 
    async getArticleList(){
        const {ctx} = this;
        const result = await ctx.model.Article.find({})
        return result;
    }



}

module.exports = MainService;