// Activity 1: For Loops

// Task 1: Write a program to print numbers from 1 to 10 using a for loop

let i= 10
for(i = 1; i<= 10; i++){
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using for loop

const number = 5
for(let i=1; i<=10;i++){
    const result=number*i;
    console.log(`${number} X ${i} = ${result}`);
}

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum=0
let n=1
while (n <= 10) {
    sum += n;
    n++;
}
console.log("sum of 1 to 10= ",sum);

// Task 4: Write a program to print the numbers from 10 to 1 using a while loop.

let s= 10
while (s >= 1) {
    console.log(s);
    s--;
}

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do while loop.
let d= 1
do {
    console.log(d);
    d++;
} while (d<=5);

// Task 6: Write a program to calculate the factorial of a number using do while loop.

const num=3

let result = 1
let f=1

do {
    result *= f;
    f++;
} while (f <= num);

console.log(`The factorial of ${num} is ${result}`);

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops.
// *
// **
// ***
// ****
// *****

const rowNumber = 5

for(let i= 1; i<=rowNumber;i++){
    
    let rowPattern = " ";
    for(j = 1; j <= i;j++){
        rowPattern += "*";

    }
    console.log(rowPattern);
}

// *****
// ****
// ***
// **
// *


for(let i= rowNumber; i >= 1;i--){
    
    let rowPattern = " ";
    for(j = 1; j <= i;j++){
        rowPattern += "*";

    }
    console.log(rowPattern);
}

//Activity 5: Loop Control Statements

// Task 8: Write a program to print a numbers from 1 to 10, but skip the number 5 using continue statement.

for(let i=1; i<= 10; i++){
    if(i === 5)continue;
    console.log(i);
    
}

// Task 9: Write a program to print a numbers from 1 to 10, but stop the number 7 using break statement.

for(let i= 1; i <= 10; i++){
    if(i === 7)break;
    console.log(i);
}