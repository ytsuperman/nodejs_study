let flog = console.log;
//1对象简易写法
let name1 = "yit1";
let map1 = {
  name1,
  age1: 1
};
console.log(map1);


//2对象里面可以有函数
function say2 () {
  console.log("说话");
}
let name2 = "yit1";
let map2 = {
  name2,
  age2: 1,
  say2,
};
console.log(map2);
console.log(map2.say2);
map2.say2();


//1箭头函数里面的this始终指向函数声明时所在的作用域,2call可以改变this的作用域
let test_noarrow = function () {
  flog(this);
  flog(this.name3);
}
let test_arrow = () => {
  flog(this.name3);
}
test_noarrow();
let school = {
  name3: "yit1"
}
test_noarrow.call(school);
test_arrow.call(school);








//arguments参数和rest参数
function test5 (a, b) {
  console.log(arguments);
}
test5(3, 5, 6);

function test6 (a, b, ...arg) {
  flog(a);
  flog(b);
  flog(arg);

}

test6(1, 2, 3, 4, 45, 5);


//for of和itrate
let str = "123456";
for (const iterator of str)
{
  flog(iterator);
}

let xiyou = ["tangseng", "sunwkong", "zhubajie", "shasen"];
flog(xiyou[Symbol.iterator]);

//map的遍历
let map7 = {
  name: "yit1",
  age: "1",
  gender: "male"
}
Object.keys(map7).forEach(
  key => {
    flog(key, map7[key])
  }
);



//生成器
function* gen () {
  console.log("hello genrator");
  console.log("111")
  yield "一直没有尾巴";
  console.log("222")
  yield "一只没有耳朵";
  console.log("333")
  yield "真奇怪";

}
let iterator = gen();
iterator.next();
iterator.next();




//提取正则
let str_11 = '<a href="hhtp://www.baidu.com">shanguigu</a>';
const regex_11 = /<a href="(.*)">(.*)<\/a>/;
let res = regex_11.exec(str_11);
console.log(res)
