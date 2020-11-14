var person = {
    firstName: "Lionel",
    lastName: "Messi",
    age: 33,
    club: "Barcelona",
    sayHello: function () {
        console.log(this.firstName);
    },
};

var soccerClub = {
    name: "Barcelona",
    city: "Barcelona",
    country: "Spain",
    players: ["Messi", "Ter Stegen"],
    adress: {
        streetName: "Barcelona street",
        streetNumber: 1,
        postalNumber: 10000,
    },
};

var person1 = {
    firstName: "Lionel",
    lastName: "Messi",
    age: 33,
    club: "Barcelona",
    sayHi: function () {
        console.log("Hi everybody! My name is " + this.firstName);
    },
};

var person2 = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 34,
    club: "Juventus",
    sayHi: function () {
        console.log("Hi everybody! My name is " + this.firstName);
    },
    sayHelloToAnotherPerson(person) {
        console.log(
            "Hi " + person.firstName + "! My name is " + this.firstName
        );
    },
    increaseAge: function () {
        this.age += 1;
    },
};

person2.sayHelloToAnotherPerson(person2);

sayHi2(person2);

/////

var messi = {
    firstName: "Lionel",
    lastName: "Messi",
    age: 33,
    club: "Barcelona",
};

var lewa = {
    firstName: "Robert",
    lastName: "Lewandowski",
    age: 33,
    club: "Barcelona",
};

var cr7 = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 33,
    club: "Barcelona",
};

var soccerPlayers = [messi, lewa, cr7];

////

var person = {
    firstName: "Lionel",
    lastName: "Messi",
    age: 33,
    club: "Barcelona",
};

var car = {
    brand: "Fiat",
    model: "Multipla",
    coolness: -100,
};

var array = [person, car];

for (let i = 0; i < array.length; i++) {
    let keys = Object.keys(array[i]);
    for (let j = 0; j < keys.length; j++) {
        console.log(keys[j] + ": " + array[i][keys[j]]);
    }
}
