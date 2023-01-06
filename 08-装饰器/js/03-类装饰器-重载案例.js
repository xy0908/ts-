"use strict";
/**
 * 使用类装饰器 重载构造函数
 *
 *      类装饰器表达式会在运行时当作函数被调用,类的构造函数作为其唯一的参数
 *      如果类装饰器返回一个值,它会使用提供的构造函数来替换类的声明
 * */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 重载 类的构造函数
function logHttp(params) {
    /**
     * params 类
     * 重载 httpC的构造函数
     * 返回 一个类
     * 返回的类 继承 接受的类
    */
    return class extends params {
        constructor() {
            super(...arguments);
            this.httpUrl = "我是修改后的网站----";
        }
        getData() {
            console.log(this.httpUrl + "------------getData方式修改后的");
        }
    };
}
let httpC = 
// 类
class httpC {
    constructor() {
        this.httpUrl = "修改前的网站xxxx";
    }
    getData() {
        console.log(this.httpUrl + "------------getData方式");
    }
};
httpC = __decorate([
    logHttp //使用装饰器
    // 类
], httpC);
// 实例化
let h2 = new httpC();
console.log(h2.httpUrl);
h2.getData();
