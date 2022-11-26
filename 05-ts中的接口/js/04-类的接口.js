"use strict";
// 类类型的接口: 对类的约束 
class Dog {
    constructor(name) {
        this.name = name;
    }
    eat(str) {
        console.log(this.name + "在吃狗粮");
    }
}
let d = new Dog("小黑");
d.eat("小黑");
//  语法: class 类名 implements 接口
