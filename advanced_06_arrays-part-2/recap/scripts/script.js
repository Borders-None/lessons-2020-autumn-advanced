recap4();

/** Recap 1 - arrays
 * Let's create an array of 5 elements
 * iterate over it with a for loop
 * and print out each element separetly
 */

function recap1() {
    const array = [1, 2, 3, 4, 5, 6, 7];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

/** Recap 2 - arrays
 * Let's create 2 arrays of 5 numbers
 * and create a third array as a sum of the first two
 */

function recap2() {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 2, 9, 5, 6];
    const array3 = []; // 5, 4, 12, 9, 11

    let i = 0;

    while (i < array1.length) {
        array3[i] = array1[i] + array2[i];
        i++;
    }

    console.log(array3);
}

/** Recap 3 - functions
 * Lets create a new year countdown from 10 do 0 the bad way
 */

function recap3() {
    console.log(10);
    console.log(9);
    console.log(8);
    console.log(7);
    console.log(6);
    console.log(6);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
    console.log(0);
}

/** Recap 4 - functions
 * Lets create a new year countdown from 10 do 0 the good way
 */

function recap4() {
    for (i = 100; i >= 0; i--) {
        console.log(i);
    }
}

/** Recap 4 - functions
 * Lets create a new year countdown from 10 do 0 the strange way
 */

function recap5() {}
