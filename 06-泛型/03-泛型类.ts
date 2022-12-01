/**
 * 泛型: 泛型可以帮助我们避免重复的代码以及对不特定数据的支持(类型校验),下面我们看看把类当成参数的泛型类
 *
 *
 * 1:定义一个类
 * 2:把类作为参数来约束数据传入的类型
 *
*/



/**
 * 定义一个user的类这个类的作用就是映射数据库字段然后定义一个 MysglDb的类这个类用于操作数据库然后把user类作为参数传入到MysglDb中
*/

// 类
// class User {
//     userName: string | undefined;
//     passWord: string | undefined;
// }

// class MysglDb {
//     add(user: User): boolean {
//         console.log(user);
//         return true
//     }
// }

// let u = new User()
// u.userName = "小羊"
// u.passWord = "123456"

// let db = new MysglDb()
// db.add(u)


// 使用泛型
class User {
    userName: string | undefined;
    passWord: string | undefined;
}

class MysglDb<T>{
    add(user: T): boolean {
        console.log(user);
        return true
    }
}

let u = new User()
u.userName = "小羊"
u.passWord = "123456"

// 如果不使用 就没有类型校验  可以传入任何数据

// 不使用
// let db = new MysglDb()
// db.add("!11")  // 打印 !11

// 使用  传入的参数 必须是 user类定义的规则
let db = new MysglDb<User>();
db.add(u)