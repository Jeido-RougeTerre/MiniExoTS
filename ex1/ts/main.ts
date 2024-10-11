interface Author {
    name: string;
    birthYear: Date;
    genres: string[];
}

interface Book {
    title: string;
    author: Author;
    pages: number;
    isAvailable: boolean;
}



function createBook(title: string, author: Author, pages: number) : Book {
    return {
        title,
        author,
        pages,
        isAvailable : true
    };
}

function toggleAvailability(book : Book) {
    book.isAvailable = !book.isAvailable;
}

class Library {
    books: Array<Book>;

    constructor(books:Array<Book> = new Array<Book>(0)) {
        this.books = books;
    }

    addBook(book: Book): boolean {
        return this.books.push(book) == 1;
    }

    removeBook(title : string): boolean {
        let book = this.findBookByTitle(title);

        if (book == null) return false;
        

        toggleAvailability(this.books[this.books.indexOf(book)]);
        return true;
    }

    findBookByTitle(title: string) : Book | null {
        for(let book of this.books) {
            if(book.title == title) {
                return book;
            }
        }
        console.log("found nothing");
        return null;
    }

    getBooksByAuthor(authorName: string) : Array<Book> {
        return this.books.filter(book => {
            return book.author.name == authorName;
        })
    }

    listAvailableBooks() : Array<Book> {
        return this.books.filter(book => { return book.isAvailable});
    }
}

let me: Author = {
    name: "Mr. Snapz",
    birthYear: new Date(),
    genres : ["Sci-fi", "Romance"]
};

let nt: Author = {
    name: "Nigel Tomm",
    birthYear: new Date(),
    genres: ["Psychology"]
};

let lib = new Library();

lib.addBook(createBook("les dents de ta mère!", me, 354));
lib.addBook(createBook("Phalenges", me, 1546));

lib.addBook(createBook("The Blah Story", nt, 7_312));

console.log(lib.listAvailableBooks());
console.log(lib.getBooksByAuthor("Mr. Snapz"));
lib.removeBook("Phalenges");
console.log(lib.listAvailableBooks());