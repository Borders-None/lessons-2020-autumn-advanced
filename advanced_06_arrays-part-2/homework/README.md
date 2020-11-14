# Arrays: part 2 - homework

Hello everybody!

We have learned about various useful array methods which use callbacks to make their behaviour more generic.

## Exercise 1 - Callbacks

In class we did the following example with callbacks:

```js
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
```

We created a `processUserInput` function which loads the number from a user, does some operation on the number, and, at the end, prints the result of the operation. The operation we want to do on the number is defined by passing a callback function to `processUserInput`. So we can say to `processUserInput` to square the loaded number, to add 2 to it, or multiply by 10.

With that in mind, create a new function called `processNumberIfEven` which will:

-   get a number as the first input parameter
-   get a callback function as the second input parameter
-   call the callback function on the number if the number is even and return the result of the callback
-   Print out `"The number is not even!"` if it is not even and return -1

To help ypu get started, you can use this code as a starting point:

```js
function processNumberIfEven(number, callback) {}

function add2ToNumber(number) {
    return 2 + number;
}

var result = processNumberIfEven(4, add2ToNumber); // result should be 6
var result = processNumberIfEven(3, (number) => number * 5); // result -1, and "The number is not even!" should be printed out

function isBiggerThan40(number) {
    return number > 40;
}

var result = processNumberIfEven(4, isBiggerThan40); // result should be false
```

Demonstrate your function by:

-   passing to it 1 and a callback which will add 1 to it
    -   expected result: -1 and "The number is not even!" should be printed out
-   passing to it 100 and a callback which will return a square root
    -   expected result: 10
-   passing to it 20 and a callback which will return a text like "This number is even: <the number you passed>"
    -   expected result: "This number is even: 20"

## Exercise 2 - Array methods

With using the array method filter, filter all strings which are longer than 5 characters.
Then, by using map on the filtered array create a new array that will contain a string like: `The word <some-word> is longer than 5 characters`.

For example, if the input array is:

```js
var words = ["Lorem", "ipsum", "correct", "bok", "pauk", "knjiga"];
```

The filtered array should only contain: "Lorem", "ipsum", "correct", "knjiga".

And the mapped array should look like:

```js
var mappedArray = [
    "The word Lorem is longer than 5 characters",
    "The word ipsum is longer than 5 characters",
    "The word correct is longer than 5 characters",
    "The word knjiga is longer than 5 characters",
];
```

bonus point if you try chaining the array methods together, so something like:

```js
words.filter((word) => {...}).map((word) => {...})
```
