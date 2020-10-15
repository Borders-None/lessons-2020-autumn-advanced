function printme(number) {
    let newNumber = number * 10;
    let newernumber = newNumber + 15;

    console.log(newernumber);
}

///printme(15);
/**
 *  let newNumber = 15 * 10;
    let newernumber = newNumber + 15;

    console.log(newernumber);
 **/

//printme(47);
/**
 *  let newNumber = 47 * 10;
    let newernumber = newNumber + 15;

    console.log(newernumber);
 **/

//printme(100);

/*let sprintTimes = [12.0, 11.9, 11.89, 11.5, 13, 15];

sprintTimes.sort();

for (let i = 0; i < sprintTimes.length; i++) {
    console.log(i + 1 + ". place: " + sprintTimes[i]);
}*/

function getFirstName() {
    return "Linus";
}

function getLastName() {
    return "Torvalds";
}

function printGreeting(firstNameFunction, lastNameFunction) {
    const firstName = firstNameFunction();

    const lastName = lastNameFunction();

    const greeting = `Hello ${firstName} ${lastName}.`;
    console.log(greeting);
}

function printGreeting2(firstName, lastName) {
    const greeting = `Hello ${firstName} ${lastName}`;
    console.log(greeting);
}

printGreeting(getFirstName, getLastName);
printGreeting(getLastName, getFirstName);
printGreeting2(getLastName(), getFirstName());
