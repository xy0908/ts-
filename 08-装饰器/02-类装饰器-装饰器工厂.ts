//装饰器工厂
function logClass1(params: string) {
    /**
     * 使用装饰器工厂
     *      需要 return 一个函数
     *      函数的参数 就是类
     *      参数.prototype.xxxx =xxxx 添加属性
     * */
    return function (t: any) {
        console.log(params);  // 传入的参数
        console.log(t);  // 类
        t.prototype.xxx = "xxx"
    }

}

@logClass1("dd")
class httpClient1 {
    constructor() { }

    getData() { }
}

// 实例化
let h1: any = new httpClient1()
console.log(h1.xxx);
