let person = [
    {
        name: "John Doe",
        age: 21,
        gender: "male",
        contact: "09453452331",
        address: "Philippines",
        email: "johndoe@gmail.com"
    },
    {
        name: "John Dae",
        age: 22,
        gender: "male",
        contact: "09123456789",
        address: "South Korea",
        email: "johndae@gmail.com"
    },
    {
        name: "John Dee",
        age: 23,
        gender: "male",
        contact: "09987654321",
        address: "North Korea",
        email: "johndee@gmail.com"
    },
    {
        name: "John Die",
        age: 24,
        gender: "male",
        contact: "09123459876",
        address: "Russia",
        email: "johndie@gmail.com"
    },
    {
        name: "John Due",
        age: 25,
        gender: "male",
        contact: "09987651234",
        address: "China",
        email: "johndue@gmail.com"
    },
    {
        name: "Olivia White",
        age: 21,
        gender: "female",
        contact: "09012345678",
        address: "Philippines",
        email: "oliviawhite@gmail.com"
    },
    {
        name: "Olivia Red",
        age: 19,
        gender: "female",
        contact: "09876543210",
        address: "Australia",
        email: "oliviared@gmail.com"
    },
    {
        name: "Olivia Pink",
        age: 27,
        gender: "female",
        contact: "09012348765",
        address: "Iraq",
        email: "oliviapink@gmail.com"
    },
    {
        name: "Olivia Green",
        age: 30,
        gender: "female",
        contact: "09876540123",
        address: "Iran",
        email: "oliviagreen@gmail.com"
    },
    {
        name: "Olivia Black",
        age: 47,
        gender: "female",
        contact: "09244451231",
        address: "Afghanistan",
        email: "oliviablack@gmail.com"
    }
];
//for loop
for (let i = 0; i < person.length; i++) {
    //console.log(person[i]);
}
//while loop
let i = 0;
while (i < person.length) {
    //console.log(person[i]);
    i++;
}
//for in
for (let i in person) {
    console.log(i);
}
//for each
person.forEach(function (value, index) {
    console.log(`${index}: ${value.name} \n${value.gender} \n${value.email}`);
})
let forIn = person.forEach
//filter
let filterAge = person.filter(function (data) { return data.age <= 30 });
//map
let ageMapped = person.map(function (data) { return data.age });
//reduce
let sumAge = person.reduce(function (acc, data) { return acc + data.age }, 0);
//console.log(testFilter);