// Простчые типы

console.log("Hello world!!!");
var num, string, bull;
num = 23 +17;
string = ("Hello my string");
bull = (true);
myNull = (null);
myUndef = (undefined);
console.log(typeof num);
console.log(typeof string);
console.log(typeof bull);
console.log(typeof myNull);
console.log(typeof myUndef);

// Обьектные типы

var obj = {name: "sorax"},
masive = [1,2,3,4],
reg_exp = /w+ /g,
func = function(){};
console.log("-------------------------")
console.log(typeof obj);
console.log(typeof masive);
console.log(typeof reg_exp);
console.log(typeof func);

obj.name = "jingle bell";
masive[1] = 123;
console.log(masive);
console.log(string.toUpperCase());
console.log(string);
string = string.toUpperCase();
console.log(string);
var a, b, c, d;
a = b = c = d = 5;
console.log(a);


// Числа, урок 5
//десятичные
console.log(10);
console.log(123);
// шестнадцатиричные 0x
console.log(0xfffcc);
// восьмериные 0
console.log(0345);
// будет > 7 будет считать как десятичное
console.log(012378);
// с плавающей точкой
console.log(12.34);
console.log(.123);
// екпоненциальное выражение
console.log(10e4);
console.log(124e3);

var N = new Number(4000);
console.log(typeof N);
var n = 5000;
console.log(typeof n);
console.log(N.toFixed(2));

console.log(n.toFixed(2));
// чтобы метод в числовом литерали работал надо после числа оставить пробел.
console.log(3 .toFixed(2));
// Перевод в экспоненциальную форму
console.log(n.toExponential(4));
console.log(n.toPrecision(2));
 console.log("--------------");
// унарные операторы + - ++ --
var i = 10;
console.log(`i: ${i}`);
console.log(`++i: ${++i}` );
console.log(`i++: ${i ++}`);
console.log(`i: ${i}`);
// бинарные операторы
console.log(`4+3: ${4+3}`);
console.log(`4-3: ${4-3}`);
console.log(`4*3: ${4*3}`);
console.log(`4/3: ${10/3}`);
console.log(`10%3: ${10%3}`);
// операторы сравнения

console.log(5 < 10);
console.log(5 >10);
console.log(10 >=10);
console.log(8 <=10);
console.log(8 !== 8);
console.log(8 === 8);
console.log(8 == "8");
console.log(8 === "8");
// обьект Math для более сложных арифметических операций
console.log(Math.sqrt(9));
console.log(Math.pow(3,4));
console.log(Math.PI);
console.log(Math.E);
// нужно иметь в виду числа больше 15 нулей и десятичные нужно указывать сколько после запятой.
console.log(0.1 + 0.2);
console.log(10000000000000004 + 10000000000000005);
console.log((0.1 + 0.2).toFixed(4));









