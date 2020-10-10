# Functions in Javascript

A way to organize code. Long code can be hard to read even harder to debug (solve issues with it)

## Defining functions

1. Function declaration
2. Function expression
   - anonymous
   - named

Functions in Javascript are called by value e.g. outside value is not changed unless if it and object.


### Function declaration

It consists of:
  - The name of the function
  - list of parameters 
    - there can be no parameter or multiple parameters
    - default values are possible
  - statements that define the function are enclosed in curly brackets `{ }`
  - function can return a value

Function declaration support hoisting which means it is not important where we declare our functions

example:

    function square(number) {
        return number * number;
    }


### Function expressions

Different way to create functions in Javascript, and it has some small differences.
Almost all characteristic functions declaration has, it does not support hoisting.
Which means that we cannot used it before we declare it.

Assigning a function to a variable. And we have anonymous and named function expression.
It is recommended that name for named expression is the same as variable where
we store our function. 
Function expression happens after the `=` sign.
And dont' forget to put `;` at the and of curly bracket.

* anonymous:

      const square = function(number) { return number * number };
      var x = square(4)

* named:


      const factorial = function fact(n) { return n < 2 ? 1 : n * fac(n - 1) };

      console.log(factorial(3))


## Function hoisting

The term when we can use the function before it is declare.
Function declaration support hoisting but function expression doesn't.

**Function declaration** 

'''
print(5);

function print(param) {
  console.log(param);
}
'''

Program prints out 5

**Function declaration

'''
print(5);

let print = function print(param) {
  console.log(param);
}
'''

We get an reference error

## Exercises

Using function declaration, function anonymous expression and function named expression to create following functions:
1. Create a function that prints hello world
2. Create a function that takes 2 parameters and prints them
3. Create a function that takes a parameter and changes its value in the function. Declare and initialize the variable, use it as an argument. 
    Change the value in the function and print it. After calling the function
    print the variable again.
4. The same task as 3. but use an array as variable/argument.
5. Create a function that takes an array as argument and and prints the array
   using for loop for function declaration and while loop for function
   anonymous expression and function named expression
6. Create a function that calculates square value of some number.
   Print the result of the function (return the value) in console log
7. Try hoisting with a task 2.

Use the functions in the code