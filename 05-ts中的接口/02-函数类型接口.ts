// 函数类型接口:对方法进行的参数  以及返回值进行约束

interface name {
    (id:number):string
}

let fun:name = function(id:number){
    return "小羊"
}

fun(1)