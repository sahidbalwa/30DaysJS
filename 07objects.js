// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author and year, and log the object to the console.

const book ={
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018
}
console.log(book);

// Task 2: Access and log the title and author properties of the book objects.

console.log("Title:", book.title);
console.log("Author:", book.author);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with a book's and title and author, and log the result of calling this method.

const books ={
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    getSummary: function(){
        return `${books.title} is written by ${books.author} in ${books.year}`
    }
}
console.log(books.getSummary());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const Book ={
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,

    //Method to update object year
    updateYear(newYear) {
        this.year = newYear;
        console.log(this);
    }
};
Book.updateYear(2020);
console.log(Book);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name: 'City Library',
    books:[
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925
        }
    ]
};

console.log(library);

// Task 6: Access and log the name of the library and the title of all the books in ther library.

const Library = {
    name: 'City Library',
    books: [
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925
        }
    ]
};
// Access and log the name of the library
console.log("Library Name:", Library.name);

Library.books.forEach(book => {
    console.log("Book Title:", book.title);
});

//Activity 4: The this keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the books title and year, and log the result of calling this method.

const Librarys = {
    name: 'City Library',
    books: [
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960,
            getTitleAndYear() {
                return `${this.title} (${this.year})`;
            }
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949,
            getTitleAndYear() {
                return `${this.title} (${this.year})`;
            }
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925,
            getTitleAndYear() {
                return `${this.title} (${this.year})`;
            }
        }
    ]
};

// Log the result of calling the method for each book
Librarys.books.forEach(book => {
    console.log(book.getTitleAndYear());
});


// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

const BOOK = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    getTitleAndYear() {
        return `${this.title} (${this.year})`;
    }
};

// Using a for...in loop to iterate over the properties of the book object
for (const property in BOOK) {
    console.log(`${property}: ${BOOK[property]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book Object. 

const book1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    getTitleAndYear() {
        return `${this.title} (${this.year})`;
    }
};

// Log all keys of the book object
const keys = Object.keys(book1);
console.log('Keys:', keys);

// Log all values of the book object
const values = Object.values(book1);
console.log('Values:', values);
