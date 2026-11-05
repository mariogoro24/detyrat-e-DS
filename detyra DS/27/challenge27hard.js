function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.printBook = function() {
        return this.title + " by " + this.author + " has " + this.pages + " pages";
    };
}

var book = new Book("The Hobbit", "J.R.R. Tolkien", 310);
console.log(book.printBook());
