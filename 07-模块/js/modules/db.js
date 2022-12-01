"use strict";
// 导出的第一种方式
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyNameInfo = exports.fun2 = exports.fun1 = exports.url = void 0;
// 在需要导出的变量 函数 类 接口等 前面添加一个 export
exports.url = "xxxxxxxx";
//导出的第二种方式 
// 使用 export {} 导出  把需要导出的内容写进export{}里面
function fun1() {
    console.log("我是方法1");
}
exports.fun1 = fun1;
function fun2() {
    console.log("我是方法2");
}
exports.fun2 = fun2;
function getMyNameInfo() {
    console.log("得到我的姓名信息");
}
exports.getMyNameInfo = getMyNameInfo;
