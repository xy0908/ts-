// 类类型的接口: 对类的约束 

// 动物的接口
interface Animal {
    name:string;
    eat(str:string):void
}


class Dog implements Animal {
    name: string;

    constructor(name:string){
        this.name = name
    }

    eat(str: string): void {
        console.log(this.name+"在吃狗粮");
        
    }
}

let d = new Dog("小黑")

d.eat("小黑")


//  语法: class 类名 implements 接口