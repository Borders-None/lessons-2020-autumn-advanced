function runSynchronous(){
  console.log("First action");
  console.log("Second action");
  console.log("Third action");
}

function runMyAsynchronousFunction() {
  console.log("First action");
  setTimeout(function () {
    console.log("Second action");
  }, 1000);
  console.log("Third action");
}

function first(){
  console.log("First action");
  setTimeout(firstWithTimeout, 2000);
}
function firstWithTimeout(){
  console.log("First action with timeout");
}

function second(){
  console.log("Second action");
  setTimeout(secondWithTimeout, 1000);
}

function secondWithTimeout(){
  console.log("Second action with timeout");
}

function third(){
  console.log("Third action");
}

function runExercise() {
  first();
  second();
  third();
}

function finished() {
  console.log("The task has finished");
}

function thingThatTakesALongTime(callbackFunction) {
  //... Task that takes a long time to complete

  callbackFunction(); // This is where the 'console.log' happens
}

function runTimeoutAndCallback(callback) {
  // let callback = myCallbackFunction;
  console.log("Starting!");
  setTimeout(function () {
    callback();
  }, 1000);
  console.log("Continuing!");
}

function sum(a, b) {
  // let a = 27 + age
  // leb b = height
  console.log(a + b);
}

// const myCallbackFunction = () => {...}
function myCallbackFunction() {
  console.log("Finished!");
}

function main(){
  runSynchronous();
  runMyAsynchronousFunction();

  runExercise();

  // Pass the function to 'thingThatTakesALongTime' just like a normal variable
  thingThatTakesALongTime(finished);
  
  // a reminder of how parameters are passed to functions
  var age = 26;
  var height = 190;
  sum(27 + age, height);

  runTimeoutAndCallback(myCallbackFunction);
}

main();

// Illustration of running: runTimeoutAndCallback(myCallbackFunction);
// 
// console ----------
// starting
// continuing
// finished

// time schedule
// - after 1 s passes, call function "callback"
// 