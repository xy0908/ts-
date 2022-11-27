// 类类型的接口: 对类的约束 

// 动物的接口
interface Animal {
    name:string;
    eat():void
}


class Dog implements Animal {
    name: string;

    constructor(name:string){
        this.name = name
    }

    eat(): void {
        console.log(this.name+"在吃狗粮");
        
    }
}

let d = new Dog("小黑")

d.eat()


//  语法: class 类名 implements 接口