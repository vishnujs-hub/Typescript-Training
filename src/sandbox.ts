// 1.Define a function that displays a hello message as output
let hello = () => {
  console.log("Hello");
};
hello();

//2.Define a function that will print the greatest among three numbers
const greatestAmong = (a: number, b: number, c: number) => {
  const max = Math.max(a, b, c);
  console.log(max);
  return max;
};
greatestAmong(5, 10, 15);

//3.Define a function to find power of a number
// hint: accept number and exponent as parameter if no value is passed as exponent then use default parameter value.
const power = (a: number, b: number = 2) => {
  const result = Math.pow(a, b);
  console.log(result);
  return result;
};
power(5, 3);
power(5); // without exponent

// 4.Define a function that will accept first name and last name then print the full name of the user.The last name is an optional parameter.If it is not present then print the first name as full name
// hint:accept first name and optional parameter last name return full name
const printName = (fName: string, lName?: string) => {
  if (lName) {
    console.log(fName + " " + lName);
  } else {
    console.log(fName);
  }
};
printName("Vishnu", "Jayachandran");
printName("Vishnu");

// 5.Define an arrow function that will find the square of a given number.
const square = (a: number) => {
  console.log(a * a);
};
square(5);

// 6.Define an array of numbers and double each element with array function
const array: number[] = [2, 3, 4];
const newArray = array.map((value: number) => value * 2);
console.log(newArray);

// 7.Define an array that stores numbers/string and loop through the array to print the elements
const mixedArray: (string | number)[] = [2, "hello", 4, "world"];
mixedArray.forEach((value: number | string) => console.log(value));

// 8.Define the type of Product object.Create an array containing different product objects.
// Loop through the array and print the product details
type Product = {
  id: number;
  name: string;
};
const products: Product[] = [
  { id: 1, name: "laptop" },
  { id: 2, name: "mouse" },
  { id: 3, name: "keyboard" },
];
products.map((item: Product) => console.log(item.id + " " + item.name));
// 9.FIlter an employee list to display only employees who joined before August 2024
// Define employee object list using the following format
type Employee = {
  id: number;
  name: string;
  department: {
    id: number;
    name: string;
  };
  hireDate: string; // Format: "YYYY-MM-DD"
};

const employeeArray: Employee[] = [
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

const result = employeeArray.filter((emp: Employee) => {
  const hireDate = new Date(emp.hireDate);
  const cutoffDate = new Date("2024-08-01");
  return hireDate < cutoffDate;
});
console.log("employee before august", result);

// Define a class Student with id,name,marks (tuple of subject and score), and grade.
// Define constructor to initialise id,name
// Define a method to add suject and score.
// Define private method to calculate average.
// Define a method that return a tuple of name and final result (pass/fail).
class Student {
  id: number;
  name: string;
  marks: [string, number][] = [];
  grade: string | null = null;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  addSubjectScore(subject: string, score: number): void {
    this.marks.push([subject, score]);
  }

  private calculateAverage(): number {
    if (this.marks.length === 0) return 0;
    const total = this.marks.reduce((sum, [_, score]) => sum + score, 0);
    return total / this.marks.length;
  }
  getFinalResult(): [string, string] {
    const average = this.calculateAverage();
    const result = average >= 40 ? "Pass" : "Fail";
    return [this.name, result];
  }
}
const student1 = new Student(1, "Alice");
student1.addSubjectScore("Maths", 90);
const studentResult = student1.getFinalResult();
console.log("result", studentResult, "studentDetails", student1);
