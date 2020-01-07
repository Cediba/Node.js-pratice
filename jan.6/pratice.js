//a Create an arrow function named “mySum”.
// (1) Your function should accept an arbitrary number of arguments using the REST
// operator.
// (2) Your function should return the sum of all of its inputs.

const mySum = require('./mySum');

console.log(mySum(1,2,3,4));



//b Put this function in a different module and export it. Then, in this module, import
// the module that contains your function and call it from this module.



//c
// Create an array of numbers named “myArr”. Your array may have any length (try
//     different lengths to test it).
const myArr = [1,2,3,4,5]
console.log(myArr);

//d Call your function passing as arguments the members of myArr array using the
// SPREAD operator. Assign the result to a “result” variable and console log it.
const result = (mySum(...myArr));
console.log(result)

//e Create a new array named “mySecondArr”. Map the contents of your myArr array to
// mySecondArr array using an anonymous function that multiplies each member of
// myArr by 2.
const mySecondArr = myArr.map(item => {
    return item *2
})

console.log(mySecondArr);

// f) Filter the contents of your mySecondArr using an anonymous function that console
// logs the numbers above average number (you’ll need to find the average first).

const average = mySum(...mySecondArr) / mySecondArr.length;

console.log(mySecondArr.filter(num => average<num));

// g) Use setTimeout() function. Pass it a callback function as parameter that console logs
// “Goodbye” after 3 seconds.
const sayGoodbye = () => {
    console.log("Good Bye")
};
setTimeout(sayGoodbye,3000);


// h) Create an “Employee” object that has the following key-value pairs: “name”,
// “email”, “department” and “startDate”.

const Employee = {name:"" , email:"", department:"", startDate:""} 

// i) Destructure your object to create a new object, called “Person”, that only has name
// and email keys (and the corresponding values).

const {name, email} = Employee;
const person = {
    name: name,
    email: email
};