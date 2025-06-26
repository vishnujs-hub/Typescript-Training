"use strict";
// 1.Define a function that displays a hello message as output
let hello = () => {
    console.log("Hello");
};
hello();
//2.Define a function that will print the greatest among three numbers
const greatestAmong = (a, b, c) => {
    const max = Math.max(a, b, c);
    console.log(max);
    return max;
};
greatestAmong(5, 10, 15);
//3.Define a function to find power of a number
// hint: accept number and exponent as parameter if no value is passed as exponent then use default parameter value.
const power = (a, b = 2) => {
    const result = Math.pow(a, b);
    console.log(result);
    return result;
};
power(5, 3);
power(5); // without exponent
// 4.Define a function that will accept first name and last name then print the full name of the user.The last name is an optional parameter.If it is not present then print the first name as full name
// hint:accept first name and optional parameter last name return full name
const printName = (fName, lName) => {
    if (lName) {
        console.log(fName + " " + lName);
    }
    else {
        console.log(fName);
    }
};
printName("Vishnu", "Jayachandran");
printName("Vishnu");
// 5.Define an arrow function that will find the square of a given number.
const square = (a) => {
    console.log(a * a);
};
square(5);
// 6.Define an array of numbers and double each element with array function
const array = [2, 3, 4];
const newArray = array.map((value) => value * 2);
console.log(newArray);
// 7.Define an array that stores numbers/string and loop through the array to print the elements
const mixedArray = [2, "hello", 4, "world"];
mixedArray.forEach((value) => console.log(value));
const products = [
    { id: 1, name: "laptop" },
    { id: 2, name: "mouse" },
    { id: 3, name: "keyboard" },
];
products.map((item) => console.log(item.id + " " + item.name));
const employeeArray = [
    {
        id: 1,
        name: "Alice Johnson",
        department: {
            id: 101,
            name: "Engineering",
        },
        hireDate: "2022-06-15",
    },
    {
        id: 2,
        name: "Brian Smith",
        department: {
            id: 102,
            name: "Marketing",
        },
        hireDate: "2023-01-10",
    },
    {
        id: 3,
        name: "Carla Gomez",
        department: {
            id: 103,
            name: "Human Resources",
        },
        hireDate: "2021-09-01",
    },
    {
        id: 4,
        name: "Daniel Lee",
        department: {
            id: 104,
            name: "Finance",
        },
        hireDate: "2020-03-20",
    },
    {
        id: 5,
        name: "Eva Patel",
        department: {
            id: 105,
            name: "Research and Development",
        },
        hireDate: "2024-09-12",
    },
];
const result = employeeArray.filter((emp) => {
    const hireDate = new Date(emp.hireDate);
    const cutoffDate = new Date("2024-08-01");
    return hireDate < cutoffDate;
});
console.log("employee before august", result);
