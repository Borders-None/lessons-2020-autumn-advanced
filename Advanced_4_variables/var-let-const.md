# let, var and const in Javascript

`let`, `var` and `const` are ways how to declare variables in Javascript

We need to be aware of many things related to variables:
- the scope 
  -> where they are accessible
- are they changeable or not

## The Scope 

We have a block or function scope, but what does it mean.

A function scope is that a variable is accessible withing a the function and
block scope that the variable is acessible withing a block of code.

if we define var anywhere within a function we can access it throughout the function,
with the let and const that is not the case.

Examples:
- function scope

        function function_scope() {

            if (true) {
                var a = 5;
            }
            console.log(a);  
            
        }
    - variable `a` is accessible outside of block of code enclosed with `{ }` in `if` statement

- block scope
**let**

        function block_scope_let() {
            
            if (true) {
                let a = 5;
            }
            console.log(a); -- it throw a reference error because a is not accessible 
        }

    - We cannot access a variable `a` because it only accessible within if statement
      -> We get an `Reference error`


**const**

        function block_scope_const() {

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
    c = 'a'; -- error


Is const a really immutable??

Let's take an object (an array) for an example.

    const ar1 = ['john', 'ringo', 'paul', 'george'];
    const ar1[4] = 'martin'

    var ton = ['ton']
    ar1 = ton -- error

We can change the value(s) of an object but we cannot assing new object to the variable
We will practice this more later.


## let vs var part 2

Variable using `var` can be declared multiple times.
Be aware that if we don't declate a variable it is implicitly declared by `var`
By using `let` only once

    a = 5;      -- implicit var declaration
    var a = 5;
    var a = 10;

    let n = 10;
    let n = 15;  -- error

## let vs var part 3

Using variables in for loops

    function forVar () {

        for (i = 0; i < 5; i++){
            console.log(i);
        }

        console.log("\n");
        console.log(i);    -- it prints 5
    } 


    function forLet () {

        for (let i = 0; i < 5; i++){
            console.log(i);
        }

        console.log("\n");
        console.log(i);    -- i is not accessible outside of the loop
    } 

Be aware how you define variables in for loops