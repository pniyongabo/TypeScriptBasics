let num1 = 1; // implicit type - primitive type - number
let num2: number = 2; // explicit type
// num1 = "1"; // error that vanilla JS would not catch
// num2 = "2"; // error

let num3: any = 3; // adds flexibility especially when working with external APIs
num3 = "3"; // this works because we used type "any"

let num4; // inferred type "any"
num4 = 4;
num4 = "4";


