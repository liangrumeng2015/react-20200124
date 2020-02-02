module.exports = options =>{
    return async function adminAuthor(ctx,next){
        if(ctx.session.openId){
            await next();
        }else{
            ctx.body = {
                success:false,
                msg:'no-login'
            }
        }
    }
}