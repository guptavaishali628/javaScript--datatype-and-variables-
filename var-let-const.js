//let, var, cosnt are used to define the variables in js:
//var : variable scan be re-declared & updated. Aglobal scope variable.
//let : variable cannot be re-declared but can be updated. Ablock scope varibale.
//const : variable cannot be re-declared or updated. A block scope variable.


// note--> we do not used to prefer 'var' in our code after 2015:
// note--> 'let' and 'const' are discoverd in 2015 under ES6(satndard js):

var fullName = "Vaishali Gupta";
console.log(fullName);

const age =24;
console.log(age);

let totalPrice = 1000;
console.log(totalPrice)

// bydefault koi bhi variable main value assign ni h it means that it is undefined this is not supported by const;

let a;
console.log(a) //undefined