"use strict";
/**
 * 属性装饰器:
 *      属性装饰器表达式会在运行时当作函数被调用  传入下列2个参数
 *          1:对于静态成员来说是类的构造函数,对于实例成员是类的原型对象
 *          2:成员的名字
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// a 命名空间
var a;
(function (a_1) {
    //类的装饰器
    function logClass(params) {
        return function (t) {
        };
    }
    //属性装饰器
    function logProperty(params) {
        // return一个方法  接受俩个参数 
        return function (a, b) {
            console.log(a, "----a是原型对象");
            console.log(b, "----b是成员名字");
            // 修改
            //a.b = params //修改失败
            a[b] = params; //修改成功
        };
    }
    let httpClient = class httpClient {
        constructor() { }
        getData() {
            console.log(this.url);
        }
    };
    __decorate([
        logProperty("https://fanyi.baidu.com/#en/zh/")
    ], httpClient.prototype, "url", void 0);
    httpClient = __decorate([
        logClass("类的装饰器")
    ], httpClient);
    // 实例化
    let h = new httpClient();
    h.getData();
})(a || (a = {}));
