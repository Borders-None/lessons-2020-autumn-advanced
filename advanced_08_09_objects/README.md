# Objects

## Motivation

Let's say we have want to create a program to store some soccer player information. We want to have information about their first name, their last name, age, and the club they play at.

```js
let person1FirstName = "Lionel";
let person2FirstName = "Robert";
let person3FirstName = "Cristiano";

let person1LastName = "Messi";
let person2LastName = "Lewandowski";
let person3LastName = "Ronaldo";

let person1Age = "33";
let person2Age = "32";
let person3Age = "34";

let person1Club = "Barcelona";
let person2Club = "Bayern";
let person3Club = "Juventus";
```

Question: How would we store all user info in an array and iterate over all persons and print their info?

```js
let firstNames = [person1FirstName, person2FirstName, person3FirstName];
let lastNames = [person1LastName, person2LastName, person3LastName];
let ages = [person1Age, person2Age, person3Age];
let clubs = [person1Club, person2Club, person3Club];

for (let i = 1; i < 3; i++) {
  console.log(
    `Name: ${firstNames[i]}; Last name: ${lastNames[i]}; Age: ${ages[i]};Club: ${clubs[i]}`
  );
}
```

What do you think about that? What is not ideal?

Is there a way to keep all info about a single person together? There is! With objects!

## Definition

You have already learned that JavaScript variables are containers for data values.
Objects are containers for many different values (like collections).

For example, let's create a person object:

```js
var person = {
  firstName: "Lionel",
  lastName: "Messi",
  age: 33,
  club: "Barcelona",
};
```

Now let's create a car object:

```js
var car = {
  brand: "Fiat",
  model: "Multipla",
  coolness: -100,
};
```

A single name: value pair of a object is called a **property**

The format in which objects are defined in JavaScript is called JSON (**J**ava**S**cript **O**bject **N**otation).

## Getting and setting object properies

There are two ways of accessing a value of a object property:

```js
var person = {
  firstName: "Lionel",
  lastName: "Messi",
  age: 33,
  club: "Barcelona",
};

console.log(person.firstName); // Lionel
console.log(person["firstName"]); // Lionel

person.firstName = "Leo";
person["club"] = "Manchester City";
```

What about var, let, and const?

## Nesting Objects inside objects

We can make really complex objects by nesting objects inside them:

```js
var club = {
  name: "Barcelona",
  players: ["Leo", "Ter Stegen", "Pique"],
  address: {
      country: "Spain",
      city: "Barcelona"
      street: "Avinguda Arístides Maillol",
      postalCode: "08028"
  },
  foundedIn: 1899
};

console.log(club.name); // Barcelona
console.log(club.address.street); // vinguda Arístides Maillol
```

## Object methods

Besides just containing data, objects can also do things. Real world objects (like computers, or football players) can perform some tasks (play music, socre goals). In JavaScript, we do that by attaching methods to objects (like array methods: sort, filter, ...).

```js
var person = {
  firstName: "Lionel",
  lastName: "Messi",
  age: 33,
  club: "Barcelona",
  sayHi: function () {
    console.log("Hi everybody!");
  },
};

person.sayHi();
```

An object method can also rely on the other properties of the object to do more complex calculation. To reference the current object in the body of the method, we will use the keyword `this`. Let's take an example.

```js
var person = {
  firstName: "Lionel",
  lastName: "Messi",
  age: 33,
  club: "Barcelona",
  sayHi: function () {
    console.log("Hi everybody! My name is " + this.firstName);
  },
};

person.sayHi();
```

We can also modify existing properties:

```js
var club = {
  name: "Barcelona",
  players: ["Leo", "Ter Stegen", "Pique"],
  address: {
      country: "Spain",
      city: "Barcelona"
      street: "Avinguda Arístides Maillol",
      postalCode: "08028"
  },
  foundedIn: 1899,
  addPlayer: function (name) {
      this.players.push(name);
  }
};

console.log(club.players); // ["Leo", "Ter Stegen", "Pique"]
club.addPlayer("Griezman")
console.log(club.players); // ["Leo", "Ter Stegen", "Pique", "Griezman"]
```

## Arrays of objects

Arrays can contain objects!

Let's go back to our motivation example:

```js
let person1FirstName = "Lionel";
let person2FirstName = "Robert";
let person3FirstName = "Cristiano";

let person1LastName = "Messi";
let person2LastName = "Lewandowski";
let person3LastName = "Ronaldo";

let person1Age = "33";
let person2Age = "32";
let person3Age = "34";

let person1Club = "Barcelona";
let person2Club = "Bayern";
let person3Club = "Juventus";

let firstNames = [person1FirstName, person2FirstName, person3FirstName];
let lastNames = [person1LastName, person2LastName, person3LastName];
let ages = [person1Age, person2Age, person3Age];
let clubs = [person1Club, person2Club, person3Club];

for (let i = 1; i < 3; i++) {
  console.log(
    `Name: ${firstNames[i]}; Last name: ${lastNames[i]}; Age: ${ages[i]};Club: ${clubs[i]}`
  );
}
```

Let's refactor it so that we only have one array.

Let's recap our array knowledge! Use `.map`, `.filter`, and `.sort`.

## Built-in object methods

### `Object.keys()`

This method goes into our object, and returns the object property names as an array.

### `Object.values()`

This method goes into our object, and returns the values of every property as an array.

## Loop through an Object

Let's create a function which will print all object properties and their values!
