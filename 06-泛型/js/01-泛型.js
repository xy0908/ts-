"use strict";
/**
 * 泛型:
 *  软件工程中,我们不仅要创建一致的定义良好的api,同时也要考虑可重用性。组件不仅能够支持当前的数据类型,同时也能支持未来的数据类型,这在创建大型系统时为你提供了十分灵活的功能
 *
 *
 *
 * 通俗理解:泛型就是解决 类 接口 方法的复用性以及不特定数据类型的支持
 *
 *
 *
 * typescript中的泛型
 *  泛型的定义
 *  泛型函数
 *  泛型类
 *  泛型接口
 * */
// function getData1(value:string):string{
//     return "11"
// }
// function getData2(value:number):number{
//     return 11
// }
// 这样就没意义了
// function getData2(value:any):any{
//     return 11
// }
// 使用泛型  <T>表示泛型 函数调用的时候 传入的数据是什么类型 他就是什么类型
function getData2(value) {
    return value;
}
// 调用函数
console.log(getData2(11));
console.log(getData2("asda"));
// 泛型类: 比如现在有一个最小堆算法,需要同时支持返回数字和字符串俩种类型数据   通过类的泛型实现
class MinClass {
    constructor() {
        this.list = [];
    }
    add(value) {
        this.list.push(value);
    }
    min() {
        let minNum = this.list[0];
        this.list.forEach(item => {
            if (minNum > item) {
                minNum = item;
            }
        });
        return minNum;
    }
    max() {
        let maxNum = this.list[0];
        this.list.forEach(item => {
            if (maxNum < item) {
                maxNum = item;
            }
        });
        return maxNum;
    }
}
let m = new MinClass();
m.add(23);
m.add(34);
m.add(22);
m.add(654);
m.add(21);
m.add(54);
m.add(4);
m.add(5);
console.log(m.list);
console.log("最大的数字是", m.max());
console.log("最小的数字是", m.min());
let m1 = new MinClass();
m1.add("23");
m1.add("34");
m1.add("1");
console.log(m1.list);
console.log("最大的数字是", m1.max());
console.log("最小的数字是", m1.min());
