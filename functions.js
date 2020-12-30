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

function abo(text) {
    for (let i = 0; i < text.length; i++) {
        text = text.replace('-', '/');        
    }
    return text
    
}
console.log(abo('30-12-2020'));
//------------------------------------------------------------------------------