// Day 2: Opearators

// Activity: 1 Arithmetic Operations

//Task 1: Write a program to add Two numbers and log the result to the console.

let a= 10
let b= 20
console.log("add",a+b)

// Task 2:  Write a program to subtrack Two numbers and log the result to the console.

console.log("sub",b-a);

// Task 3:  Write a program to multiply Two numbers and log the result to the console.

console.log("mul",a*b);

// Task 4:  Write a program to divide Two numbers and log the result to the console.

console.log("div",b/a);

// Task 5: Write a program to the find the remainder when one number is devided by another and log the result to the console.

let v1 =27
let v2 =4
let remainder= v1 % v2
console.log(remainder); // 3

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let num = 10
console.log(num += 1);

// Task 7: Use the -= operator to subtrack a number from a variable and log the result to the console.

let Num = 10
console.log(Num -= 1);

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.


let A=10
let B=20
if(A>B){ // Using > Greater than
    console.log("A is bigger than B");
}
else{
    console.log("B is bigger than A");
}

if(A<B){ // Using < Greater than
    console.log("B is bigger than A");
}
else{
    console.log("A is bigger than B");
}

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let comp1 = 100
let comp2 = 150
let comp3 = 100
let comp4 = 150
console.log(comp1>=comp2);// false
console.log(comp1<=comp2);// true

console.log(comp1>=comp3);//true
console.log(comp4<=comp2);//true

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log(10==10);//true

console.log(10===10); // true

console.log("10"==10); // true

console.log("10"===10); //false Note: it compare the type of both value

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let x= 10
let y= 5
console.log(x < 20 && y > 1) // true
console.log(x < 20 && y >10); // false

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

console.log(x < 20 || y > 1) // true
console.log(x < 20 || y >10); // true
console.log(x < 5 || y > 10); // false

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

console.log(10 != 5); //true
console.log(10 != 10);//false

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary opearator to check if number is positive or negative and log the result to thr console.

const number = -10;
const result = number >= 0 ? "The number is positive" : "The number is negative";

console.log(result); //The number is negative