// Defining an object

const person = {
    name: "Pauline",
    age: 32,
    likesCoding: true,
    address: {
        street: "123 Fake Street",
        suburb: "Fakeville",
        postcode: 1234
    }
};

// Console.log is a function that prints the value inside the brackets to theterminal, just like Python's print().

console.log(person["address"]["suburb"]);

console.log(person.address.street);


// we can add values to an object using dot notation or square brackets

person.address.state = "QLD";

person["address"]["country"] = "Australia";

console.log(person.address);


