/* 
String: charAt()

Write a function shortcut that takes two strings and returns the initial letters of theses strings.

Example: shortcut('Amnesty', 'International') should return 'AI'.
*/

function shortcut(fName , Sname) {
   let fCahr = fName.charAt(0);
   let SChar = Sname.charAt(0);
   return fCahr+SChar
 }

console.log(shortcut('Amnesty', 'International'));

//------------------------------------------------------------------------------

/*
String: trim()

Write a function firstChar, which returns the first character that is not a space when a string is passed.

Example: firstChar(' Jurassic Parks ') should return 'J'.

*/

function firstChar(name) {
    let clearName = name.trim();
    let fChar = clearName.charAt(0);
    return fChar
}
 
console.log(firstChar(' Jurassic Parks '));

//------------------------------------------------------------------------------

/*
String: indexOf()

Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. 
    The function should be case insensitive.
Note: indexOf returns -1 if the search string does not occur in the calling string. The indexOf method is also case sensitive.

Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.

*/

function indexOfIgnoreCase (text, chars) {
    let textLower = text.toLowerCase();
    let CharsLower = chars.toLowerCase();
    let charsIndex = textLower.indexOf(CharsLower);
    return charsIndex;

}
 
console.log(indexOfIgnoreCase('bit','IT'));

//------------------------------------------------------------------------------

/*
String: indexOf() with from index

Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. 
If the search string does not occur twice, -1 should be returned.

Example: secondIndexOf('White Rabbit', 'it') should return 10.

*/

function secondIndexOf (text, chars) {
    let textLower = text.toLowerCase();
    let CharsLower = chars.toLowerCase();
    let charsIndex = textLower.indexOf(CharsLower);
    let secCharsIndex = textLower.indexOf(CharsLower, charsIndex + 1);
    return secCharsIndex;

}
 
console.log(secondIndexOf('White Rabbit', 'it'));

//------------------------------------------------------------------------------

/*
String: substr()

Write a function firstWord, taking a string and returning the first word in that string. 
The first word are all characters up to the first space.

Example: firstWord('see and stop') should return 'see'.

*/

function firstWord (text) {
    let firstBlank = text.indexOf(' ');
    
    let fWord = text.substr(0, firstBlank);
    return fWord;
}
 
console.log(firstWord('Happy New Year'));

//------------------------------------------------------------------------------

/*
String: replace()

Write a function normalize, that replaces '-' with '/' in a date string.

Example: normalize('20-05-2017','-', '/') should return '20/05/2017'
         
*/
// long way

function fnormalize(text,change, change2) {
    let x = 0;
    let y = 0;
    let firstIndex = text.indexOf(change);
    console.log(firstIndex);
    if (firstIndex != -1) {
       
        for (let i = firstIndex; i < text.length; i++) {
        
            res= text.indexOf(change, i+1);
            if (res!== y ) {
                x++
            } //else if (res === y){ break;}
            y = res
        }
        
    }
    for (let k = 0; k < x+1 ; k++) {
       text = text.replace(change, change2);
        
    }
    return text

}

 
console.log(fnormalize('29-12-2020','-', '/'));

//short way

function normalize(text,change, change2) {
    for (let i = 0; i < text.length; i++) {
        text = text.replace(change, change2);        
    }
    return text
}

console.log(normalize('30-12-2020','-', '/'));

//------------------------------------------------------------------------------

/*
Fahrenheit
Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.

Example: toFahrenheit(0) should return 32.
Hint:
If C is the temperature in Celsius and F the temperature in Fahrenheit, the following applies: F = 1.8 * C + 32.
*/

function toFahrenheit (num1) {
    return 1.8*num1 + 32
}
console.log( toFahrenheit (5));

//------------------------------------------------------------------------------\

function mean (num1, num2) { 
    return (num1 + num2) / 2;
}

console.log( mean (2, 3));
//------------------------------------------------------------------------------\

/*
Math

Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. 
The length of the two legs is passed to the function. 
Tip: In a right triangle the Pythagorean theorem is valid. 
If a and b are the lengths of the two legs and h is the length of the hypotenuse, 
the following is true: a² + b² = h². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5. 
*/
function hypotenuse (a, b) {
    let h = Math.pow(a,2) + Math.pow(b,2);

    return Math.sqrt(h);  
}

console.log(hypotenuse (3, 4));

/*
Math.min() and Math.max():

Write a function midrange, that calculates the midrange of 3 numbers. 
The midrange is the mean of the smallest and largest number.

Example: midrange(3, 9, 1) should return (9+1)/2 = 5.
*/
function midrange (a, b,c) {
    let min = Math.min(a, b,c);
    let max = Math.max(a, b,c);
    let mid = (max+min)/2


    return mid;  
}

console.log(midrange (3, 9,5));

/*
Math.PI  and Math.E
Note: Besides functions Math offers some mathematical constants. 
Math.PI gives π (roughly 3.14) and Math.E gives Euler's number e (roughly 2.71).

Write a function area that calculates the area of a circle. The function is given the radius of the circle.

Example: area(1) should return π and area(2) should return 4 * π.
*/
function area(r) {
    return Math.PI* r**2;
}

console.log(area(2));

/*
Math.round(), Math.floor() and Math.ceil() functions.

Math.round() rounds a number to the nearest integer, 
Math.floor() rounds a number downwards to the nearest integer and
Math.ceil() rounds a number upwards to the nearest integer. 
Therefore, the variables a to d all get the value 5.

Write a function round100 that rounds a number to the nearest hundred.

Example: round100(1749) should return 1700 and round100(856.12) should return 900.
*/

let a = Math.round(5.49);
let b = Math.round(4.5);
let c = Math.floor(5.99);
let d = Math.ceil(4.01);

console.log(a, b, c, d );

function round100 (num1) {
    return Math.round(num1/100)*100;
}
/*
Math.random()
Write a function dice that returns like a dice a random number between 1 and 6.
*/
// easy one
function dice () { // min and max included 
    return Math.floor(Math.random() * 6) + 1 ;
}

// complex one
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntFromInterval(20, 30));

//------------------------------------------------------------------------------

/*
parseInt
Write a function add that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. 
The summation task is a string of the form '102+17'.

Example: add('102+17') should return 119.
*/

let n1 = parseInt('19', 10);
let n2 = parseInt('+19', 10);
let n3 = parseInt('-19', 10);
let n4 = parseInt('19 Grad', 10);
let n5 = parseInt('19.1', 10);
let n6 = parseInt('019', 10);
let n7 = parseInt(' 19', 10);
let n11 = parseInt('text', 10);
let n12 = parseInt('No. 10', 10);
console.log(n1,n2,n3,n4,n5,n6,n7,n11,n12);


function add(note) {
    let fNum = parseInt(note, 10);
    let indexPlus  = note.indexOf("+");
    let nAfterPlus  =parseInt(note.substr(indexPlus +1),10);   
    return fNum+nAfterPlus;
}
console.log(add('102+17'));

/* 
Boolean
NAND (Not AND)
Write a function nand that takes two Boolean values. 
If both values are true, the result should be false. 
In the other cases the return should be true.

I.e.: The call nand(true, true) should return false. 
The calls nand(true, false), nand(false, true) and nand(false, false) should return true.
*/

function nand(blo1, blo2) {
    let and =blo1 && blo2
    return !and
}
console.log(nand(true, true));

/* 
NOR (Not OR)
Write a function nor that takes two Boolean values. If both values are false, 
the result should be true. In the other cases the return should be false.

I.e.: The call nor(false, false) should return true. 
The calls nor(true, false), nor(false, true) and nor(true, true) should return false.
*/
function nor(blo1, blo2) {
    let and =blo1 || blo2
    return !and
}
console.log(nand(false, false));
/*
XOR
Write a function xor that takes two Boolean values. If both values are different, 
the result should be true. If both values are the same, the result should be false.

I.e.: The calls xor(true, false) and xor(false, true) should return true. 
The calls xor(true, true) and xor(false, false) should return false.
*/
function xor(a, b) {
    return ( a && !b ) || ( !a && b ) ;    
 }
console.log(xor(true, true));

 /**
 Exercise
Write a function isEven that checks if a passed number is even. If the given number is even, true should be returned, otherwise false.

Example: isEven(2) should return true and isEven(3) should return false.
  */
function isEven(n) {
    return n %2 === 0
}
console.log(isEven(25));

/*
Strict inequality
Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.

Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.

*/

function unequal(a, b, c) {
    return a !== b && b !== c && a !== c  
}
console.log(unequal(a, b, c));

/*
Compare numbers
Write a function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.

Example: isThreeDigit(500) should return true and isThreeDigit(50) should return false.
*/
function isThreeDigit(n) {
    return n >= 100 && n < 1000
}
console.log(isThreeDigit(50));

/*
if
Write a function equals that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.

Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.
*/
function equals(num1, num2) {
    if (num1===num2) {
        return 'EQUAL'
    } else {
        return 'UNEQUAL'
    }

}
console.log(equals(1, 1));

function repdigit(n) {
    let ones = n % 10;
    console.log(ones);
    let tens = Math.floor(n / 10);
    console.log(tens);
    console.log(n / 10);
    if (ones === tens) {
      return 'Repdigit!';
    }
    return 'No Repdigit!';
  }
  console.log(repdigit(99));