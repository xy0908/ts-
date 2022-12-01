// 泛型接口


// 前面是学习了函数接口
interface configFu {
    (value: string): string;
}

let getName: configFu = function (value: string) {
    return value
}
console.log(getName("小羊"));




console.log("--------------泛型接口");
// 使用泛型接口
interface configFu1 {
    <T>(value: T): T
}
let getName1: configFu1 = function <T>(value: T): T {
    return value
}
console.log(getName1<string>("小羊") + "泛型接口1");



// 泛型接口2
interface configFu2<T> {
    (value: T): T
}

function getData<T>(value: T): T {
    return value
}

let getMyName: configFu2<string> = getData

console.log(getMyName("小羊泛型接口2"));
