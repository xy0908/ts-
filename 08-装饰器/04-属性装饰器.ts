/**
 * 属性装饰器:
 *      属性装饰器表达式会在运行时当作函数被调用  传入下列2个参数
 *          1:对于静态成员来说是类的构造函数,对于实例成员是类的原型对象
 *          2:成员的名字
*/


// a 命名空间
namespace a {
    //类的装饰器
    function logClass(params: string) {
        return function (t: any) {
        }
    }
    //属性装饰器
    function logProperty(params: string) {
        // return一个方法  接受俩个参数 
        return function (a: any, b: any) {
            console.log(a, "----a是原型对象");
            console.log(b, "----b是成员名字");
            // 修改
            //a.b = params //修改失败
            a[b] = params //修改成功

        }
    }

    @logClass("类的装饰器")
    class httpClient {
        // 使用属性装饰器  传参
        @logProperty("https://fanyi.baidu.com/#en/zh/")
        public url: string | undefined;
        constructor() { }
        getData(): void {
            console.log(this.url);
        }
    }

    // 实例化
    let h: any = new httpClient()
    h.getData()
}