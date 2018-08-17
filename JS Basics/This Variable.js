/////////////////////////////////////
// Lecture: The this keyword


//console.log(this); // means that "this" in global execution context is simply a window object
// window object is the default object

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); // still window object -> global
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);  // "this" variable now is the john object! It refer to object called method 
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);  // "this" now back to the window object!
        }                       // although written inside the method, it's still a regular function.
        innerFunction();        // when we call this function, it no longer point to john object    
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// method borrowing -> borrow john's method to use it on Mike
mike.calculateAge = john.calculateAge; // no ()
mike.calculateAge();

// Mike's example proof "this" variable is only assigned a value when the object calls the method
// In john, the "this" is John object; In Mike, the "this" is Mike object
// So, "this" only become something as soon as the method get called!

