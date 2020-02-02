const Service = require('egg').Service;

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
}

module.exports = MainService;