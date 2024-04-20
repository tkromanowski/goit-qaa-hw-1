// Czym jest THIS
// Słowo kluczowe this odnosi się do kontekstu, w którym ma zostać uruchomiony fragment kodu, taki jak treść funkcji. 
// Najczęściej jest używany w metodach obiektowych, gdzie odnosi się do obiektu, do którego jest dołączona metoda.
// Umożliwia w ten sposób ponowne użycie tej samej metody na różnych obiektach.

//Maciej

const Maciej = {
    username: "Maciej",
    showName() {
        console.log(this.username); // THIS odnosi się do zawartości username i przedstawia wpisane tam imię.
    },
};

Maciej.showName();

//Półka na książki
const Authors = {
    authors: ["J.K. Rowling", "Julian Tuwim"],
    getAuthors() {
        return this.authors; // THIS odnosi się do zawartości authors i przedstawia wpisanych tam autorów
    },
    addAuthor(authorName) {
        this.authors.push(authorName); // Po wpisaniu dodatkowych autorów poniżej (Authors.addAuthor ("XYZ"), THIS odczutje ich jako element tablicy authors
    },
};

console.log(Authors.getAuthors());
Authors.addAuthor("Adam Mickiewicz"); // ["J.K. Rowling", "Julian Tuwim", "Adam Mickiewicz"] 
Authors.addAuthor("Juliusz Słowacki"); // ["J.K. Rowling", "Julian Tuwim", "Adam Mickiewicz", "Juliusz Słowacki"]
Authors.addAuthor("Jan Kochanowski") // ["J.K. Rowling", "Julian Tuwim", "Adam Mickiewicz", "Juliusz Słowacki", "Jan Kochanowski"]