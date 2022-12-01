/**
 * 命名空间:
 *      在代码量比较大的情况下,为了避免各种变量命名相冲突,可以将相似功能的接口、函数、类等放置到命名空间内
 * 
 * 
 * 
 * 
 * 命名空间和模块的区别:
 *      命名空间:内部模块,主要用于组织代码,避免命名冲突
 *      模块:ts的外部模块的简称,侧重代码的复用,一个模块里可能会有多个命名空间
 * 
 * 
 * 语法:
 *  namespace 命名空间名称 {
 *      代码
 * }
*/


// 在命名空间里的变量、函数、接口等 也需要暴露出去
namespace a {
    export let str: string = "a";
    export interface person {
        name: string;
        age: number;
        sex: string;
        like: string;
    }
}

namespace b {
    let str: string = "b";
    export interface person {
        name: string;
        age: number;
        sex: string;
        like: string;
    }

}


// 使用 a 命名空间接口
function getPerson(info: a.person): void {
    console.log(`您的姓名是${info.name},${info.sex},今年${info.age}岁,喜欢${info.like}`);

}
getPerson({
    name: "小羊",
    age: 11,
    sex: "男",
    like: "睡觉"
})