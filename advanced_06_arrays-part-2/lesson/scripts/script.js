function printme(number) {
    let newNumber = number * 10;
    let newernumber = newNumber + 15;

    console.log(newernumber);
}

///printme(15);
/**
 *  let newNumber = 15 * 10;
    let newernumber = newNumber + 15;

    console.log(newernumber);
 **/

//printme(47);
/**
 *  let newNumber = 47 * 10;
    let newernumber = newNumber + 15;

    console.log(newernumber);
 **/

//printme(100);

/*let sprintTimes = [12.0, 11.9, 11.89, 11.5, 13, 15];

sprintTimes.sort();

for (let i = 0; i < sprintTimes.length; i++) {
    console.log(i + 1 + ". place: " + sprintTimes[i]);
}*/

/*function getFirstName() {
    return "Linus";
}

function getLastName() {
    return "Torvalds";
}

function printGreeting(firstNameFunction, lastNameFunction) {
    const firstName = firstNameFunction();

    const lastName = lastNameFunction();

    const greeting = `Hello ${firstName} ${lastName}.`;
    console.log(greeting);
}

function printGreeting2(firstName, lastName) {
    const greeting = `Hello ${firstName} ${lastName}`;
    console.log(greeting);
}

printGreeting(getFirstName, getLastName);
printGreeting(getLastName, getFirstName);
printGreeting2(getLastName(), getFirstName());*/

function squareNumber(number) {
    return number * number;
}

function add2ToNumber(number) {
    return 2 + number;
}

function processUserInput(callback) {
    const number = prompt("Please enter a number");
    const result = callback(number);
    console.log(result);
}

processUserInput(squareNumber);

processUserInput(add2ToNumber);

processUserInput((number) => {
    return number * 3;
});

processUserInput((number) => number * 10);

processUserInput((number) => number - 9);

const shortFunction = (number) => number - 9;

/*let strArray = ["11", "2", "2", "11", "11", "5", "7", "9"];
let findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) != index);
console.log([...new Set(findDuplicates(strArray))]);*/

/*var max = 1000;
var min = 1;
var list = [];
var done = false,
    first = true,
    sum = 0,
    maxsqrt = Math.floor(Math.sqrt(max)),
    sumlist = [];

for (var i = min; i <= max; i++) {
    if (isPalindrome(i)) {
        done = false;
        //Start check number list
        for (var j = 1; j <= maxsqrt; j++) {
            first = true;
            sum = 0;
            sumlist = [];
            for (var k = j; k <= maxsqrt; k++) {
                sumlist.push(k);
                sum = sum + k * k;
                if (!first && sum == i) {
                    list.push({ Value: i, Sums: sumlist });
                    done = true;
                } else if (!first && sum > i) {
                    break;
                }
                first = false;
                if (done) break;
            }
            if (done) break;
        }
    }
}
*/

/*
Find the sum of squares of all even numbers smaller than 1000  (Hint: someValue % 2 can tell you if a number is odd or even)
go from 1 to 1000
    for every number
        if the current number is even
            square that number
            add it to the sum
        else
            continue to the next number

*/

/*var start = 1;
var end = 1000;
var sum = 0;
//167167000
for (let i = 2; i <= end; i = i + 2) {
    if (i % 2 === 0) {
        // the number is even
        const squaredNumber = i * i;
        sum = sum + squaredNumber;
    } else {
        continue;
    }
}

console.log(sum);*/
// Create an array by going from 1 to 1000 that will include squares of even numbers and cubes of odd numbers
/*var start = 1;
var end = 1000;
var sum = 0;
//2 cube 2 * 2 * 2
//167167000
for (let i = 1; i <= end; i++) {
    if (i % 2 === 0) {
        // the number is even
        const squaredNumber = i * i;
        sum = sum + squaredNumber;
    } else {
        // the number is odd
        const cubedNumber = i * i * i;
        sum = sum + cubedNumber;
    }
}

console.log(sum);*/
// i =>                        0, 1, 2
/*var numbersFrom1To1000 = [];

for (i = 1; i <= 1000; i++) {
    numbersFrom1To1000.push(i);
}
var sum = 0;
console.log(numbersFrom1To1000);

var numbersFrom1To1000 = [1, 2, 3, 4, 5, 6, 7, 8, 1000];

for (let i = 0; numbersFrom1To1000.length - 1; i++) {
    let numberAtIndexI = numbersFrom1To1000[i];

    if (numberAtIndexI % 2 === 0) {
        // the number is even
        const squaredNumber = numberAtIndexI * numberAtIndexI;
        sum = sum + squaredNumber;
    } else {
        // the number is odd
        const cubedNumber = numberAtIndexI * numberAtIndexI * numberAtIndexI;
        sum = sum + cubedNumber;
    }
}*/

function compareTimes(first, second) {
    // if the first element is bigger than the second
    // -> it should go before the second
    // -> return -1
    if (first > second) {
        return -1;
    }
    // if the first element is smaller than the second
    // -> it should go after the second
    // -> return 1
    if (first < second) {
        return 1;
    }
    // first is equal to second
    // -> it doesn't matter which comes first
    // -> return 0
    return 0;
}

sprintTimes.sort(compareTimes);

sprintTimes.sort((first, second) => {
    // if the first element is bigger than the second
    // -> it should go before the second
    // -> return -1
    if (first > second) {
        return -1;
    }
    // if the first element is smaller than the second
    // -> it should go after the second
    // -> return 1
    if (first < second) {
        return 1;
    }
    // first is equal to second
    // -> it doesn't matter which comes first
    // -> return 0
    return 0;
});
