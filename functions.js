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

/* 
Two returns
Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.

Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.
*/

function repdigit(n) {
    let ones = n % 10;
    let tens = Math.floor(n / 10);
    if (ones === tens) {
      return 'Repdigit!';
    }
    return 'No Repdigit!';
}
console.log(repdigit(99));

/* 
if...else

Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2.

Example: addWithSurcharge(5, 15) should return 23.
*/

function addWithSurcharge(a, b) {

let surcharge = 0;

if (a <= 10) {
    surcharge = surcharge + 1;
} else {
    surcharge = surcharge + 2;
}

if (b <= 10) {
    surcharge = surcharge + 1;
} else {
    surcharge = surcharge + 2;
}

return a + b + surcharge;
}

/*
else if
Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

Example: addWithSurcharge(10, 30) should return 44.
*/
function addWithSurcharge(a, b) {

let surcharge = 0;

if (a <= 10) {
    surcharge = surcharge + 1;
} else if (a >= 10 && a<=20) {
    surcharge = surcharge + 2;
} else {
    surcharge = surcharge + 3;
}

if (b <= 10) {
    surcharge = surcharge + 1;
} else if (b >= 10 && b <= 20) {
    surcharge = surcharge + 2;
} else {
    surcharge = surcharge + 3;
}

return a + b + surcharge;
}
/*
Arrays
Write a function toArray that takes 2 values and returns these values in an array.

Example: toArray(5, 9) should return the array [5, 9].
*/
function toArray(a, b) {
    return [a , b];
      
}

/*
Get array elements
Write a function getFirstElement that takes an array and returns the first element of the array.

Example: getFirstElement([1, 2]) should return 1.
*/
function getFirstElement ([a, b]) {
    let getArray = [a, b]  
    return getArray[0]
}

/* 
Set array elements
Write a function setFirstElement that takes an array and an arbitrary variable. The variable should be inserted as the first element in the array. The array should be returned.

Example: setFirstElement([1, 2], 3) should return [3, 2].

*/
function setFirstElement(anArray, firstElement) {
    anArray[0] = firstElement;
    return anArray;
}

/*
Array: length
Write a function getLastElement that takes an array and returns the last element of the array.

Example: getLastElement([1, 2]) should return 2.
*/
function getLastElement(anArray) {
    let lastIndex = anArray.length - 1;
    return anArray[lastIndex];
}
/*
Array: shift() and push()
Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.

Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].
*/ 
function rotate(anArray) {
    for (let i = 0; i < anArray.length; i++) {
        const element = anArray.shift();
        anArray.push(element);
    }
    return anArray;
}
console.log(rotate(['a', 'b', 'c', "e"]));

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

/* 
else if
*/
function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}

/*
Array: indexOf()
Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].
*/
function adda(anArr, n) {
    let newArr = anArr.indexOf(n)
    console.log(newArr);
    if (newArr === -1) {
       //anArr.push(n);
     
        return [...anArr, n]
    } else {
        return anArr
    }
}
console.log(adda([1, 2], 3));  

/* 
Array: concat()

Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.

Example: concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8].
*/
function concatUp (anArr, n){
    if (anArr.length <= n.length) {
        return anArr.concat(n);
    } else {
        return n.concat(anArr);
    }
    
}
console.log(concatUp ([5, 7], [6, 8]) );


/* 
Array: slice()

The first parameter specifies the start index (included) and 
the second parameter specifies the end index (excluded). 
The original array will not be modified.

Write a function halve that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.

Example: halve([1, 2, 3, 4]) should return [1, 2].
*/
function halve(anArr) {
    let a = Math.round((anArr.length)/2);
    return anArr.slice(0, a);
}
console.log(halve([1, 2, 3, 4, 5]));

let abcd = ['a', 'b', 'c', 'd'];
let ab = abcd.slice(0, 2);
let bc = abcd.slice(1, 3);
let bcd = abcd.slice(1, 4);

console.log(ab, bc, bcd );


/*
Array: join()

Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. An empty array should return an empty string.

Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'.
*/ 
function list(anArry) {
    if (anArry.length === 0) {
        return '';
    } else if (anArry.length === 1){
        return anArry[0]    
    } else {
        let newArr = anArry.slice(0, anArry.length-1);
        let lArr = anArry[anArry.length-1]
        return newArr.join(', ') + ' and ' + lArr;

    }
}
console.log(list(['Huey', 'Dewey', 'Louie']) );

/*
undefined
Write a function hello having one parameter and returning 'Hello <parameter>!'. If hello is called without an argument, 'Hello world!' should be returned.

Example: hello('Nala') should return 'Hello Nala!'.
 */
function hello(a) {
    if (a) {
       return 'Hello ' + a + '!';
    }
    return 'Hello world!'
}
console.log(hello("hakan"));

/*
for loop
Write a function addTo that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. The result is to be returned.

Example: addTo(3) should return 1+2+3 = 6.
*/

function addTo(m) {
    let sum = 0;
    for (let i = 0; i <= m; i++) {
        sum = sum + i;      
    }
    return sum; 
}
console.log(addTo(3));


/*
Factorial
Write a function factorial that calculates the factorial of a positive integer.

Example: factorial(3) should return 6.
*/
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
}
console.log(factorial(3));

/*
Loops and arrays
Write a function mean that accepts an array filled with numbers and returns the arithmetic mean of those numbers.

Example: mean([1, 2, 3]) should return (1+2+3)/3 = 2. 
*/
  function meanTo(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];      
    }
    return sum/arr.length; 
}
console.log(meanTo([1, 2, 3]));

/*
while loop
Write a function spaces that takes a natural number n and returns a string of n spaces.

Example: spaces(1) should return ' '.
*/

function spaces(n) {
    let mySpaces = '';
    if(n === 0) { return '' }
    while (n-- >0) {
        mySpaces += '';
          
    }
    return mySpaces
}
console.log(spaces(5));
document.write(spaces(5));

/*
do...while loop
Write a function lcm that takes two natural numbers and calculates their least common multiple (lcm). The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.

Example: lcm(4, 6) should return 12. (EKOK)
*/

function lcm(a,b) {
    let theLCM = 0;
    let remainderA;
    let remainderB;

    do {
        theLCM ++;
        remainderA = theLCM % a;
        remainderB = theLCM % b;
        
    } while (remainderA !== 0 || remainderB !== 0);
    return theLCM;
}
console.log(lcm(9,8));
document.write(lcm(9,8));

/*
greatest common divisor (gcd).
The Math.abs() function returns the absolute value of a number,(Mutlak degeri: bir sayinin sifira iolan uzakligi)
*/
function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
}
  
console.log(gcd(12, 13));
console.log(gcd(9, 3));


/*
Nested loops
Write a function sum that calculates the sum of all elements of a two-dimensional array.

Example: sum([[1, 2], [3]]) should return 6.
*/
function summ(arr) {
    let sumArr = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sumArr += arr[i][j];
        }
    }
    return sumArr
}
console.log(summ([[1, 2], [3]]));

/*
NaN

Write a function parseFirstInt that takes a string and returns the first integer present in the string. If the string does not contain an integer, you should get NaN.

Example: parseFirstInt('No. 10') should return 10 and parseFirstInt('Babylon') should return NaN.
*/

function parseFirstInt(input) {

let inputToParse = input;

for (let i = 0; i < input.length; i++) {
    let firstInt = parseInt(inputToParse);
    if (!Number.isNaN(firstInt)) {
    return firstInt;
    }
    inputToParse = inputToParse.substr(1);
}

return NaN;
}
console.log(parseFirstInt('Li is 22 years old.') );


/*
String: split()
Write a function addsum that takes a string with a summation task and returns its result as a number. 
A finite number of natural numbers should be added. The summation task is a string of the form '1+19+...+281'.

Example: addsum('7+12+100') should return 119.
*/
function addsum(n) {
    let sum = 0;
    let parts = n.split('+');
    console.log(parts.length);
    
    for (let i = 0; i < parts.length; i++) {
        
        let num= parseInt(parts[i]);
        sum += num;
    }
    return sum
}
console.log(addsum('7+12+100'));

/*
Functions call functions
Write a function sum that takes an array of numbers and returns the sum of these numbers. 
Write a function mean that takes an array of numbers and returns the average of these numbers. 
The mean function should use the sum function.
*/
function oss(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    
    let num= parseInt(arr[i]);
    sum += num;
}
return sum;
}

function mean2(arr) {
    let average = oss(arr) /arr.length;

    return average;
}
console.log(mean2([1, 4, 10, 85]));


function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    let splitString = str.split(""); // let splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse(); // let reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join(""); // let joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray;  // "olleh"
}
 
console.log(reverseString("x"));

function digitSum(n) {
    let sum = 0;
    let str = n.toString();
    console.log(parseInt(str.substring(0, 0)));
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str.substring(i,i+1));
        
    }
    return sum;
}
console.log(digitSum(192));
