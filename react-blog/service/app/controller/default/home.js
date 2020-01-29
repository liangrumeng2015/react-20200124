'use strict';

const Controller = require('egg').Controller;
// const User = require('./model/User')
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'api接口  default111';
    // ctx.body = ctx.model.User.find({});
    
  }

 
}

module.exports = HomeController;
