"use strict";
// 泛型接口
let getName = function (value) {
    return value;
};
console.log(getName("小羊"));
console.log("--------------泛型接口");
let getName1 = function (value) {
    return value;
};
console.log(getName1("小羊") + "泛型接口1");
function getData(value) {
    return value;
}
let getMyName = getData;
console.log(getMyName("小羊泛型接口2"));
