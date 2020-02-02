'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ArticleSchema = new Schema({
        id:{   // 文章编号
            type:Number
        },
        typeId:{  // 文章类型编号  type表里面的id
            type:String
        },
        title:{   // 文章标题
            type:String
        },
        articleContent:{   // 文章主体内容
            type:String
        },
        introduce:{   // 文章简介
            type:String
        },
        addTime:{   // 发布文章的时间
            type:String
        },
        viewCount:{  // 浏览次数
            type:Number
        }
    })
    return mongoose.model('Article',ArticleSchema)
}