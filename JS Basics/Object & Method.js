/*****************************
* Objects and properties
*/

// object vs array
// array has order, object no order
// array ~ list, object ~ dictionary

// object no need to quote the key! but python dictionary need to quote key if string!

// Object literal
var john = {
    firstName: 'John', // comma seperated the keys
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName); // dot notation to access (no quote)
console.log(john['lastName']); // bracket to access (need quote), ~ python
var x = 'birthYear'; 
console.log(john[x]);

// mutate object
john.job = 'designer'; // dot notation
john['isMarried'] = true; //bracket notation ~ python
console.log(john);

// new Object syntax
var jane = new Object(); // create new empty object
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

/*****************************
* Objects and methods
*/

// attach function to object -> we called method

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear; // access the property inside object -> use this
    }                                     // this -> means current object -> = john.birthYear
};                                        // by using this.age, the result will return to key 'age' inside 'john' object
                                          

john.calcAge(); // run the calcAge method in john object, this method will create a new key 'age' inside john
console.log(john);

// if dont wanna use this.age:
john.age = john.calcAge() // return the age by calcAge method from john object, store in john object, use age as key
