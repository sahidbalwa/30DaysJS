// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console. 

const num=[1,2,3,4,5]
console.log(num);

// Task 2: Access the first and last element of the array and log to the console. 
const number = [1,2,3,4,5]

const firstElement = number[0];
const lastElement = number[number.length -1];

console.log("First Element" + firstElement);
console.log("Last Element" + lastElement);

// Activity 2: Array Methods (basic)

// Task 3: Use a push method to add a new number to the end of the array and log the updated array.
const arr=[10,20,30,40];
arr.push(50);
console.log(arr);

// Task 4: Use the pop method to remove last element from the array and log the updated value.
arr.pop(4) //remove 50
console.log(arr); 

// Task 5: Use the shift method to remove first element from the array and log the update array.
arr.shift(); //remove 10
console.log(arr);

// Task 6: Use the unshift method to add a new number to the beginnig of the array log the updated array. 

arr.unshift(100);
console.log(arr);

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const Arr =[1,2,3,4,5]
const newArrUsingMap = Arr.map((x)=> x * 2);

console.log(newArrUsingMap);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array. 
const array = [1,2,3,4,5,6,7,8,9,10]

const newFilterArray = array.filter( x => x % 2 === 0)
console.log(newFilterArray);

// Task 9: Use the reduse method to calculate the sum of all numbers in the array and log the result. 

const Array = [10,20,30,40,50];

const initialValue = 0;
const sum = Array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
);
console.log(sum);

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
const numbers = [1, 2, 3, 4, 5, 6];

for( let i = 0 ; i < numbers.length; i++){
    console.log(numbers[i]);
}

// for( let i = 0 ; i < numbers.length; i++){
//     if(numbers[i] > 4){               // if we want to print only > number than 4
//     console.log(numbers[i]);
//     }
// }

// Task 11: Use the forEach method to iterate over the array and log each element to the console. 

numbers.forEach(number => {
    console.log("forEach - "+number);
})

// Activity 5: Multi-dimensional Array
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix);

// Task 13: Access and log a specific element from two-dimensional array.

const element = matrix[0][2]; //3
const element1 = matrix[1][1];//5

console.log(element);
console.log(element1);