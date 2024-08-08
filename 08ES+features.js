// Activity 1:
// Task 1:

let name = "sahid"
let age = 21

console.log(`My name is ${name} and i am ${age} years old.`);

// Task 2:

console.log(`hello my name is sahid,
    and i am from Gujarat,
    i am 21 years old.
    `);

    // Activity 2: Destructuring
    // Task 3: use array destructuring to extract the frist and second element from an array of number and log the value

    const number = [10,20,30,40,50];

    // console.log(number[0]);
    // console.log(number[1]);
   const [firstElement, SecondElement] = number;
   
   console.log(firstElement,SecondElement);
  
   
    
//    Task 4: use object destructuring to extract the title and author name from a book object and log the value.

const book ={
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 200
}
 
const {title, author} = book;
console.log(`Tile= ${title}, Author= ${author}`);

// Activity 3: Spread and Rest Operators
// Task 5: use the spread operator to create a new array that  includes all existing array plus additional  element and log to the new array to the console. 
const existingArray = [1,2,3,4,5];
const newArray = [...existingArray, 6,7,8,9]
console.log("new array",newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result. 
function sumAll(...numbers){
    return numbers.reduce((total,number)=> total + number, 0);
}
console.log(sumAll(1,2,3,4,5));
console.log(sumAll(12,12,12,12,12));

// Activity 4: Default Parameters.

// Task 7: write a function that takes two parameter and return their product, with a second parameter having a default value of 1.
function multiply(a, b = 1){
    return a*b
}


console.log(multiply(12,12));
console.log(multiply(12));

// Activity 5: Enhanced object Literals

// Task 8: use enhanced object literals to create an object with method and properties , and log the object to the console.

const Name = "Google"
const location = "new york"
const established =  2024

const company = {
    Name,
    location,
    established,

    getInfo(){
        return `${this.Name} was established in the year ${this.established} and is located in ${this.location}.`;
    }
}

console.log(company);
console.log(company.getInfo());

// Task 8: create a object with compute property names based on variables and log the object to the console.  

const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';

const person = {
    [key1] : 'sahid',
    [key2] : 'balwa',
    [key3] : 21
}

console.log(person);
