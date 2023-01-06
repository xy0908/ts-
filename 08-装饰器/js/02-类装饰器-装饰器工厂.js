"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//装饰器工厂
function logClass1(params) {
    /**
     * 使用装饰器工厂
     *      需要 return 一个函数
     *      函数的参数 就是类
     *      参数.prototype.xxxx =xxxx 添加属性
     * */
    return function (t) {
        console.log(params); // 传入的参数
        console.log(t); // 类
        t.prototype.xxx = "xxx";
    };
}
let httpClient1 = class httpClient1 {
    constructor() { }
    getData() { }
};
httpClient1 = __decorate([
    logClass1("dd")
], httpClient1);
// 实例化
let h1 = new httpClient1();
console.log(h1.xxx);
