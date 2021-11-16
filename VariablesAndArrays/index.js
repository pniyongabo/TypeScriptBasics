var num1 = 1; // implicit type - primitive type - number
var num2 = 2; // explicit type
// num1 = "1"; // error that vanilla JS would not catch
// num2 = "2"; // error
var num3 = 3; // adds flexibility especially when working with external APIs
num3 = "3"; // this works because we used type "any"
var num4; // inferred type "any"
num4 = 4;
num4 = "4";
