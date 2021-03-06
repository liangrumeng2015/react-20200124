/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580274884233_7286';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  exports.mongoose = {
    // client:{
      url: 'mongodb://39.105.230.151:27017/react_blog',
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
      // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
    // }
  };
  config.security = {
    csrf :{
        enable:false
    },
    domainWhiteList: [ '*' ],
  };
  // add cors config here
  config.cors = {
      origin: 'http://localhost:3000', // 访问白名单,根据你自己的需要进行设置
      credentials: true,  //允许Cookie可以跨域,
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  

  return {
    ...config,
    ...userConfig,
  };
};
