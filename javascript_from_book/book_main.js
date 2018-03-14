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
console.log("----------Structuru dannuh objectu, massivu------------");
//Структуры данных, обьекты, массивы

// var day1 = {
	
// 	events: ["rabota", "tronul derevo", "pizza", "probegka"],
// 	squarell : false
// };

// console.log(day1.squarell);
// console.log(day1.events);
// Журнал оборотня
var journal = [];
function addEntry(events, didITurnIntoASquirell){
journal.push({
	events: events,
	squirell: didITurnIntoASquirell
});
	
}

addEntry(["rabota1", "sjel oreh", "glintvain", "probegka"], true);
addEntry(["dengi", "birga", "bizness"], false)

console.log(journal[0].events, journal[0].squirell);
console.log(journal[1].events, journal[1].squirell);

var toDoList = [];
// методы массива
function rememberTo(task){
	toDoList.push(task);
}
 
 function whatIsNext(){
 	return toDoList.shift();
 }
function urgentlyRememberTo(task){
	toDoList.unshift(task);
}
rememberTo("pomut pol");
rememberTo("pokleit oboi");
rememberTo("sjezdit v restoran");
urgentlyRememberTo("perekrut vody");

// whatIsNext();
 console.log(whatIsNext());
  console.log(whatIsNext());

console.log(toDoList);
console.log("-------------");
// по методам массива indexOf(x) можно определять индекс указанной цифры спереди массива и 
// по методу lastIndexOf(x) с конца массива.
// оба метода принимают необязательный второй аргумент который задает начальную позицию поиска.
console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// метод slice принимает номера начального(start), и конечного(end) массивов и возвращает массив состоящий
// только из елементов попадших в этот промежуток.
var elem = [0,1,2,3,4];
console.log(elem.slice(1,3));
// если нет второго аргумента в методе slice, тогда в массив попадут все елементы начиная с указанного.
console.log(elem.slice(2));
// метов массива concat соединяет два массива в один.
var  pYsh = ["o","skolko","num","otkrutij","chudnuh"];
var kin = ["gotovit","prosvechenja","duh"];
var pushkin = pYsh.concat(kin);
console.log(pushkin);

console.log("kokos".charAt(3));
console.log("karambol".indexOf("r"));
console.log("karambol".slice(2));
console.log("karambol".slice(2, 7));
// метод trim убирает пробелы, табуляцию, перевод строк с обоих концов строки.
console.log(" karambol \n".trim());
// Обьект аргумент
// Когда вызывается функция, к окружению исполняемого тела функции добавляется особая
// переменная под названием arguments. Она указывает на обьект содержащий все аргументы
// переданные функции.
// В яваскрипте можно передавать в функцию больше или меньше аргументов чем обьявлено.
function noArguments(){}
	noArguments(1,2,3); // можно так.

function threeArguments(a, b, c){}
threeArguments(); // и так можно

// функция иллюстирующая подсчет своих аргументов при помощи метода length.
function argumentsCounter(){
console.log("tu dal mne", arguments.length, "argumenta");
}
argumentsCounter("djadja", "Stepa", "velikan" );
//можно в массив закидывать обьекты
// метод который закидывает в массив journal3 обьекты
// функция пропускает первый аргумент, а со второго и до последнего аргумента прогоняет в 
// цикле закидывая их в массив.
var journal = [];
function addEntry4(squirell){
	var entry = {events: [], squirell: squirell };
	for (var i = 1; i < arguments.length; i++){
	 entry.events.push(arguments[i]);
    }
     journal.push(entry);
}

   addEntry4(true, "s", "pisec", "nadejus rabotaet");
   addEntry4(false, "be be", "myy", "chas tochno uznaem");
  
console.log(journal[0].events,journal[0].squirell);
console.log(journal[1].events, journal[1].squirell);
console.log(`kol-vo objektov: ${journal.length}`);




//    var table = [];
// function proizvol(args){
//  for(var i = 0; i < arguments.length; i++){
//    table.push(arguments[i]);
//    }
// }

// proizvol("lohmond", "sushkkin", "lohotron");
// console.log(table);


//    var table = [];
// function proizvol(args){
// 	var events = 0;
//   while (events < arguments.length){
//   	  table.push(arguments[events]);
//       events +=1;
//   };
// }
//  	proizvol("bita", "chashka", "sportloto");
// console.log(table);

// Обьект Math
console.log(parseInt(12.45));
console.log(Math.random());
console.log(Math.floor(Math.random()*100));
// Задание к разделу обьекты массивы.
// Создать функию range(a, b) аргументы которого позитивные числа
// и создать массив от данного числа и выше или ниже следующего по порядку
// если указывается необязательный третий аргумент то массив должен быть с шагом 
//с разницей равная третьему аргументу.
function range(a, b){
  var mass = [];
  
  var arg = arguments[2]|| 1 ;
   var arg2 = arguments[2]|| -1;
   arg2*= -1;
  if(a < b )
   for(var count1 = a ; count1 <= b ; count1+= arg){
	mass.push(count1);
   }
    if(a > b )
   	for(var count1 = a ; count1 >= b  ; count1 -= arg2){
	mass.push(count1);
   }
 return mass;
}
console.log(range(10, 1, -4));

// создать массив суммирующий все числа в массиве.
 function sum(arr){
 	 var allsum = 0;
 	for(var count = 0; count < arr.length; count++){
 		allsum += arr[count];
 	}
    return allsum;
 }
console.log(sum(range(1, 10)));
//создать функцию которая переворачивает массив и делает новый массив в обратном порядке.
function reverseArray(mass){
	// return mass.reverse();
	var newArr2 = [];
	for(var counthz = 0; counthz < mass.length; counthz++){
     newArr2.unshift(mass[counthz]);
	}
   return newArr2;
}

function reverseArrayInPlace(mass){
	for(var counthz = mass.length-1; counthz >= 0; counthz--){
     mass.push(mass[counthz]);
	}
	// Интересно ведут себя циклы, если после первого цикла 
	// вывести значение аргумента mass.length то значение будет 20
	// то что в массиве должно появиться больше елементов
	// с первым действием цикла никак не влияет на значение
	// внутри второго цикла (mass.length).
	//mass.length внутри второго цикла имеет значение 10
    for(var counthz2 = 0; counthz2 < mass.length; counthz2++){
    mass.shift();
    }
  return mass;
}
 var arrayValue1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var arrayValue2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(reverseArray(arrayValue1));
console.log(arrayValue1);
console.log("-----------------");
console.log(reverseArrayInPlace(arrayValue2));
console.log(arrayValue2);

//  function arrayToList(array)
// {
//     var list = {};
//     var lastRest = list;
//     array.forEach(function(elem)
//                   {
//                       lastRest.value = elem;
//                       lastRest.rest = {};
//                       lastRest = lastRest.rest;
//                   });
//     lastRest.rest = null;
//     return list;
// }

// console.log(arrayToList([10, 20, 30]));
function arrayToList(array) {
    // I use an object constructor notation here
    var list = new Object();
    // This is to end the recursion, if array.length == 1, the function won't call itself and instead
    // Just give rest = null
    if (array.length == 1) {
        list.value = array[array.length - 1];
        list.rest = null;
        return list;
    } else {
        // This is to continue the recursion.  If the array.length is not == 1, make the rest key to call arrayToList function
        list.value = array[0];
        // To avoid repetition, splice the array to make it smaller
        array.splice(0,1);
        list.rest = arrayToList(array);
        return list;
    }
}
   obj = arrayToList([10, 20, 30, 40]);
   console.log(obj.rest.rest.rest)

    // laspi.splice(0,1);
   // console.log( arrayToList([10, 20, 30]));

     
    function listToArray(object){
    	var list = [];
    	 while (object != undefined){
    	 	list.push(object.value);
    	     object = object.rest;
    	     }  
        return list;
     }
console.log(listToArray(obj));


   function prepend(a, b) {
  var li = {};
  li.value=a, li.rest=b;
  return li;
}

 // console.log(prepend(10, prepend(20, null)));

 // function nth(a, b){
 // 	list = [];

 // 	if list[b] == a
 // 		return list[b];
 // }

function nth(li, n) {
  var elem, cnt=0;
  for(var i=li; i; i=i.rest, cnt++) {
    if(cnt==n) {
      elem=i.value;
      break;
    }
  }
  return elem;
}
//  var herna = [];
//  herna.push({value: 10, rest:{value: 20, rest: {value: 30, rest: null}}});
// console.log(herna.length) //,herna[0].rest, herna[0].rest.rest );

var obj = {here:{is: "an"}, object: 2};
var obj2 = {here:{is: "of"}, object: 2}
console.log(Object.keys(obj).length);
// function deepEqualErr(a, b){
//  var arr1 = [1, 2, 4];
//  var arr2 = [1, 25, 4];
//  // if (arr1.length == arr2.length)
//  // 	return true;
//    var count = 0;
//    var arr3 = [];
//    while (count < arr1.length-1){
//    	count ++;
//    	if (arr1[count] != arr2[count])
//    		arr3.push("false");
// }
//  if (arr3.length == 0)
//  	return true;
//  else 
//  	return false;
//  	// else
// 		// return false;  
// }

// function deepEqual(a, b){
// 	if (typeof a == typeof b){
// 	if (a.here.is == b.here.is)
// 		return true;
// 	else 
// 		return false;}
// 	else
// 		return false;
// }

  function deepEqual(x, y) {
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop))
      	return deepEqual(x[prop], y[prop]);
     }
  }
  else if (x !== y)
    return false;
  else
    return true;
  }
console.log(deepEqual(obj, obj2));


// function deepEqual2(x, y){
//   var arr = []
//   for (var prop in x){
// 	if (y.hasOwnProperty(prop))
//       	// return deepEqual2(x[prop], y[prop]);
       
//     }
    
// }

// console.log(deepEqual2(obj, obj2));

// var buz = {
//   hero: "pain", fog: "fogygy"
// };

// for (var name in buz) {
//   if (buz.hasOwnProperty(name)) {
//     alert('this is fog for sure(' + name + '). Meaning: ' + buz[name]);
//   }
//   else {
//     alert(name); // toString или что-то ещё
//   }
// }
console.log("---------funkcii vushego porjadka------------------");

function forEach(array, action){
for(var count = 0; count< array.length; count++)
	action(array[count]);
}

var  words2 = ["videli", "noch", "guljali", "vsu", "noch", "do", "utra"]

forEach(words2, console.log);

var numbers = [1,2,3,4,5], sum = 0;
forEach(numbers, function(number){
	sum += number;
});
console.log(sum);

// include("ancestry.js");
var ANCESTRY_FILE = JSON.stringify([
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
])

var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}
// это функция только показывает логику внутри
// ее нет смысла использовать.
console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));
//стандартная встроенная функция filter.
console.log(ancestry.filter(function(person){
 return person.born > 1900 && person.born < 1925;	
}));
// Функция map создает новый массив
//из тех же елементов, есть смысл применять при фильтрации
function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});
console.log(map(overNinety, function(person) {
  return person.name;
}));