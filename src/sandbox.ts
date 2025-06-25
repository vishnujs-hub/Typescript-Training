// 1.Define a function that displays a hello message as output
let hello = () => {
    console.log("Hello");
}
hello();

//2.Define a function that will print the greatest among three numbers
const greatestAmong = (a: number, b: number, c: number) => {
    const max = Math.max(a,b,c)
    console.log(max);
    return max
}
greatestAmong(5, 10, 15)

//3.Define a function to find power of a number
// hint: accept number and exponent as parameter if no value is passed as exponent then use default parameter value.
const power = (a: number, b: number = 2) => {
     const result = Math.pow(a,b)
     console.log(result);
     return result;
}
power(5,3);
power(5)       // without exponent

// 4.Define a function that will accept first name and last name then print the full name of the user.The last name is an optional parameter.If it is not present then print the first name as full name
// hint:accept first name and optional parameter last name return full name
const printName = (fName : string, lName?: string) => {
    if(lName){
        console.log(fName +" "+ lName)
    }else {
        console.log(fName)
    }

}
printName("Vishnu", "Jayachandran");
printName("Vishnu");

// 5.Define an arrow function that will find the square of a given number.
const square = (a: number) => {
     console.log(a * a)
}
square(5);