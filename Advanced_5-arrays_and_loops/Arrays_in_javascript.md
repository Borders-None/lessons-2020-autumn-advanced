# Arrays in Javascript

## Motivation for using arrays


## About arrays

* Our first data structure
* They hold a list of values where values can be a numbers, string or objects
* Direct access to every element
* Zero based (first element is 0th element)
* Loops are used for array iteration
* There is no type safety 

## Definining arrays

There are two ways how we can declare and initalize the array.

1. Array literal

    ```
    let students = ['Peter', 'John', 'Anna'];
    ```

2. Creating an Array object

    ```
    let students = new Array('Peter', 'John', 'Anna');
    ```

## Accesssing array values

As I already mentioned that arrays are 0 (zeroth) based structure.
Javascript array has a length property which we can easily access.
The first element has an index 0, and last element has and index of length-1
We access the array element by stating the name of the array and the index

First element: `students[0]`
Second element: `students[1]`
Last element: `students[students.length - 1]`

## Setting values in the array

We just need to assign a value to an array with a certain index.

First element: `students[0] = 'Peter'`  
Second element: `students[1] = 'John'`   
Last element: `students[students.length - 1] = 'Anna'`   

## Erasing values in the array

We erase value by setting a value to `null`

    let students = ['Peter', 'John', 'Anna'];
    students[0] = null;
    console.log(students);

Be aware that we only erase the value and the size of the array is the same 

## Iterating over loops

We can use loops to access all values in one go.
It doesn't matter which loop we use as long as we use values that correspond to array indexes.

    let students = ['Peter', 'John', 'Anna'];
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }

    let students = ['Peter', 'John', 'Anna'];
    let i = 0;
    while (i < students.length)
        console.log(students[i]);
        i++;
    }

There is more material about arrays but that is everything for now.