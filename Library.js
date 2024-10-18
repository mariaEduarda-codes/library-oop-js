export default class Library {
    #books

    constructor() {
        this.#books = [];
    }

    listBooks() {
        return this.#books;
    }

    addBook(book) {
        this.#books.push(book);
    }

    removeBook(title) {
        this.#books = this.#books.filter(book => book.getTitle() !== title);
    }

    findBookByTitle(title) {
        return this.#books.filter(book => book.getTitle() === title);
    }

    listBookByCategory(category) {
        return this.#books.filter(book => book.getCategories().includes(category));
    }
}