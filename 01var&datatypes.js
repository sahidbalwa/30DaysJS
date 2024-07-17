// Activity 1: variable Declaration

//Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var  num = 100
console.log(num);

// Task 2: Declare a variable using let , assign it a string, and log the value to the console.
let str ="sahid balwa"
console.log(str);

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assing it a boolean value, and log the value to the console.

const blv = true
console.log(blv);

// Activity 3: Data Types

// Task 4: Create a variable using different data types(number,string,boolean,object,array)and log each variable's type using typeof operator.
console.log(typeof num); //Number 

console.log(typeof str); // String

console.log(typeof blv ); // boolean

let obj = {Name: "sahid" , Age:"21", Qualification: "BCA"}

console.log(typeof obj); // object

let arr = [10,20,30,40,50]
console.log(arr);
console.log(typeof arr); // object (NOTE: Arrays are a special type of object in javascript)

// Activity 4: Reassigning Variable

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log to the console.

let myName = "sahid"
console.log(myName); //sahid

myName = "sadik"

console.log(myName); // sadik

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.

const myNum = 10
console.log(myNum); // 10

myNum = 20 // this line will cause an error "typeError" (ERROR: TypeError: Assignment to constant variable.)
console.log(myNum);
 