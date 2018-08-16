/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var tipCalculator = {
    name : 'John',
    bills : [124, 48, 268, 180, 42],
    calTip: function() {
        this.tips = []; // create empty array for storing the tips and total paid for each bill
        this.paid = [];
        // this.tips = this.paid = []  <-- this NOT work!!! coz when u assign any value to tips, it will also change paid!!
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i]
            if (bill < 50){
                this.tips[i] = bill * 0.2;
            } else if (bill >200) {
                this.tips[i] = bill * 0.1;
            } else{
                this.tips[i] = bill * 0.15
            }
            this.paid[i] = bill + this.tips[i]
        }
    }
}
tipCalculator.calTip()
console.log(tipCalculator['tips'])
console.log(tipCalculator['paid'])


// *****************************************************
// simpify version, with part 5 to 8
var john = {
    name : 'John',
    bills : [124, 48, 268, 180, 42],
    calTip: function() {
        this.tips = [];
        this.paid = [];
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i]
            var tip = 0
            if (bill < 50) tip = bill * 0.2;
            else if (bill >200) tip = bill * 0.1;
            else tip = bill * 0.15;
            
            this.tips[i] = tip;
            this.paid[i] = bill + tip;
        }
    }
}

var mark = {
    name : 'John',
    bills : [77, 375, 110, 45],
    calTip: function() {
        this.tips = [];
        this.paid = [];
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i]
            var tip = 0
            if (bill < 100) tip = bill * 0.2;
            else if (bill >300) tip = bill * 0.25;
            else tip = bill * 0.1;
            
            this.tips[i] = tip;
            this.paid[i] = bill + tip;
        }
    }
}

var avgTipCalucaltor = function(tips) {
    totalTips = 0;
    for (var i = 0; i < tips.length; i++){
        totalTips = totalTips + tips[i];
    }
    return totalTips / tips.length;
}

john.calTip();
mark.calTip();

john['average'] = avgTipCalucaltor(john['tips']); // store back to object
mark['average'] = avgTipCalucaltor(mark['tips']);

if (john['average'] > mark['average']) console.log('John has the highest tips with $' + avgJohn);
else if (mark['average'] > john['average']) console.log('Mark has the highest tips with $' + avgMark);
else ('They have the same tips with $' + avgJohn);

