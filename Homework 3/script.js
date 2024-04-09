// Tablica na owoce
const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];
console.log(fruits)

//Tablica na numery
const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];
const wyznacznik = 5;

for(const number of numbers) {
    if (number > wyznacznik) {
        console.log(`Liczba wieksza niż ${wyznacznik}: ${number}`)
    }
}