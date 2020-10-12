# Loops in javascript

We use loops when we want to simplify multiple execution of the same code.
Instead we copy and paste same code we can use loops.

For today's lecture we will working with following:

1. For loop
2. while loop
3. inner loops
4. break statement
5. continue statement

## Loops

Every loop contains three parts:
1. Initialization
2. Condition
3. final-expression

Initialization is performed once, condition at the beginning a of step, and final-expression after each step.
With final-expression we can control show our loops will go; upward or downwards.
With upward flow the expression is called increment and the values grows from the initial value
and with downward flow we call it decrement when value decrease from the initial value.

### For loop

For loop is a very common loop and it has following form

```
for (initialization; condition; final-expression) {
    some_code
}
```

It is important that we initalize the variable with a `let`.
`let` as we know is block scoped variable and it will be accessible only inside the loop.
`var` is accessible outside of a loop and `const` value cannot be changed 

Simple example for _for loop_ with incrementing values
```
for (let i = 0; i < 10; i++) {
    console.log(i);
}
``` 
This code will print numbers from 0 to 9 at separate line.

Simple example for _for loop_ with decrementing values
```
for (let i = 10; i > 0; i--) {
    console.log(i);
}
``` 
This code will print numbers from 9 to 0 at separate line.


`i++` is short expression for `i = i + `. 
And we can change the steps in different manner (every 2nd or 3rd element) by using different step.

Printing every 3rd number of the for loop:
```
for (let i = 0; i < 20; i = i + 3) {
    console.log;
}
```

### while loop

While loop is a bit different than the for loop since we need to fullfill condition at the beginning.
All three parts of looping needs to be satified for loop to be successful.

```
let i = 0;
while (i < 10) {
    console.log;
    i++;
}
``` 
This is a for loop transformed into a while loop.

We can also set condition to be true at the beginning and set it false inside the loop.
If we don't end the loop then it became an infinite loop and we don't want that to happen.

`let cond = true;
let i = 0; sum = 0;
while (cond) {
    i++;
    sum += i;
    if (sume >= 20) {
        cond = false;
    }
}
`
We are summing values and end loop after the sum is greater than 20.
There is more elegant solution with a `break` statement.

## Controlling the loops flow with `break` and `continue`

If we want to stop loop execution we use `break` statement and 
if we want to skip to the next step we use `continue` statement.

### `continue`
There are two ways how to print even numbers. 
With looping and initializing value to an even number and with a step of 2.
Or using loop and skipping a step if the number is odd.

for loop:
```
for (let i = 0; i < 20; i = i + 2){
    console.log(i);
}
```

continue:
```
for (let i = 0; i < 20; i++) {
    if (i % 2 == 1) {
        continue;
    } else {
        console.log(i);
    }
}
```

### `break`

If we want to break a loop abruptly we use the `break` command.
The loops exist when is reaches a certain condition. 
We can rewrite second example with while loop using the `break` command.
The `break` command is much more versatile when we want to exit the loop.

```
let s = '';
while (true) {
    s += 'a';
    if (s === 'aaaaa'){
        break;
    }
    console.log(s);
}
```
We are adding 'a' to the a variable and we break the loop when we reach 'aaaaa'.

## Inner loops

There is concept that we can run a loop inside another loop. 
It is used with some simple form of sorting.
Since we have two loops we need to separate them somehow.
So we have inner and outer loop. 
We can combine various loops as inner and outer loops.
i.e. for loop with while loop, while loop with for loop.

The form with outer loop and inner loop is following:

```
outer loop
    inner loop
```

Or if we use two `for` loops:

```
for (let i = 0; i < 5; i++) {

    let inner = '';
    for (let j = 10; j > 5; j--) {
        inner += j + ' ';
    }

    console.log("Outer: " + i + ", Inner:  " + inner);
}
``` 

The code has following output:

    Outer: 0, Inner: 10 9 8 7 6
    Outer: 1, Inner: 10 9 8 7 6
    Outer: 2, Inner: 10 9 8 7 6
    Outer: 3, Inner: 10 9 8 7 6
    Outer: 4, Inner: 10 9 8 7 6

## Practice assignments:

1. Create for that prints all elements of folowing array  `['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']` 
   Forward and backwards
2. Print numbers from 1 to 100 that are divisible by 7
3. Print number from 100 to 0 what are divisible by 13
4. Create a loop sums number from 0 to 100 and that skips to the next step  
   when the value is divisible by 9 and exits loop when the number is divisible by 17.\
   Use `break` and `continue` to perform a task.
5. Print a letter from the array and numbers up to position (index) of the letter
   Use inner loops
   Example: 
   ```
   A0
   B01
   C012
   ...
   H01234567
   ```
6. Create a chessboard that looks like this using inner loops (more than one combination)
   This is a a chessboard location matrix. 
   You need to use an array `['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']`
   For everything else you should use loops
   ```
    A8 B8 C8 D8 E8 F8 G8 H8 
    A7 B7 C7 D7 E7 F7 G7 H7 
    A6 B6 C6 D6 E6 F6 G6 H6 
    A5 B5 C5 D5 E5 F5 G5 H5 
    A4 B4 C4 D4 E4 F4 G4 H4 
    A3 B3 C3 D3 E3 F3 G3 H3 
    A2 B2 C2 D2 E2 F2 G2 H2 
    A1 B1 C1 D1 E1 F1 G1 H1
    ```