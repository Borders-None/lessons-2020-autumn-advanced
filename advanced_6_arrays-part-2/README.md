## Recap

### What do we know about arrays by now?

- They are a data structure
  - not a primitive type like `number`, `bool`, `string`
  - but a collection/set of multiple separate objects

### What do we know about functions?

- Why do we use them? How would life look without them?
- Functions can have parameters and return some values

# Arrays - part 2

[Documentation about arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Array properties

Arrays have a length property - the number of elements it contains

What is the output of this code?

```js
let array = [1, 2, 3];
console.log(array.lenght);
```

What about this one?

```js
let array = new Array(10);
console.log(array.lenght);
```

What about this one?

```js
let array = [];
array[2] = 1;
console.log(array.lenght);
```

### Manipulating arrays

We can access individual elements by using the **bracket notation**

```js
let array = [1, 2, 3];
console.log(array[0]); // 1
console.log(array[1]); // 2
console.log(array[2]); // 3
console.log(array[10]); // undefined
```

### Array methods

Methods are functions that belong to a object. Every method is a function, but not every function is a method.

Since arrays have lots of different useful methods you will use very often.

### `.push()`

Adds a single element to the back of the array

```js
var arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```

### `.pop()`

Removes the last element of the array

```js
var arr = [1, 2, 3];
var last = arr.pop(); // 3
console.log(arr); // [1, 2];
```

#### `.concat()`

Concatenation means "stiching" two things together.

We can concat strings in two ways:

1. By using the `+` operator:

```js
let orgName = "borders" + ":" + "none";
```

2. By calling `.concat()`

```js
let first = "borders".concat(":");
let second = "none";
let orgName = first.concat(second);
```

Similary, we can concatenate two arrays:

```js
[1, 2, 3].concat(4); // add only one element to the end
[1, 2, 3].concat([4, 5]); // add a whole array to the end

// Will the next line have the rame result as the last one?
[4, 5].concat([1, 2, 3]);

// Can we concatenate arrays with + like strings?
[4, 5] + [1, 2, 3];
```

#### `.slice()`

Returns a slice of the array.

We pass a parameter to slice telling it where we want the slice to begin.
We can also pass a second parameter - at what index to stop the slice

```js
let arr = [0, 1, 2, 3, 4];
arr.slice(2);
arr.slice(1, 3);
```

#### `.includes()`

Returns true if the array contains the specified element, false otherwise.

```js
let barcelonaSquad = [
  "Ter Stegen",
  "Pique",
  "Puyol",
  "Rakitic",
  "Messi",
  "Ibrahimović",
];
barcelonaSquad.includes("Ronaldo");
```

#### `.join()`

Returns all the array values joined together in a string. By default, this method takes no parameters and then the elements are divided with a comma ,. If you provide it with a string parameter though, then it becomes the divider of the elements, like the example below:

```js
["H", "e", "l", "l", "o"].join(); // "H,e,l,l,o"
[("H", "e", "l", "l", "o")].join("--"); // "H--e--l--l--o"
```

#### `.sort()`

Sorting arrays is an important topic in computer science. There are many different sorting algorithms of varying performance (speed and memory consumption).

Developers normally use built-in sorting methods and only implement their own if there is a good reason for it.

There are many use cases for sorting our arrays. For example, we might have 100m sprint times and would like to order them from fastest to slowest.

```js
let sprintTimes = [12.0, 11.9, 11.89, 11.5, 13, 15];
sprintTimes.sort(); // [11.5, 11.89, 11.9, 12, 13, 15]
```

We can sort strings as well.

Actually we can sort any types of objects (more about that later) and we can also define our own way of comparing elements.

#### Callback functions

A function that we provide to another function is commonly called a callback function.

```js
function getFirstName() {
  return "Linus";
}

function getLastName() {
  return "Torvalds";
}

function printGreeting(firstNameFunction, lastNameFunction) {
  const greeting = `Hello ${firstNameFunction()} ${lastNameFunction()}.`;
  console.log(greeting);
}

printGreeting(getFirstName, getLastName);
```

In the example above, `printGreeting()` receives two functions as parameters.

What's the diffrenxe between `printGreeting()` form above and the following function?

```js
function printGreeting2(firstName, lastName) {
  const greeting = `Hello ${firstName} ${lastName}`;
  console.log(greeting);
}
```

How would we call it by using the string returned from `getFirstName` and `getLastName`?

We can also define callbacks as anonymous functions:

```js
function getFirstName() {
  return "Linus";
}

function printGreeting(firstNameFunction) {
  const greeting = `Hello ${firstNameFunction()}.`;
  console.log(greeting);
}

printGreeting(getFirstName);
printGreeting(function firstNameFunction() {
  return "Linus";
});
```

And we can even go shorter:

```js
printGreeting(() => "Linus");
```

#### `.sort()` with callback

As we said earlier, we can say how we want to sort our array.

We do that by passing a callback function to the `.sort()` method:

```js
let sprintTimes = [12.0, 11.9, 11.89, 11.5, 13, 15];
sprintTimes.sort(); // [11.5, 11.89, 11.9, 12, 13, 15]

function compareTimes(first, second) {
  // if the first element is bigger than the second -> it should go before the second
  if (first > second) {
    return -1;
  }

  // if the first element is smaller than the second -> it should go after the second
  if (first < sesond) {
    return 1;
  }

  // first is equal to second -> it doesn't matter which comes first
  return 0;
}

sprintTimes.sort(compareTimes); // [15, 13, 12, 11.9, 11.89, 11.5]
```

`compareTimes()` is used to compare the elements in the array instead of the default behaviour

### `.forEach()`

We use `.forEach()` to iterate over the array and run a specified callback function for every element.

One of the most often used methods.

```js
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  const squaredNumber = array[i] * array[i];
  console.log(squaredNumber);
}

function printSquaredNumber(number) {
  const squaredNumber = number;
  console.log(squaredNumber);
}

for (let i = 0; i < array.length; i++) {
  printSquaredNumber(array[i]);
}

array.forEach(printSquaredNumber);
```

Actually the callback method can accept a second parameter - a number which is the index of the element.

```js
let barcelonaSquad = [
  "Ter Stegen",
  "Pique",
  "Puyol",
  "Rakitić",
  "Messi",
  "Ibrahimović",
];

barcelonaSquad.forEach(function (name, index) {
  console.log(index + ": " + name);
});
```

#### `.map()`

Like `.forEach`, iterates over the array, but creates a new array by applying a transform function on every element.

Also one of the more useful ones.

**Important! the original array is kept the same. `.map` returns new array with mapped elements**

```js
let array = [1, 2, 3, 4, 5];

function getSquaredNumber(number) {
  const squaredNumber = number;
  return squaredNumber;
}

var squares = array.map(getSquaredNumber);
// var squares = array.map((element) => element * element);
```

#### `.filter()`

Runs every item in the array through a condition that we set, and returns a new array with the values that match the condition.

```js
let temperatures = [-1, 15, 0, -20, 10, 13, 25, 34, 28, 30, -15, 4];

function isHot(temperature) {
  return temperature >= 25; // returns a bool
}

temperatures.filter(isHot);
```

#### `.find()`

Searches through the array and returns the value of the first item that satisfies a predicate function.

```js
let temperatures = [-1, 15, 0, -20, 10, 13, 25, 34, 28, 30, -15, 4];

function isHot(temperature) {
  return temperature >= 25; // returns a bool
}

temperatures.find(isHot);
```

### Chaining array methods together

Since most of the listed array methods return new arrays, we can chain multiple methods together.

For example, we have an array of numbers. We want to get only even numbers which we are going to square and print out their sorted values.

Step by step approach

```js
let numbers = [7, 4, 5, 3, 10, 1, 8, 9, 6, 2];

function isEven(number) {
  return number % 2 == 0;
}

let evenNumbers = numbers.filter(isEeven); // [4, 10, 8, 6, 2]

function getSquared(number) {
  return number * number;
}

let squaredEvenNumbers = evenNumbers.map(getSquared); // [16, 100, 64, 36, 4]

squaredEvenNUmbers.sort(); // [4, 16, 36, 64, 100]

function printNumber(number) {
  console.log(number);
}

// Faster solution
numbers.filter(isEven).map(getSquared).sort().forEach(printNumber);

// An even more concise solution
numbers
  .filter((x) => x % 2 == 0)
  .map((x) => x * x)
  .sort()
  .forEach((x) => console.log(x));
```
