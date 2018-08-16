/*****************************
* Loops and iteration
*/


// for loop
for (var i = 1; i <= 20; i += 2) { // for (start;end;increment){action};
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) { // using .length to extract the length of array, and use it for end condition
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) { // continue: skip this loop and go to next loop
    if (typeof john[i] !== 'string') continue; // if statement's output can write on the same line without curly bracket
    console.log(john[i]); // !== means opposite of === (strict)
}

for (var i = 0; i < john.length; i++) { // break: exit the loop
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
 