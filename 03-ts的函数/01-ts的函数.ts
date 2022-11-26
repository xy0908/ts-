/**
 *  ts中的函数
 */

// 函数声明  指定返回的类型
function fun1(): number {
  return 11;
}
// 匿名函数
let fun2 = function (): string {
  return "函数2";
};
// 箭头函数
let fun3 = (): string => {
  return "箭头函数3";
};

// 函数 传参
function fun4(name: string, age: number): string {
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
function getInfo(name: string, age?: number): string {
  if (age) {
    return `您的姓名是${name},今年${age}岁了`;
  } else {
    return `您的姓名是${name},年龄未知`;
  }
}
console.log(getInfo("小羊", 11));
console.log(getInfo("小茜",));




/**
 *  配置默认参数
 *      es5是没有默认参数的
 *      但是 es6 和 ts是有的
*/
function getInfo1(name: string, age: number=11): string {
      return `您的姓名是${name},今年${age}岁了`;
  }
  console.log(getInfo1("小羊"),"--------默认值");



/**
 * 剩余参数
*/
function sum(...arr:Array<number>):number{
    let sum = 0
    arr.forEach(item=>{
        sum+=item
    })
    return sum
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));





/**
 * ts的函数重载
 *      函数重载在 java 中是指: 俩个或者俩个以上同名的函数,但是他们的参数不一样,这时候就会出现重载的现象
 *      ts中的重载是指: 通过为同一个函数提供多个函数类型定义来实现多种功能的目的
 *      
 *      ts为了兼容es5和es6 重载的写法跟Java有区别
 * 
*/
function getInfo2(name:string):string;
function getInfo2(age:number):string;
function getInfo2(str:unknown):string{
    if(typeof str === "string"){
        return `我的名字是${str}`
    }else{
         return `我的年龄是${str}岁`
    }
}
console.log(getInfo2("小羊"),"-----ts的重载");
console.log(getInfo2(11),"-----ts的重载");
