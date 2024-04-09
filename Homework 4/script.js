//Tablica na liczby
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map(n => {
    const number = {value: n*2};
    return number;
});

console.log(doubleNumbers);

//Tablica na osoby
const persons = [
    {name: "Jan",
    surname: "Kowalski"},
    {name: "Michał",
    surname: "Nowak"},
    {name: "Joanna",
    surname: "Kowalska"},
    {name: "Karolina",
    surname: "Nowak"}
];

const names = persons.map(person => {
    return person.name;
});
console.log(names);