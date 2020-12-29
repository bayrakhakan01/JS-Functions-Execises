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

console.log(shortcut('Amnesty', 'International'))

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
 
console.log(firstChar(' Jurassic Parks '))

//------------------------------------------------------------------------------

/*
String: indexOf()

Write a function firstChar, which returns the first character that is not a space when a string is passed.

Example: firstChar(' Jurassic Parks ') should return 'J'.

*/

function firstChar(name) {
    let clearName = name.trim();
    let fChar = clearName.charAt(0);
    return fChar
}
 
console.log(firstChar(' Jurassic Parks '))

//------------------------------------------------------------------------------
