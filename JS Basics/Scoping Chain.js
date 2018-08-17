/////////////////////////////////////
// Lecture: Scoping


// First scoping example
var a = 'Hello!'; // global
first(); 

function first() { // contain a, b
    var b = 'Hi!';
    second();

    function second() { // contain a, b, c
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() { // third function is in a different scope than second function. it can't access variable c
    var d = 'John';
    //console.log(c); // if run this, it will return error
    console.log(a+d); // only a(global) and d can access by third function
}


