// 导出的第一种方式

// 在需要导出的变量 函数 类 接口等 前面添加一个 export
export let url = "xxxxxxxx";


//导出的第二种方式 
// 使用 export {} 导出  把需要导出的内容写进export{}里面
function fun1(): void {
    console.log("我是方法1");
}
function fun2(): void {
    console.log("我是方法2");
}

function getMyNameInfo() {
    console.log("得到我的姓名信息");
}
export {
    fun1, fun2, getMyNameInfo
}