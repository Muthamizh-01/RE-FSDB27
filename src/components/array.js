//let numbers = [4, 6, 2, 3, 1, 5];

let numbers = new Array(4, 6, 2, 3, 1, 5);

// here array is class and is of constructor, and the object is numbers
// for the object multiple methods can be created

// to push an element to the array -
//  1.   to the end of the array - push method
numbers.push(10);

//  2.   to the beginning of the arrany - unshift method
numbers.unshift(12);

//  3.   to insert anywhere using the index
// splice args: index, should we delete any elements from the index(deleteCount), elements to be inserted
numbers.splice(4, 0, 15);

//  4.   to delete an element from the end of the array ( only one element at a time)
numbers.pop();

// 5. to delete an element from the beginning of the array ( only one element at a time)
numbers.shift();

//  6. to delete an element anywhere in the array
numbers.splice(2, 1);

//  7. slice element treats like a bread and cuts it
console.log(numbers.slice(0, -2));

// NOTE
// in-place methods - the methods that modify the original array - PUSH, UNSHIFT, SPLICE, POP, SHIFT
//  SLICE - non in-place method

// 8. to search an element in an array - returns true or false
console.log(numbers.includes(50));

// 9. to find the index location - returns index value, if the number is not in array returns -1
console.log(numbers.indexOf(15));

//MAPS - example 1
function square(number) {
  console.log(number ** 2);
}
// square(5);  here simply the square is done to the data 5
// here below the numbers array, each element is squared
numbers.map(square);

//example 2
function cube(number) {
  return number * 3;
}
//return the value and print outside to make it in array format
console.log(numbers);
console.log(numbers.map(cube));

//FILTER METHOD
function isEven(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
//isEven(4);
// display the number in the array is even or odd
numbers.filter(isEven);

// example -2, here filter function applies a logic and displays the required number

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//isEven(4);
// display the number in the array is even or odd
console.log(numbers);
console.log(numbers.filter(isEven));
// output is displayed only the even numbers which is the true value in the above condition
// here the else or false statment can be deleted, it automatically assumes the reamining false

// REDUCE - here reduce method sums all the numbers in the array - RETURNS A SINGLE VALUE
function sum(a, b) {
  return a + b;
}
console.log(numbers.reduce(sum));

//CLASS
// --- a class is a blueprint for creating objects with shared structure (properties) and behavior (methods).
// --- It’s used in object-oriented programming to organize code in a reusable, logical way.

class Student {
  constructor() {
    this.name = "";
    this.location = "";
    this.rollno = "";
  }
}

const student101 = new Student();

student101.name = "ABC";
student101.location = "Madurai";
student101.rollno = "101";

console.log(student101);

const student102 = new Student();
console.log(student102);
