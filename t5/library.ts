interface User {
    user: string,
    listBook:  string[]
}

interface Book {
    title: string,
    author: string,
    year: number
}


let viswa:  User = {
    user: "viswa",
    listBook: ["java", "python", "c++"]
}

let book1: Book = {
    title: "Effective Java",
    author: "Joshua Bloch",
    year: 2008
};

let book2: Book = {
    title: "Learning Python",
    author: "Mark Lutz",
    year: 2013
};

let book3: Book = {
    title: "The C++ Programming Language",
    author: "Bjarne Stroustrup",
    year: 2013
};

function addBook(user: User, book:  Book) {
    user.listBook.push(book.title);
}

function removeBook(user: User, book:  Book) {
     let index = user.listBook.indexOf(book.title);
    if(index != 1){
        user.listBook.splice(index, 1);
    }
}


function printLibrary(library: User) {
    console.log(library.user);
}

console.log(viswa);
addBook(viswa,book1);
console.log(viswa);


console.log(viswa);
removeBook(viswa,book1);
console.log(viswa);

