import readline from 'readline';
import Book from "./Book.js";
import Library from "./Library.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askUser(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function mainMenu() {

    console.log(`Welcome to our Library Management System!`);
    console.log();
    console.log(`------------------- Menu ----------------`);
    console.log();
    console.log(`1 - Add a new book`);
    console.log(`2 - Remove books by title`);
    console.log(`3 - Find available books to borrow by title`);
    console.log(`4 - List all books`);
    console.log(`5 - Find books by category`);
    console.log(`6 - Borrow or return a book`);
    console.log(`7 - Quit`);

    const input = await askUser('Type the number of the action you want to perform: ');

    switch (input) {
        case '1':
            console.log(`Add a new book`);
            const bookTitle = await askUser('Book Title: ');
            const bookAuthor = await askUser('Book Author: ');
            const bookYearOfRelease = await askUser('Year of Release: ');
            const pages = await askUser('Number of Pages: ');
            const categories = await askUser('Categories (comma separated: ');

            const newBook = new Book(bookTitle, bookAuthor, bookYearOfRelease, pages, false, categories.split(','));
            library.addBook(newBook);
            console.log('Book added successfully!');
            break;
        case '2':
            console.log(`Remove books by title`);
            const bookTitleToRemove = await askUser('Book Title you wish to remove: ');

            const bookExists = library.listBooks().some(book => book.getTitle() === bookTitleToRemove);
            if (bookExists) {
                library.removeBook(bookTitleToRemove);
                console.log('Book removed successfully!');
            } else {
                console.log('There is no such title.')
            }
            break;
        case '3':
            console.log('Find available books to borrow by title');
            const bookToFind = await askUser('Book Title you wish to find: ');

            const bookToFindExists = library.listBooks().find(book => book.getTitle() === bookToFind);
            if (bookToFindExists) {
                if (bookToFindExists.getIsBorrowed() === false) {
                    console.log(`${bookToFindExists.getTitle()} is available!`);
                } else {
                    console.log(`The book ${bookToFindExists.getTitle()} is borrowed.`);
                }
            } else {
                console.log(`There is no such book..`);
            }
            break;
        case '4':
            console.log('Listing All Books');
            library.listBooks().forEach(book => console.log(book.getTitle()));
            break;
        case '5':
            console.log('Find books by category');
            const categoryToFind = await askUser('Category to find: ');

            const categoryToFindExists = library.listBooks().filter(book => book.getCategories().includes(categoryToFind));
            if (categoryToFindExists.length > 0) {
                categoryToFindExists.forEach(book => console.log(book.getTitle()));
            } else {
                console.log('No books found with the desired category.')
            }
            break;
        case '6':
            console.log('Borrow or return a Book');
            const bookToBorrow = await askUser('Book Title: ');

            const bookToBorrowExists = library.listBooks().find(book => book.getTitle() === bookToBorrow);
            if (bookToBorrowExists) {
                if (bookToBorrowExists.getIsBorrowed() === false) {
                    bookToBorrowExists.toggleBorrowStatus();
                    console.log(`You've borrowed the book ${bookToBorrowExists.getTitle()}. Return it next week`);
                } else {
                    bookToBorrowExists.toggleBorrowStatus();
                    console.log(`You've returned the book ${bookToBorrowExists.getTitle()}.`);
                }
            } else {
                console.log('There is no such book.')
            }
            break;
        case '7':
            console.log(`Exiting...`);
            rl.close();
            return;
        default:
            console.log('Type the number of a valid option.')
    }

    await mainMenu();
}

const library = new Library();

mainMenu();