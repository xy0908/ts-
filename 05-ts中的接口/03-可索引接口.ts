// 可索引接口:对数组 对象的约束 (不常用)



// 对数组的约束
interface UserArr {
    [index:number]:boolean
}

let arr:UserArr = [true,false]

console.log(arr);



// 对对象的约束
interface UserObj {
    [index:string]:string
}
let obj11:UserObj = {
    name:"小羊"
}
console.log(obj11);


// 接口中的 [index:number]的时候 是对数组的约束
//          [index:string]的时候 是对对象的约束