/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var mark = {
    name : 'Mark',
    mass : 100,
    height: 1.7,
    calcBMI : function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
   
}

var john = {
    name : 'John',
    mass : 60,
    height : 1.9,
    calcBMI : function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

mark.calcBMI()
john.calcBMI()

if (mark.BMI > john.BMI) {
    console.log(mark.name + ' has the highest BMI with ' + mark.BMI);
} else if (john.BMI > mark.BMI) {
    console.log(john.name + ' has the highest BMI with ' + john.BMI);
} else {
    console.log('They have the same BMI with ' + mark.BMI);
}
