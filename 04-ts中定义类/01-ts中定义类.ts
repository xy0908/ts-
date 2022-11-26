/*
es5中定义类
        function Preson(name){
            this.name =  name
        }

        let p = new Preson("小羊")
*/



// ts中定义类
class Person{
    name:string;  // 属性  前面省略了public关键字
    
    constructor(name:string){
        this.name = name
    }

    run():string{
        return `${this.name}在跑步`
    }
}

let p = new Person("小羊")

console.log(p.run());





// ts中 继承类  extends  super
class Person1 {
    name:string;

    constructor(name:string){
        this.name = name
    }

    run():string{
        return `${this.name}在跑步`
    }
}

// web类 继承 Person1类   使用extends和super
class Web extends Person1{
    constructor(name:string){
        super(name)
    }
}
let w = new Web("小茜");
console.log(w.run());





/**
 * 类的修饰符
 *      typescript里面定义属性的时候 给我们提供了三种修饰符
 *          public      共有类型  在类里面 子类 类外面 都可以访问
 *          protected   保护类型  在类里面 子类 都可以访问,但是 类外面就不可以访问  
 *          private     私有类型  在类里面可以访问,在子类和类外面都不能访问
 * 
 *      属性不写修饰符 默认为public
*/

// 使用 protected
class Case{
    protected name:string;
    
    constructor(name:string){
        this.name = name
    }

    case():void{
        console.log("测试代码");
    }
}

let c = new Case("测试")
