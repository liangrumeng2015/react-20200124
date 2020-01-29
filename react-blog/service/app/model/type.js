'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const TypeSchema = new Schema({
        id:{   // 类型编号
            type:String
        },
        typeName:{   // 文章类型名称
            type:String
        },
        orderNum:{   // 类型排序编号
            type:String
        }
    })
    return mongoose.model('Type',TypeSchema)
}