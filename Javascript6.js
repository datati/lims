/**
 * 
 * JavaScript let
 * JavaScript const
 * Exponentiation (**) (EcmaScript 2016)
 * Default parameter values
 * Array.find()
 * Array.findIndex()
 */

//let - allows you declare a variable with a block scope
//Const - is similar to let variables, except that the value cannot be changed.
//===================================================================================================

var x = 10;

{
	let x = 2;
	var y = 4;
	const z = 9;

	console.log("Here let X is: "+x);
	console.log("Here const Z is: "+z);
}
console.log("Here var Y is: "+y);
console.log("Here var X is: "+x);

//Exponential
//========================================================================================

	
var m = 5;
//var k = m**2; 
var k = Math.pow(m,2);

console.log("Exponential k is: "+k);


//Default Parameter Values

function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}

var h = myFunction(5); // will return 15

console.log("My function: "+h);


//Array.find()
//The find() method returns the value of the first array element that passes a test function.
//============================================================================================

var numbers = [4,9,16,25,29];

var first = numbers.find(otherFunction);

function otherFunction(value,index,array){
	
	return index == 1;
}

console.log("The value of otherFunction is: "+first);

//Array.findIndex()
//The findIndex() method returns the index of the first array element that passes a test function.
//================================================================================================

var numbers2 = [4,9,16,25,29];

var first2 = numbers2.findIndex(otherFunction2);

function otherFunction2(value,index,array){
	
	return value > 16;
}

console.log("The value of otherFunction2 is: "+first2);



//---OTHER----------------------------------------------------------------------------------------------------

var  a = Number.EPSILON;
var b = Number.MIN_SAFE_INTEGER;
var c = Number.MAX_SAFE_INTEGER;

console.log("Epsilon: "+a);
console.log("Safe Number"+b);
console.log("Safe Max Number"+c);

Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

//A safe integer is an integer that can be exactly represented as a double precision number. integers from -(2^53 - 1) to +(2^53 - 1).
console.log(Number.isSafeInteger(10));    // returns true
console.log(Number.isSafeInteger(12345678901234567890));  // returns false

//The global isFinite() method returns false if the argument is Infinity or NaN
console.log(isFinite(10/0));       // returns false
console.log(isFinite(10/1));       // returns true
console.log(isFinite("r"));       // returns false

console.log(isFinite("10"));       // returns true. 


isNaN("Hello");


//------------------------------Arrow Functions-------------------------------------------------------------------
/*
 * 
 * Arrow functions allows a short syntax for writing function expressions.
 *
 * * 
 */

//ES5
var p = function(x, y) {
	   return x * y;
	}

console.log(p(2,3));

//ES6 -  You don't need the function keyword, the return keyword, and the curly brackets.
/*
 * Arrow functions do not have their own this. 
 * They are not well suited for defining object methods.
 * Arrow functions are not hoisted. They must be defined before they are used.
 * Using const is safer than using var, because a function expression is always constant value.
 * You can only omit the return keyword and the curly brackets if the function is a single statement. 
 * Because of this, it might be a good habit to always keep them:
 */
const r = (x, y) => x * y;
const s = (x, y) => { return x * y };

console.log(s(3,3));


//==========================ETC=======================================

//Comparison operators(strict comparison === , abstract comparison ==,   relational abstract comparisons <= >= )
//Number.isNaN() VS isNaN

//==================================================================

/*
 * The Number.isNaN() method determines whether the passed value is NaN and its type is Number. It is a more robust version of the original, global isNaN().
 * 
 */
//The Number.isNaN() method determines whether the passed value is NaN and its type is Number. It is a more robust version of the original, global isNaN().

Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0);      // true

// e.g. these would have been true with global isNaN()
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

// These all return false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');


//------------------------------------------return volvo still -------------------------------------
var carName = "Volvo";
var carName;

console.log(2 + 3 + "5");

//----------------------------------------------------------------------------------------------
























