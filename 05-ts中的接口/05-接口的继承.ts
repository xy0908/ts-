// 接口的继承

// 动物的接口  有一个吃的方法
interface Animal {
    eat():void;
}

// 人的接口 继承动物的接口
interface Person extends Animal {
    work():void;
}


//使用接口
class Web implements Person{
    name: string;
    constructor(name:string){
        this.name = name
    }
    eat(): void {
        console.log("吃饭");
    }
    work(): void {
        console.log("工作");
    }
}

let w = new Web("小羊")
w.eat()
w.work()



console.log("------------------------组合");
// 组合

interface a {
    infoA():void;
}

interface b {
    infoB():void
}


//  c是一个类   它继承了web这个类   自身使用了b这个接口 
class c extends Web implements b {
    constructor(name:string){
        super(name)
    }
    infoB(): void {
     console.log("b的接口");
        
    }
}

let cc = new c("小羊")

cc.infoB()
cc.eat()