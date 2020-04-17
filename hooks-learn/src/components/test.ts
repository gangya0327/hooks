const age: number = 20; // 'xxx: number' 表示声明一个number类型

// 声明一个接口
interface IPerson {
  name: string; // IPerson需要包含一个name属性，类型是string
  age: number; // IPerson需要包含一个age属性，类型是number
  family: string[]; // IPerson需要包含一个family属性，类型是数组，数组里面都是string类型的数据
  sex?: "男" | "女"; // IPerson可选一个sex属性，值为'男'或者'女'或者undefined
}

// 使用IPerson接口定义一个对象，如果对象不符合IPerson的定义，编译器会飘红报错
const person: IPerson = {
  name: "小王",
  age: 12,
  family: ["爹", "娘"],
  sex: "女"
};

// type类似interface，以下写法等同用interface声明IPerson
type IPerson2 = {
  name: string;
  age: number;
  family: string[];
  sex?: "男" | "女";
};
// 因此可以直接定义过来
const person2: IPerson2 = person;

interface Person {
  name: string;
  age?: number;
}

let p1: Person = { name: "小明" }; // 正确
// let p2: Person = { name: "小明", age: 18, sex: "男" }; // 报错

// 绕过：多余属性不报错
// 方式1
let p = { name: "小明", age: 18, sex: "男" };
let p3 = p;
// 方式2
interface Preson {
  name: string;
  age?: number;
  [propName: string]: any;
}
let p4 = { name: "小明", age: 18, sex: "男" };

/**
 * 这里是一段说明文字，你看得到吗
 */
function showMessage() {
  console.log("hello");
}

showMessage();
