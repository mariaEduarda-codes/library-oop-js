export default class Book {

    #title
    #author
    #year
    #pages
    #isBorrowed
    #categories

    constructor(title, author, year, pages, isBorrowed = false, categories = []) {
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#pages = pages;
        this.#isBorrowed = isBorrowed;
        this.#categories = categories;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    getYear() {
        return this.#year;
    }

    getPages() {
        return this.#pages;
    }

    getCategories() {
        return this.#categories;
    }

    getIsBorrowed() {
        return this.#isBorrowed;
    }

    setTitle(title) {
        this.#title = title;
    }

    setAuthor(author) {
        this.#author = author;
    }

    setYear(year) {
        this.#year = year;
    }

    setPages(pages) {
        this.#pages = pages;
    }

    setCategories(category) {
        this.#categories.push(category);
    }

    toggleBorrowStatus() {
        this.#isBorrowed = !this.#isBorrowed;
    }

    toString() {
        return `Title: ${this.#title}, \nAuthor: ${this.#author}, \nYear: ${this.#year}, \nPages: ${this.#pages}, \nBorrowed: ${this.#isBorrowed}, \nCategories: ${this.#categories.join(', ')}`;
    }

}