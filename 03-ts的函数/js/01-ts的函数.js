"use strict";
/**
 *  ts中的函数
 */
// 函数声明  指定返回的类型
function fun1() {
    return 11;
}
// 匿名函数
let fun2 = function () {
    return "函数2";
};
// 箭头函数
let fun3 = () => {
    return "箭头函数3";
};
// 函数 传参
function fun4(name, age) {
    return `您的姓名是${name},今年${age}岁了`;
}
console.log(fun4("小羊", 11));
/**
 *  配置可选参数
 *      当函数的  形参 和  实参  数量不同的时候
 *          age?:number  代表可以传 也可以不传
 *
 *      注意:可选参数 必须配置到参数的最后面
 *          (name?: string, age:number)  错误
 *          (name: string, age?: number)  正确
 */
function getInfo(name, age) {
    if (age) {
        return `您的姓名是${name},今年${age}岁了`;
    }
    else {
        return `您的姓名是${name},年龄未知`;
    }
}
console.log(getInfo("小羊", 11));
console.log(getInfo("小茜"));
/**
 *  配置默认参数
 *      es5是没有默认参数的
 *      但是 es6 和 ts是有的
*/
function getInfo1(name, age = 11) {
    return `您的姓名是${name},今年${age}岁了`;
}
console.log(getInfo1("小羊"), "--------默认值");
/**
 * 剩余参数
*/
function sum(...arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    });
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
function getInfo2(str) {
    if (typeof str === "string") {
        return `我的名字是${str}`;
    }
    else {
        return `我的年龄是${str}岁`;
    }
}
console.log(getInfo2("小羊"), "-----ts的重载");
console.log(getInfo2(11), "-----ts的重载");
