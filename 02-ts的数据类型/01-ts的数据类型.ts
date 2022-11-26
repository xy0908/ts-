/**
 * ts的数据类型
 *      布尔类型 (boolean)
 *      数值类型 (number)
 *      字符串类型 (string)
 *      数组类型 (array)
 *      元组类型 (tuple)
 *      枚举类型 (enum)
 *      任意类型 (any)
 *      null 和 undefined
 *      void类型
 *      never类型 
*/


// 布尔
let bol:boolean = true
console.log(bol);


// 数值
let num:number = 11
console.log(num);


// 字符串
let str:string = "hello ts"
console.log(str);


// 数组   ts定义数组有俩个方式

// 第一种方式:
let numArr:number[] = [1,2,3,4,5];
console.log(numArr);

let strArr:string[] = ["js","html"]
console.log(strArr);

// 第二种方式
let bolArr:Array<boolean> = [true,false]
console.log(bolArr);



// 元组类型 tuple   属于数组的一种
let t:[number,string] = [1,"2"]
console.log(t);
console.log(t[0]);


/**
 * 枚举类型 (enum)
 *      随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据例如:性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。在其它程序设计语言中，一般用一
 *      数值来代表某一状态，这种处理方法不直观，易读性差。如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。也就是说，事先考虑到某一变量可能取的值，
 *      量用自然语言中含义清楚的单词来表示它的每一个值，这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
 *      
 *      enum 枚举名{
 *          标识符[=整型常数]
 *          标识符[=整型常数]，
 *          标识符[=整型常数].
 *      }
*/

enum sex {
    male=1,
    female=0
}

let s:sex = sex.female
console.log(s);

enum Color {
    red,
    blue=4,
    yellow
}
let c:Color = Color.red
console.log(c);   //  没有值的话  默认是索引值

let cc:Color = Color.yellow
console.log(cc);  //  因为blue是4  所以yellow是5





// any 任意类型
let anyData:any = 1;
anyData = "11"
console.log(anyData);




//  null 和 undefined   是 其他类型(never)的子类型
let u:undefined
console.log(u);

let n:null=null
console.log(n);

let lianhe:null | undefined | number = 1  // 联合类型  可以是null | undefined | number




// void  空类型    ts中的void表示没有任何类型,一般用于定义方法的时候没有返回值
function fun():void {
    console.log("没有返回值");
}

let arr = ():void=>{
    console.log("asd");
}





// 其他类型 never   包含null和undefined的子类型     代表从来不会出现的类型