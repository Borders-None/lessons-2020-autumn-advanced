# let, var and const in Javascript

`let`, `var` and `const` are ways how to declare variables in Javascript

We need to be aware of many things related to variables:
- the scope 
- the mutability

## The Scope 

A scope is in programming is a region of the program where a defined variable can be accessed
We have a block or function scope, but what does it mean.

A function scope means that a variable is accessible within a function and
block scope means that the variable is acessible withing a block of code.
Block of code is usually surrounded with `{ }`, we can also declared a variable in for loop.

if we define var anywhere within a function we can access it throughout the function,
with the let and const that is not the case.

Examples:
- function scope

        function functionScope() {

            if (true) {
                var a = 5;
            }
            console.log(a);  
            
        }
    - variable `a` is accessible outside of block of code enclosed with `{ }` in `if` statement

- block scope
  - **let**

        function blockScopeLet() {
            
            if (true) {
                let a = 5;
            }
            console.log(a); 
        }

    - We cannot access a variable `a` because it only accessible within if statement
      -> We get an `Reference error`


  - **const**

        function blockScopeConst() {

            if (true) {
                const a = 5;
            }
            console.log(a); 
        }

    - We cannot access a variable `a` because it only accessible within if statement
      -> We get an `Reference error`

## Mutability

We can change values to variables defined by `var` and `let`, but not the `const`
It that completely true. The is that we can change object values of the object.
But we cannot reassign it.

examples:

    var b = 'b';
    b = 'a';
    console.log(b);

    let l = 'b';
    l = 'a';
    console.log(l);

    const c = 'b';
    c = 'a';  // Uncaught TypeError: Assignmet to constant variable


Is const a really immutable??

Let's take an object (an array) for an example.

    const ar1 = ['john', 'ringo', 'paul', 'george'];
    const ar1[4] = 'martin'; // new member is added
    const ar1[0] = 'ned';    // member is updated
    console.log(ar1);       // prints ['ned', 'john', 'ringo', 'paul', 'martin']

    var ton = ['ton'];
    ar1 = ton;          // Uncaught TypeError: Assignmet to constant variable

We can change the value(s) of an object but we cannot assing new object to the variable
We will practice this more later.


## Variable Declaration

### Number of variable declarations 

Variable using `var` can be declared multiple times.
Be aware that if we don't declate a variable it is implicitly declared by `var`
By using `let` only once

    a = 5;      // implicit var declaration
    var a = 5;
    var a = 10;

    let n = 10;
    let n = 15;  // error since we can declare it only once
    n = 20;      // OK since we are only assigning a value

### Declaring variables in a for loop and its scope

Using variables in for loops

    function forVar () {

        for (i = 0; i < 5; i++){
            console.log(i);
        }

        console.log("\n");
        console.log(i);    // it prints 5
    } 


    function forLet () {

        for (let i = 0; i < 5; i++){
            console.log(i);
        }

        console.log("\n");
        console.log(i);    // ReferenceError: i is not defined
    } 

Be aware how you define variables in `for` loops


