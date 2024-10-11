function createBook(title, author, pages) {
    return {
        title,
        author,
        pages,
        isAvailable: true
    };
}
function toggleAvailability(book) {
    book.isAvailable = !book.isAvailable;
}
class Library {
    constructor(books = new Array(0)) {
        this.books = books;
    }
    addBook(book) {
        return this.books.push(book) == 1;
    }
    removeBook(title) {
        let book = this.findBookByTitle(title);
        if (book == null)
            return false;
        toggleAvailability(this.books[this.books.indexOf(book)]);
        return true;
    }
    findBookByTitle(title) {
        for (let book of this.books) {
            if (book.title == title) {
                return book;
            }
        }
        console.log("found nothing");
        return null;
    }
    getBooksByAuthor(authorName) {
        return this.books.filter(book => {
            return book.author.name == authorName;
        });
    }
    listAvailableBooks() {
        return this.books.filter(book => { return book.isAvailable; });
    }
}
let me = {
    name: "Mr. Snapz",
    birthYear: new Date(),
    genres: ["Sci-fi", "Romance"]
};
let nt = {
    name: "Nigel Tomm",
    birthYear: new Date(),
    genres: ["Psychology"]
};
let lib = new Library();
lib.addBook(createBook("les dents de ta mère!", me, 354));
lib.addBook(createBook("Phalenges", me, 1546));
lib.addBook(createBook("The Blah Story", nt, 7312));
console.log(lib.listAvailableBooks());
console.log(lib.getBooksByAuthor("Mr. Snapz"));
lib.removeBook("Phalenges");
console.log(lib.listAvailableBooks());
