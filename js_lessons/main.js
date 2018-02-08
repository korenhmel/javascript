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

   // Условные инструкции lesson 10.

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

// Условный оператор lesson 11.
// Синтаксис условного оператора
// выражение1 ? выражение2 : выражение3
var x = 10;
var text = x>10 ? "x more than ten" : x< 10 ? "x less than 10" : "x equal ten";
console.log(text);
// this expression would work the same as the previous.

console.log("-------------");
   if (x >10){
	x = "x more than ten";
	} else if (x <10){
	 x =	"x less than ten";
	}   else {
	 x = "x equal ten";
	}
	console.log(x);
   // expression, expression
   var test = (15,20);
   console.log((test, "Hello"));
// Loops lesson 12.
// for (expression; test; инкремент;) тело цикла
 var i;
 // for (i=0; i < 10; i++){
 // 	console.log(i);
 // }
// можно из выражения выкинуть i>0 так как при x = o цикл остановиться
// for (i= 10; i > 0; i--){
//  	console.log(i);
//  }
// console.log("-------------------");
// for (i= 10; i--;){
//  	console.log(i);
//  }
//  console.log("-------------------");

// while (expression) instruction
// var i = 0;
// while(i < 10) {
// 	console.log(i++);
// }
 console.log("-------------------");
// do инструкция while выражения
var i = 0;
do console.log(i++); while (i<10)

//Functions, lesson 13
console.log("-------------------");
//function identificator(arguments){
// instructions	
//}
function greet(name){
	return "Hello " + name;
}
console.log(greet("Sorax").toUpperCase());
//анонимная функция
var other = function(name){
	return "hello " + name;
};
console.log(other("koren"));
// Функция с множественными аргументами
var other2 = function(name){
	console.log(arguments[2]);
	return "hello " + name;
};
console.log(other2("koren!!",34, 45, 56));
// передача функции которая выполняется после выполняния функции, в которую она передается.
//callback
var func = function(callback){
	var name = "Stepan";
callback(name);
};
	
	func(function(n){
	console.log("Hello "+ n);
	});
// Функция может быть возвращаемым значением
 var func = function(){
   return function() {
   	console.log("hi");
   }
 };	
func()();

// функция может быть вызвана сразу после определения если мы используем выражение определение.
// Анонимная самовызывающаяся функция.
var greeting = (function(name){
	return "Hello " + name;
	// присвоили результат переменной
}("Amitabhi"));

console.log(greeting);

// Область видимости lesson 14
console.log("-----------------")
// Переменные глобальные и локальные
// Глобальные являются все переменные вне функций
var i = 5;

// Переменные внутри функций являются локальными
var func = function() {
	var i = 10;
	console.log(i);
}
 func();
 console.log("-----------------")
 // Вложенные функции с переменными создают цепочки областей видимости
 // Первая область видимости в цепочке вложенной функции innerFunc для содержащегося в ней 
 // console.log является переменная i = 15, вторая переменная будет браться с внешней функции выше, если нет 
 // переменной во внутренней функции innerFunc.
 // в локальных переменных обьявляя переменную должны писать var при обьявлении иначе это изменит
 // переменную в слудующей области видимости в цепочке.
 var func2 = function() {
	var i = 10;
	console.log(i);
	var innerFunc = function() {
	 var i = 15;
		console.log(i);
	};
	innerFunc();
};
 func2();
// в яваскрипте лучше обьявлять переменные в начале функции так как это лучше подходит
// к сути происходящего.

// Замыкания lesson 15
console.log("--------------------")
// при выполнении функций в языке javascript используется та область видимости переменных
// которая существовала при обьявлении этой функции, это называется лексической областью видимости.

var func = function(){
	i = 10;
	return function(){
		return i;
	}
};

// var myFunc = func();
var anotherFunc = function() {
	i = 20;
	console.log(func()());
};
// из за лексической области видимости выводится переменная присвоенная на 400 строчке а не на 407 строчке.
anotherFunc();

var func = function(){
	i = 10;
	return function(){
		return i;
	}
};
 var myFunc = func();
   var anotherFunc2 = function() {
	i = 20;
	console.log(myFunc());
};
// в этом примере по каким то причинам в области видимости видим вторую переменную i = 20 хотя у автора
// другой результат
anotherFunc2();

// C каждой функцией связана цепочка областей видимости переменных и функция вместе с этой цепочкой
// называется замыканием поетому каждую функцию можно назвать замыканием.

// Когда интерпритатор выполняет какую либо функцию например func, он создает обьект который будет 
// содержать все локальные функции. В частности нашу переменную i. и любые функции которые мы 
// определяем например в func например наша возвращаемая функция return function(){return i;} сохраняют 
// ссылку на этот обьект с локальными  переменными. И этот обьект существует только в том случае если 
// есть функции на которые он ссылается. Если бы в этой функции (func) не было никаких вложенных функций
// то у нас не было бы никакого способа получить доступ к этой переменной "i" и у интерпритатора не было
// бы никакого повода чтобы хранить эту переменную после выполнения функции и поетому обьект содержащий эту
// переменную был бы уничтожен сразу после выполнения функции.

// Пример к сказанному, напишем простой счетчик.
// Замыкание удобно создавать при помощи анонимных замовызывающихся функций
console.log("------------------");
  var counter = function(){
   var count = 0;
   return function(){
    return count ++;
   }
  }();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
// Мы создали функцию которая не принимает никаких аргументов и при этом возвращает разные значения при
// вызовах один за другим.
// замыкание позволяет нам создавать что то вроде инкапсуляции данных.
// в нашем примере мы можем получить или изменить переменную "count" только при помощи вложенных функций.
// по етому переменную count можно условно считать приватной.
console.log("----------------");
// Улушим предыдущий пример добавив возможность изменения счетчика.
 var counter = function(){
   var count = 0;
   return function(num){
   	count = num !== undefined ? num : count;
    return count ++;
   }
  }();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());
console.log("----------------")
// Замыкание это не единственный способ чтобы добиться такого поведения.
// по скольку функция является обьектом мы можем добавить count как свойство обьекта counter.
// и внутри функции можем изменять это свойство.
var counter2 = function(num){
	counter2.count = num !== undefined ? num : counter2.count
return counter2.count++;
};
counter2.count = 0;

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2(400));
console.log(counter2());
console.log(counter2());

