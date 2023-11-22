console.log("Javascript primitive data types are 7");

// Premitve Data types
let nullVariable = null; // Type of null is object
let numberVariable = 30;
let stringVariable = "Humayun";
let booleanVariable = true;
let undefinedVriable = undefined;
let bigIntVariable = BigInt(4000000000);
let symboleVariable = Symbol(description = "I am a symbol")

//Printing all the variable values 
console.log(nullVariable, numberVariable, stringVariable, booleanVariable, undefinedVriable, bigIntVariable, symboleVariable)

//Printing varriable types 
console.log(typeof numberVariable, typeof nullVariable, typeof stringVariable, typeof booleanVariable, typeof undefinedVriable, typeof bigIntVariable, typeof symboleVariable);


// // Premitve Data types - Object in javascript
const objectVariable = {
    "firstname": "Humayun",
    "lastname": "Sikander",
    "age": 27,
    "maritalstatus": "married",
    "gender": "male"
}

//  Printing whole object in javescript
console.log(objectVariable)

// Printing specific value in javascript
console.log(objectVariable["firstname"])

// Value of unexisting key will be undefined
console.log(objectVariable["fullname"])