"use strict";
/**
 * 功能:
 *      定义一个操作数据库的库 支持 Mysql Mssq1 MongoDb
 *
 * 方法要求1:
 *      Mysql MsSql MongoDb功能一样 都有 add update delete get
 *
 * 注意:
 *      约束统一的规范、以及代码重用解决方案: 需要约束规范所以要定义接口 ，需要代码重用所以用到
 *      泛型1、接口: 在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的
 *      规范2、泛型 通俗理解:泛型就是解决 类 接口 方法的复用性、
*/
// 定义一个 MongoDb类  使用 DbAPI接口   
// 使用泛型 这个类也应该是泛型
class MongoDb {
    add(info) {
        console.log(info);
        return true;
    }
    updated(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        let arr = [
            {
                title: "模拟",
                dec: "内容内容"
            }
        ];
        return arr;
    }
}
//操作数据表  定义一个user类来影视数据表
class user {
}
// 实例化user
let myUser = new user();
myUser.username = "小羊";
myUser.password = "123456";
// 操作数据 实例化MongoDb
let mongodb = new MongoDb(); // 使用泛型  将user类作为泛型 进行类型校验
mongodb.add(myUser);
mongodb.add(myUser);
mongodb.add(myUser);
mongodb.add(myUser);
let data = mongodb.get(1);
console.log(data);
