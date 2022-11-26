"use strict";
/**
 * 接口的作用
 *      在面向对象的编程中:接口是一种规范的定义,它定义了行为和动作的规范。
 *      在程序设计里面:接口起到了一种限制和规范的作用。
 *
 *          接口定义了某一些类所需要遵守的规范
 *          接口不关心这些类的内部状态数据,也不关心这些类里面方法的实现细节
 *          它只规定这批类里面必须提供某些方法,提供这些方法的类 就可以满足实际需求
 *
 *      typescript中的接口类似于Java
 *          同时还增加了更加灵活的接口类型,包括属性,函数,索引和类等
 *
 *
 *      typescript中的接口
 *          属性接口
 *          函数类型接口
 *          可索引接口
 *          类类型接口
 *          接口扩展
 *
 */
console.log("----------------------------属性接口");
function myInfo(infoObj) {
    console.log(`我的姓名是${infoObj.name},${infoObj.sex},今年${infoObj.age}岁了`);
}
myInfo({
    name: "小羊",
    age: 11,
    sex: "男",
    // like:"睡觉"  会报错
});
let obj = {
    name: "小羊",
    age: 11,
    sex: "男",
    like: "睡觉", // 不会报错
};
myInfo(obj);
console.log("-------------------------------接口可选属性");
function myInfo1(infoObj) {
    console.log(infoObj);
}
let obj1 = {
    name: "小羊",
};
myInfo1(obj1);
