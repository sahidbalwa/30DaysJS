// Activity 1:Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(number){
    if (number % 2 === 0) {
        console.log(number + "Number is Even");
    }else{
        console.log(number+ "Number s Odd");
    }
}
checkEvenOdd(19);
checkEvenOdd(20);

// Task 2: Write a function to calculate the square of a number and return the result.

function calculateSquare(number){
    //console.log(number * number);
    return number * number;
}
//calculateSquare(20);
let result1= calculateSquare(3);
let result2= calculateSquare(11);
console.log(result1);
console.log(result2);

// Activity 2: Function Expression
// Task 3: Write a function exoression to find the maximum of the two numbers and log the result.

const maxnum = function (num1,num2){
    if(num1 > num2){
        console.log(num1+" is the maximum number.");
    }else if(num2 > num1){
        console.log(num2+ " is the maximum number.");
    }else {
        console.log(" both numbers are equal.");
    }
}

maxnum(10,20); //20 is the maximum number.
maxnum(5,5);   //both numbers are equal.

// Task 4: Write a function expression to concatenate two string and return the result.
const addString = function (str1,str2){
    return str1 += str2; 
};
let result = addString("sahid"," balwa")
console.log(result);

// Activity 3: Arrow functions
// Task 5: Write an arrow funntion to calculate the sum of two number and return the result.
//const sum = (val1, val2) => val1 + val2; // also create like this.
const sum = (val1,val2) =>{
    return val1 + val2;
};
let total = sum(10,20);
console.log(total);

// Task 6: Write a arrow function to check if  a string contain specific character and return the boolean value.

const containCharacter = (str, char) => str.includes(char);

let result_1 = containCharacter("sahid balwa","s"); //true
let result_2 = containCharacter("Hello World","x"); //false

console.log(result_1);
console.log(result_2);

// Activity 4: Function Parameters and default values
// Task 7: Write a function that takes two parameters and return their product. Provide default value for the second parameter.

function multiply (a,b = 2){
    return a * b ;
}
let Result1 = multiply(10,5);
let Result2 = multiply(10); // 20 (10 * 2 default value)

console.log(Result1);
console.log(Result2);

// Task 8: Write a function that takes person's name and age and return greeting message. Provide a default value for the age.

function greet(name ,age = "unkhown"){
    return `Hello ${name} you are ${age} years old`;
}

let result3 = greet("sahid",21);
let result4 = greet("Hitesh");
console.log(result3);
console.log(result4);

// Activity 5: Higher-Order function 
// Task 9: Write a higher order function that takes a function and a number, add calls the function many time. 
function repeatFunction(fn, times){
    for(let i = 0 ;i < times; i++){
        fn();
    }
}
const sayHello = () => console.log("Hello!");
repeatFunction(sayHello, 3);

//Task 10: Write a higer order function that takes two functons and value, applies the first function to the value, and than applies the second funtion to the result.

function applyFunctions(fn1, fn2, value) {
    const firstResult = fn1(value); 
    return fn2(firstResult);      
}

const addFive = num => num + 5;
const square = num => num * num;

const result_5 = applyFunctions(addFive, square, 3); // result will be 64

console.log(result_5); // Logs: 64
