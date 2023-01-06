/**
 * 装饰器:是一种特殊的类型声明,它能够被附加到类声明、方法、属性或者参数上,可以修改类的行为
 *
 *
 * 通俗的讲装饰器就是一个方法,可以注入到类、方法、属性参数上来扩展类、属性、参数的功能
 *
 *
 * 常见的装饰器:
 *      类装饰器
 *      属性装饰器
 *      方法装饰器
 *      参数装饰器
 * 
 * 
 * 普通装饰器(无法传参)   
 * 装饰器工厂(可以传参)     
 * 
 * 
 * 装饰器是过去几年js中最大的成就之一,已经是es7的标准特性之一
*/



// 1.类装饰器: 类装饰器在类声明之前被声明 (紧靠着类声明)。 类装饰器应用于构造函数，可以用来监听、修改或者替换类定义。 传入一个参数

function logClass(params: any) {
    console.log(params); // params 就是当前类  就是 HttpClient

    //添加属性
    params.prototype.apiUrl = "xxxxxx"  // 动态扩展的属性

    //添加方法
    params.prototype.run = function () {
        console.log("我run了");
    }
}

@logClass
class HttpClient {
    constructor() {
    }
    getData() {
    }
}

// 实例化
let h: any = new HttpClient()

console.log(h.apiUrl);

h.run()