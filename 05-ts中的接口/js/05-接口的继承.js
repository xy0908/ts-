"use strict";
// 接口的继承
//使用接口
class Web {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log("吃饭");
    }
    work() {
        console.log("工作");
    }
}
let w = new Web("小羊");
w.eat();
w.work();
console.log("------------------------组合");
//  c是一个类   它继承了web这个类   自身使用了b这个接口 
class c extends Web {
    constructor(name) {
        super(name);
    }
    infoB() {
        console.log("b的接口");
    }
}
let cc = new c("小羊");
cc.infoB();
cc.eat();
