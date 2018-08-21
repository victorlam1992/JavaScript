/*****************************
* Arrays
*/

// Initialize new array
var names = ['John', 'Mark', 'Jane']; // just like list in python
var years = new Array(1990, 1969, 1948); // another way to use array in JS

/*
One difference of array is JS & list in Python is:
Array: for example, names can use index to add an element DIRECTLY even the index is not exist in that array
e.g. names[6] = 'Alan';
["John", "Mark", "Jane", empty × 3, "Alan"]

However, for Python
List: names[6] = 'Alan'
IndexError: list assignment index out of range

****So, it has big difference!
*/

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'; // add 'Mary' to the end of array
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false]; // can store multiple data types

john.push('blue'); // add to the end of array
john.unshift('Mr.'); // add to the begining of array
console.log(john); 

john.pop(); // delete last element of array
john.pop();
john.shift(); // delete first element of array
console.log(john);

console.log(john.indexOf(1990)) // return 2 as it is located at index 2
console.log(john.indexOf(23)); // if 23 not exist in array, will return -1

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

// john.indexOf('designer') === -1 means 'designer' not exist in the array
// So, the isDesigner variable will store 'John is NOT a designer'