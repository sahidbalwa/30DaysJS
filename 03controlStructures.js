// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative or zero and log the result to the console.

let number = 0

if(number > 0 ){
    console.log("Number is positive");
}else if (number < 0){
    console.log("Number is negative");
}else{
    console.log("Number is Zero");
}

// Task 2: Write a program to check a person is eligible to vote (age>=18) and log result to the console.
let person = 18
if (person >= 18) {
    console.log("Person eligible for a vote");
} else {
    console.log("Person don't eligible for a vote");
}

// Activity 2: Nested If-Else Statement
// Task 3:Write a program to find lagest of three numbers using nested if-else statements.

let num1=10
let num2=5
let num3=30
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log("The largest number is" +num1);
    }else{
        console.log("The largest number is" +num3);
    }
}else{
    if (num2 >=num3) {
        console.log("The largest number is" +num2);
    }else{
        console.log("The largest number is" +num3);
    }
}

// Activity 3: Switch Case

// Task 4: write a program that uses a switch case to determine day of the week based on to number(1-7) and log to the day name to the console.

let dayNumber = 6

switch (dayNumber) {
    case 1:
        console.log("Sunday");   
        break;
    case 2:
        console.log("Monday");    
        break;
    case 3:
        console.log("Tuesday");    
        break;
    case 4:
        console.log("Wednesday");    
        break;
    case 5:
        console.log("Thursday");    
        break;
    case 6: 
        console.log("Friday");    
        break;
    case 7:
        console.log("Saturday");    
        break;

    default:
        console.log("Invalid number, Enter between 1 to 7.");
        break;
}

// Task 5:
let score = 77
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >=80 && score < 90):
        grade = "B";
        break;
    case (score >=70 && score < 80):
        grade = "C";
        break;
    case (score >= 40 && score < 70):
        grade = "D";
        break;
    case (score < 40):
        grade = "F"                
        break;
    default:
        console.log("Invalied score");
        break;
}

console.log("The grate is " + grade);

// Activity 4: Conditional (Ternary) Operator

// Task 6: write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num = 10
let result = (num % 2 === 0) ? "Number is even" : "Number is odd";
console.log(result);

// Activity 5: Combining Conditions

// Task 7: Write program to check if year is a leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400)and log the result to the console.

let year = 2024 // 2024 is a leap year
//let year = 2015 // 2015 is not a leap year
let checkYear = year/4
if (checkYear %2 === 0) {
    console.log(year+ " is a Leap Year");
}else{
    console.log(year + " is not a leap year");
}
