/////////////////////////////////////
// Lecture: Hoisting

// functions
calculateAge(1965); // even put before the function, still works! it's hoisting!

// Creation Phase of execution context (global this time)
// The function declaration calculateAge is stored in the variable object, before the code is executed
// So, before enter execution phase, the calculateAge function is already available

function calculateAge(year) { // function declaration
    console.log(2016 - year);
}

// retirement(1956); // for function expression, it cannot be called before the function expression 
var retirement = function(year) { // function expression, NOT function declaration
    console.log(65 - (2016 - year));
}


// variables

console.log(age); // return undefined
var age = 23; // coz code is scanned for variable declaration, and set to undefined first
// if only console.log(age) without variable declaration, it will return error

// this upper variable age declared in global execution context object
// for lower variable age, it acts very different.

function foo() {
    console.log(age); // will return undefined. Coz we attampt to print the age before declare it
    var age = 65; // this variable age get its own execution context object of foo function. it's totally different variable with upper 'age'
    console.log(age); // will return 65
}

// You may ask, we have declare global execuation of age = 23, why will return undefined when first print in foo()?
// coz foo() has declare the age within the function. From scope chain, it will check the nearest scope first (foo() scope)
// So, the 1st print in foo() is undefined

foo(); // execute the foo function. the age in foo() won't affect the age in global execution
console.log(age);
