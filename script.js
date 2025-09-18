// condole.log-->used to print output on cansole
console.log("vaishali");
console.log("gupta");
console.log("I love Javascript");

//-----variables and datatype------:
//variable are just like container store some value:
// variable are declared by the let, var, const:

//string
fullname = "vaishali gupta"
console.log(fullname)

//Number
age = 24; 
console.log(age);
price = 99.90; 
console.log(price);

//Null-->it means that value is assign but it is null:
x=null; 
console.log(x);
console.log(typeof(x)) //o/p->object

//undefined--> value is not assigned:
y=undefined; 
console.log(y);
console.log(typeof(y)) // undefined

// boolean type(contain TRUe or FALSE value)

isFollow = false;
console.log(isFollow);
console.log(typeof(isFollow)); // typeof(variable name)--> used to check type of variable data: 

// note-->Js is a dynamically type language(isme hme phle se dtype declare krne ki jarurat ni pdti hai kis type ka data ap store kra rhe h js automatically allocate kr deti at run time):

// arrays-->arr=[values]:
let arr = [1,2,3,4,5];
console.log(arr)
for(let element in arr){
    console.log(element)
}

console.log(typeof(arr)) // ans=object

// object= {key: value}:
const student ={fullName:"vaishali", age:20,
    cgpa: 8.2,
ispass:true};
console.log(student)
console.log(typeof(student)) // object
student["age"]=student["age"]+1;
console.log(student["cgpa"])



