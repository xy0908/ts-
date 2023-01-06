"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/***
 * 方法装饰器:
 *      它会应用到方法的 属性描述上, 可以用来监视、修改或者替换方法的定义
 *
 *      方法装饰器会在运行时传入下列3个参数:
 *          1、对于静态成员来说是类的构造函数、对于实例化成员是类的原型对象
 *          2、成员的名字
 *          3、成员的属性描述符
*/
var b;
(function (b) {
    function logMethods(params) {
        return function (target, methodsName, des) {
            console.log(target);
            console.log(methodsName);
            console.log(des.value);
            // 修改当前实列的属性和方法
            target.url = "小羊qaq";
            // 修改方法
            // 保存原来的方法
            let oMethods = des.value;
            des.value = function () {
                console.log("11");
                oMethods.apply(this);
            };
        };
    }
    class httpClient {
        constructor() { }
        getData() {
            console.log("22");
        }
    }
    __decorate([
        logMethods("小羊")
    ], httpClient.prototype, "getData", null);
    let h = new httpClient();
    h.getData();
})(b || (b = {}));
