# Review exercise

This is the [CodePen](https://codepen.io/metakermit/pen/RwRGLxQ) with our exercises from this lesson.

We used some common code to print more easily in CodePen:

```js
// useful function to print messages more visibly
function printMessage(message) {
  var node = document.getElementById("output");
  node.innerHTML = "<p>" + message + "</p>";
}

var greeting = "Bok, svijete. Dobar dan!";
printMessage(greeting);
```

## Exercise 1:

Print all unique numbers in the array: `[17, 28, 57, 357, 75, 20, 57, 20, 357, 653, 17]`

The desired output would be: 17, 28, 57, 357, 75, 20, 653

Solution:

```js
var arr1 = [17, 28, 57, 357, 75, 20, 57, 20, 357, 653, 17];
var outputArray = [];

for (i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  console.log(outputArray);
  var isDuplicate = outputArray.includes(arr1[i]);
  console.log(isDuplicate);
  if (!isDuplicate) {
    outputArray.push(arr1[i]);
  }
}
console.log(outputArray);
```

## Homework:

1. Change the code to only print values that appear two or more times in the input array
2. Find the sum of squares of all even numbers smaller than 1000  (Hint: `someValue % 2` can tell you if a number is odd or even)
3. Create an array by going from 1 to 1000 that will include squares of even numbers and cubes of odd numbers
