console.log(Math.min(3,6,8)+100);

// управление порядком выполнения программы page53.
// var theNumber = Number(prompt("Vuberi chislo", ""));
// alert("chislo javlaetsja kvadratnum kornem chisla"+ theNumber*theNumber);

// var theNumber = Number(prompt("Vuberi chislo", ""));
// isNaN - стандартная функция JavaScript которая возвращает true только если ее аргумент NaN не число.
// if(!isNaN(theNumber))
// alert("Tvoe chislo eto kvadratnui koren is "+ theNumber*theNumber);
// else
// alert("Vvoditsja dolgnu tolko chisla!!!");

// ispolzovanie neskolkih par  if/else po cepochke

// var  num = Number(prompt("vvedite chislo", ""));
// if (num < 10)
//    alert("vashe chislo dolgno but bolshe 10");
// else if (num < 100)
// 	alert("vashe chislo cootvetstvuet trebuemu chislu");
// else  
//    alert("vashe chislo vuhodit za ramki trebuemogo chisla");


// циклы while и do

var num = 0;
while(num <= 12){
	console.log(num);
	num +=2;
}
console.log("---------------------");
// моя програмка возведение любого числа в степень
var counter = 1;
var num = 2;
var stepen = 10;
// можно сделать сделать клон независимой переменной при помощи метода slice()
var numNew = String(num).slice();
while(counter < stepen){	
  counter +=1;
  num*= numNew;
}
console.log(Number(num));
console.log("---------------------");
// возведение числа 2 степень из книги
var result = 1;
var counter = 0;
while(counter < 5){
	result*= 2;
    counter+=1;
}
console.log(result);

// пример цикла do

// do{
// 	var name = prompt("who you are?");
// } while(!name);
// console.log(name);

// цикл for делает примерно тоже самое что и while, но инструкции сгруппированы в строчку.
for(var number = 0; number <=12; number += 2)
	console.log(number);
// вычислим 2^10 при помощи for
result = 1;
for(var counter =1; counter <=4; counter+=1)
	result *= 2;
console.log(result);
// цикл for это бесконечный цикл который не остановится сам по себе.
// если условие не выполнится он не прекратиться.
// для остановки используется метод break.
for(var current = 31; ; current+=1){
	if(current % 6 == 0)
	break;
}
console.log(current);

/*
этот город самый лучший
город на земле
он как будто нарисован
мелом на стене
*/
//упражнение для закрепления материала стр 70.
// треугольник из #######

for(var triangle = ""; ; triangle = triangle + "#"){
if(triangle.length == 8)
	break;
 console.log(triangle);
}
// написать програмку которая перебирает числа от 1 до 100
// и если число делиться без остатка на 3 выводит в строке 'Fiz'
// а если число делиться на 5 без остатка выводит 'Buzz'
console.log("---------------------");
// var number = 0;
// while(number <=100){
// 	number+= 1;
// 	 if( number %5 == 0 && number % 3 == 0 )
//     	console.log(`FizBuzz: ${number}`)
//     	else if (number % 3 == 0)
// 		console.log(`Fizz: ${number}`);
//       else if( number %5 == 0)
//     	console.log(`Buzz: ${number}`)
// }

 var hor = 10;
 var vert = 11;
 var doska = "# ";
 var vertDoska = 0;
 while(doska.length/2+1 <= hor){
 doska += "# ";
 }
 while(vertDoska < hor){
 vertDoska +=1;
 }
  var i = 0;
 while(i < vert){
 	if((i+2)%2 == 0)
      console.log(i + " " + doska);
    else
      console.log(i + "  " + doska);	
    i+=1;
   
}

console.log("------------Function-----------");
// Функции
// функция начинается с ключевого слова function где значение принимает обычная переменная.
var square = function(x){
 return	x*x;
}
console.log(square(12));
// функции могут быть без аргументов и с аргументами один и больше.
// без аргументов
var func = function(){
	console.log("hrjass!!");
}

func();

// с двумя аргументами. возведения числа в степень

var power = function(base, exponent){
result = 1;
for(var count = 0; count < exponent; count++)
result*= base;
// инструкция return определяет значение возвращаемое функцией.
// когда обработка программы доходит до этой инструкции, она сразу же
// выходит из функции и возвращает значение.
return result;
}
console.log(power(2, 10));
// Области видимости
// примеры иллюстрирующие работу переменных внутри и снаружи функции

var greet2 = "hello!!";

var func = function(){
 var greet2 = "hello koren";
}

func();
console.log(greet2);
// "hello!!"

var func2 = function(){
	greet = "hello inside func 2";
}
func2();
console.log(greet);

// Вложенные области видимости
// функции можно задавать внутри фукций что приводит к нескольким уровням локальности.
// Пример вложеннсти фукций.
/* функции flat и mountain видят переменную result, потому что они находяться
внутри функции, в которой она определена.Но они не видят переменной count друг
друга потому что они находятся вне области видимости другой.*/

var landscape = function(){
	 var result = "";
	flat = function(size){
		for(var count= 0; count <= size; count++)
			result+= "_";

	};
	var mountain = function(size){
	 result+="/"
	 for(var count= 0; count<= size; count++)
	 	result += "'";
	    result += "\\";
	}
	flat(3);
	mountain(2);
	flat(1);
	mountain(4);
	flat(5);
	return result;
}

console.log(landscape());
// Обьявление функций
// как мы видим обьявление функции было ниже вызова
// однако функция работает.

console.log("The future says: ", future());
function future(){
	return "we still have no flying cars";
}
// инструкция обьявляет переменную grat и присваевает 
// ей значение функции.
// место из которого была вызвана функция называется стэком.

function grat(who) {
 console.log('privet'+ who);
}
grat("Semen");
console.log("Pokeda!!");

// нельзя помещать обьявление функции внутри блока или цикла 
// function example(){
// 	function a() {}; //так нормально
// }

// if something{
// 	function b {}; //Ай -яй -яй, так делать нельзя 
// }

// Функции
// Необьявленные аргументы

//официально такая функция выполняется с одним аргументом
// однако это работает, яваскрипт очень лоялен по поводу кол-ва аргументов
// передаваемых в функции.
// минус этого подхода - можно передать неправильное кол-во аргументов.
// плюс в том что можно создавать функции принимающие необязательные 
// аргументы
// alert("zdraste", "dobrui vecher", "vsem privet");
function power2(base, exponent){
	if (exponent == undefined)
		exponent = 2;
	var result = 1;
	for (var count = 0; count < exponent; count ++)
		result*= base;
	return result;
}

console.log(power2(4));
console.log(power2(4, 3))
console.log("----------------")
// Функции
// Замыкания
/* Возможность использовать вызовы функций как переменные в купе с тем фактом
что каждый раз при вызове функции локальные переменные создаются заново приводит
нас к вопросу, что происходит с локальной переменной когда функция перестает ра
ботать?
 Следующий пример иллюстрирует этот вопрос. В нем обьявляется функция wrapValue,
 которая создает локальную переменную. Затем она возвращает функцию которая читает
 локальную переменную и возвращает ее значение. Доступ к переменной остается
 Более того несколько экземпляров локальной переменной могут существовать в одно
 и тоже время что еще раз подтверждает то факт что с каждым вызовом функции локальные
 переменные пересоздаются.*/
// Возможность работать со ссылкой на какой то экземпляр локальной переменной
// называется замыканием
// Функция замыкающая локалные переменные называется замыкающей.
// Примеры
function wrapValue(n){
	var localVar = n;
	return function() {return localVar;};
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
console.log("------------------------")
//Функции
// Рекурсия
// Функция может вызывать сама себя, такая функция называется рекурсивной.
// пример
function power3(base, exponent) {
	if(exponent == 0)
	return 1;
else
	return base * power3(base, exponent-1);
}
// в такой реализации есть проблема в том что он в 10 раз медленнее цикла.
console.log(power3(3,3));
// рекурсия не всегда является более медленной альтернативаой цикла
// задачи которые обходят несколько веток дерева каждая из которых может
// ветвиться лучше решать рекурсией.
// пример, как можно получить любое число либо доваляя 5, либо умножая на 3?
// Рекурсивное решение
function find_solution(target){
	function find(start, history){
		if(start == target)
			return history;
		else if(start > target)
			return null;
		else
			return find(start + 5, "(" + history + "+5)")||
		find(start*3, "("+ history +"*3)");
	}
	return find(1, "1");
}

console.log(find_solution(13));
// Чтобы понять как программа находит поиск нужного решения, давайте
// посмотрим ее вызовы, которые происходят для выбранного числа "13"
/* 
find(1, "1")
  find(6, "(1+5")
    find(11, "((1+5)+5)")
      find(16, "(((1+5)+5)+5)")
       Too Big
      find(33, "(((1+5)+5)*3)")
       Too Big
       find(18, "((1+5)*3)")
       Too Big
       find(3, "(1*3)")
         find(8, "((1*3)+5)")
           find(13, "(((1*3)+5)+5)")
       found!!
*/
// Выращивание функций
/* 
  Существует два более менее естественных способа ввода функций в программу
Первый- вы пишите схожий код несколько раз. Этого надо избегать потому что 
чем больше кода написано тем болшая вероятность ошибки, и тем труднее читать
ваш код другим програмистам. Так что берем повторяющуюся функциаональность,
даем ей подходящее имя и помещаем в функцию.
 Второй способ - вы обнаруживаете потребность в некой новой функциональности
которая достойна помещения в новую функцию. Начинаете с названия функции и затем
пишите ее тело. Можно даже начинать с написания кода использующую функцию до того 
как она будет определена.
*/
console.log("--------------------")
// Упражнения для закрепления материла стр 103.
// найти минимальное значение из двух.
function min (a, b){
	if(a<b)
		return a;
	else
		return b;
}

console.log(min(-4,-7));
// моя рекурсия

function isEven(num){
	if(num == 0)
		return true;
	else if(num == 1)
		return false;
	else if(num < 0)
		return isEven(num+2);
	else
		return isEven(num-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-6));

  function countBs(word, ltr){
	var count = 0;
	 for(var bNum = word.length-1; bNum >= 0; bNum--)	
	if(word.charAt(bNum) == ltr)
	 count +=1;
    return count;
  }
 
var text = "pesen esche nedopisannuh skolko, skagi kukushka propoj v gorode mne git ili na vuselkah"
console.log(countBs(text, "d"));