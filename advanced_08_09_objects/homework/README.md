We have learned about arrays and objects. Use that knowledge to create your own implementation of an array object.

# 1. Exercise

[script.js](./scripts/script.js) contains the object you have to finish implementing. You have to implement the following functions:

-   filter
-   map
-   find
-   join

The methods must work identically as the original array methods. The best way to check that is by comparing the output of your methods and the output of the methods of the inner array object (`myNumberArray.data.flter`, for example):

```js
myNumberArray.push(2);
myNumberArray.push(4);
myNumberArray.push(5);
myNumberArray.push(1);
myNumberArray.push(9);

// get only even numbers form the array
myNumberArray.data.filter((x) => x % 2 == 0);

// test your implementation
myNumberArray.filter((x) => x % 2 == 0);
```

If the outputs match, good work!

It is not permitted to just call the array method inside your own implementation!!

```js
...
filter: function (callback) {
        // Has to return a new array containing only elements for which the callback function returns true.
        return this.data.filter(callback);
    },
...
```

# 2. Exercise

Demonstrate that all your implemented array methods work correctly by populating the array with **objects** (not primitive types like `number` or `string`, but custom objects like person, car or laptop) and executing the methods.

For example:

```js
// Add football players to the array
myNumberArray.push({
    firstName: "Lionel",
    lastName: "Messi",
    age: 33,
});

myNumberArray.push({
    firstName: "Robert",
    lastName: "Lewandowski",
    age: 32,
});

myNumberArray.push(...);
myNumberArray.push(...);

// Get players whose age is 33 or greater
myNumberArray.filter(footballPlayer => footballPlayer.age >= 33);
```

Once done, upload your solution to GitHub, and send me the link to the solution via Slack.

Please don't hesitate to ask if something is unclear. It is important you learn the basics properly so we can start learning eevn more advanced stuff later :)
