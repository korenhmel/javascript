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
console.log(  obj);
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

// строки строковые литералы  урок 6.

console.log("some string");
console.log('another string');
console.log('hello world!'.length);
// перенос строки
console.log("hello world \nworld is butiful");
console.log("the world \"is on fire\" ");

var string = "Sometimes the same is different";
console.log(string.charAt(0));
console.log(string.substring(10));
console.log(string.substring(10,18));
console.log(string.substr(10,8));
console.log(string.slice(-9));
console.log(string.indexOf("di"));
console.log(string.indexOf("mes"));
console.log(string.lastIndexOf("m"));
console.log(string);
string = string.replace("is", "is no");
console.log(string);
console.log(string.split(" "));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string[10]);
// Логические значения урок 7.
console.log(5===5);
console.log(5===6);
// Выполняется значение 'false'
// console.log(Boolean(udefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
var s = "text";
if (s) {
	console.log("It's true");
}
 console.log("-------------------------");

console.log(`true && false: ${true && false}`);
console.log(`true && true: ${true && true}`);

console.log(`true || false: ${true || false}`);
console.log(`false || false: ${false || false}`);
console.log(`!true: ${!true}` );
console.log(`!false: ${!false}`);

var a = 0,
isTrue = true;
isTrue && (a=5);
console.log(a);

var someString = "Non-empty string";
var newString = someString || "Default String";
console.log(newString);
// Null and undefined lesson 8.
// Null and undefined - Отсутствие значений.

console.log(typeof null);
console.log(typeof undefined);

// Значение undefined
 // не инициилизированная переменная
 var temp;
 console.log(temp);
 // не существующее свойство обьекта
 var obj = {};
 console.log(obj.property);
 //не сущесвующий обьект массива
 arr = [1, 2, 3, 4];
 console.log(arr[4]);
 //не передали параметров в функцию
 function greet(name) {
 	return "hello " + name;
 }
console.log(greet("Koren!!!"));
console.log(greet());
// равны по значению, не равны по типу.
console.log(null == undefined);
console.log(null === undefined);
console.log("-------------------------------");
// Преобразование типов lesson 9.
console.log(5 + "5");
console.log("5" * "4");
console.log("5" * "hi");
// Явные преобразования
console.log(Number("565"));
console.log(String(2347));
console.log(typeof String(2347));
console.log(Boolean(4));
console.log(typeof (Boolean(4)));
 // преобразование числа в булево значение
 console.log(!!6);
 console.log(!!0);
 // преобразование в строку
 console.log(typeof (234 + ""));
 // преобразование в число
 console.log(typeof (+"345"));

 var number = 3457876
 console.log(typeof number.toString());
 // перевод в шестнадцатеричное значение
 console.log(number.toString(16));
// перевод значения лог оператора в строку
 console.log(typeof false.toString());
console.log(parseInt("45 px", 10));
console.log(parseFloat("45.34 px"));

 console.log(typeof String(Infinity));
 console.log(typeof String(NaN));
 console.log(+"");
//вернут при преобразовании в логическое вернут false
 console.log(!!"");
 console.log(!!NaN);
 console.log(!!0);
 console.log(!! null);
 console.log(!!undefined);
// вернут true
  console.log(!!"hi");
  console.log(+"   4");
  console.log(parseInt("4  px"));
  console.log(+ true);
  console.log(+ false);

   var n = 5;
  console.log(n.value);
  n = 0;
   console.log(n.value);

   // Условные инструкции

   if (true) console.log("It's true");
   	if (false) console.log("it's true");
   	
   
    var a = 10
    if (a>3){
    	a*=3;
    	console.log(a); 
    }

   	if (a<3){
   		console.log(a);
   		console.log("hello!!");
   	} else console.log("a is not less than 3");

   	var name = "Sorax", homecity;
   	
   	if (name === "John" ){
   		homecity = "Boston";
   	} else if (name === "Sorax"){
   		homecity = "Belgorod";
   	} else if (name === "Bill"){
   		homecity = "LA";
   	} 
    console.log(homecity);
  var nick = "Bill";
  switch(nick){
  	case "John": homecity = "Boston";break
  	case "nicksorax": homecity = "Baltemore";break
  	case "Bill" : homecity = "LA";break
  	default: homecity = "Moskow";
  }

console.log(homecity);













