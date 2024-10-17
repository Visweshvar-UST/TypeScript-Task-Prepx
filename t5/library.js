var viswa = {
    user: "viswa",
    listBook: ["java", "python", "c++"]
};
var book1 = {
    title: "Effective Java",
    author: "Joshua Bloch",
    year: 2008
};
var book2 = {
    title: "Learning Python",
    author: "Mark Lutz",
    year: 2013
};
var book3 = {
    title: "The C++ Programming Language",
    author: "Bjarne Stroustrup",
    year: 2013
};
function addBook(user, book) {
    user.listBook.push(book.title);
}
function removeBook(user, book) {
    user.listBook.filter(function (obj) { return obj !== book.title; });
}
function printLibrary(library) {
    console.log(library.user);
}
console.log(viswa);
addBook(viswa, book1);
console.log(viswa);
console.log(viswa);
removeBook(viswa, book1);
console.log(viswa);
