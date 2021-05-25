/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const Calculate = function(l1,l2)
{
    return l1 * l2;
}

console.log(Calculate(3, 4));
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const CrazySum = function(int1, int2)
{
    if (int1 === int2)
    {
        return (int1 + int2) * 3;
    }
    else
    {
        return int1 + int2;
    }
}
console.log(CrazySum(2,3));
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(givenNumber)
{
    let calculateDifference = givenNumber - 19;

    if(givenNumber > 19)
    {
        return calculateDifference * 3;
    }
    else
    {
        return 19 - givenNumber;
    }
}
console.log(crazyDiff(22));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(n)
{
    if (n >= 20 && n <= 100 || n === 400)
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(boundary(400));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(givenString)
{
    let checkStive = givenString.slice(0, 6);

    if(checkStive === "Strive")
    {
        return givenString;
    }
    else
    {
        let addWord = "Strive " + givenString;
        return addWord;
    }
}

console.log(strivify("Strive is cool"))
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(numba)
{
    let checkIfIsMultiplied3 = numba % 3;
    let checkIfIsMultiplied7 = numba % 7;

    if (numba > 0) 
    {
        checkIfIsMultiplied3 === 0 ? console.log("Multiple3 = true") : console.log("Multiple3 = false");
        checkIfIsMultiplied7 === 0 ? console.log("Multiple7 = true") : console.log("Multiple7 = false");
    }
    else
    {
        return console.log("Invalid value! Has to be a positive number")
    }
}
console.log(check3and7(-2));

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(string)
{
    let newString = string.split("").reverse().join("");
    return newString;
}
console.log(reverseString("Hey my friend"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(stringToUpperFirst)
{
    return captializeLetter = stringToUpperFirst.charAt(0).toUpperCase() + stringToUpperFirst.slice(1);
    
}
console.log(upperFirst("samu"));
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(wordToCut)
{
   return wordToCut.slice(1, wordToCut.length -1);
}
console.log(cutString("Hallo"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(numberN)
{
    let randomArray = [];

    for(let xx = 0; numberN > xx; xx++)
    { 
        randomArray.push(Math.floor(Math.random() * 11)); 
    }

    return randomArray;
}
console.log(giveMeRandom(2));
