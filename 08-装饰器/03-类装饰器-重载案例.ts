/**
 * 使用类装饰器 重载构造函数
 * 
 *      类装饰器表达式会在运行时当作函数被调用,类的构造函数作为其唯一的参数
 *      如果类装饰器返回一个值,它会使用提供的构造函数来替换类的声明
 * */

// 重载 类的构造函数

function logHttp(params: any) {
    /**
     * params 类
     * 重载 httpC的构造函数
     * 返回 一个类 
     * 返回的类 继承 接受的类
    */
    return class extends params {
        httpUrl = "我是修改后的网站----"

        getData() {
            console.log(this.httpUrl + "------------getData方式修改后的");
        }

    }

}

@logHttp  //使用装饰器
// 类
class httpC {
    public httpUrl: string | undefined;
    constructor() {
        this.httpUrl = "修改前的网站xxxx"
    }
    getData() {
        console.log(this.httpUrl + "------------getData方式");
    }
}

// 实例化
let h2 = new httpC()
console.log(h2.httpUrl);
h2.getData()