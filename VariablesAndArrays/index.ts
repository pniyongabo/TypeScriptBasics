let num1 = 1; // implicit type - primitive type - number
let num2: number;
num2 = 2; // explicit type
// num1 = "1"; // error that vanilla JS would not catch
// num2 = "2"; // error

let num3: any = 3; // adds flexibility especially when working with external APIs
num3 = "3"; // this works because we used type "any"

let num4; // inferred type "any"
num4 = 4;
num4 = "4";

const arr1 = [];
arr1.push(1);
arr1.push("2");
arr1.push(true);

const arr2: number[] = [];
arr2.push(1);
// arr2.push("2"); // error
// arr2.push(true); // error

interface Person {
    first: string;
    last: string;
    [key: string]: any;
}

const person1: Person = {"first": "Patrick", "last": "Niyongabo", "height": 12}


const arr3: Person[] = [];

arr3.push({"first": "Usain", "last": "Bolt"}); // warnings, auto-complete, and documentation when dealing with large objects

// TUPLES - fixed length array - define the type of each element
type customList = [number, string, boolean?]; // boolean is optional 

const arr4: customList = [1, "two", true];
const arr5: customList= [1, "two"];




