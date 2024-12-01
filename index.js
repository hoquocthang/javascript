var a = 'hello'
let b = 'world'
const c = 5
console.log(a + " " + b)
//number
let age = 25
let pi = 3.14
let big = 1e6

//boolean
let isLoginIn = true
console.log(isLoginIn);

//String
let firstName = 'Thang'
let lastName = "Thang"
let hello = `Hello ${firstName}`
console.log(hello)

//Null
let user = null
console.log(user);
//Undefined
let password
console.log(password)

//Object
let userObject = {
    name: 'Thang',
    age: 25,
    isStudent: true,
}
console.log(userObject.name)
console.log(userObject['age'])
userObject.isStudent = false
console.log(userObject)
/////////////
let x = null ?? 'thang'
console.log(x);
///////////
const ag = 21;
ag > 21 ? console.log('da du') : console.log('ko du');
//function
// function greet(name) {
//     console.log(`xin cho ${name}`);
    
// }
// greet('thang')
const greet = function(name) {

}
const greet2 = (name) => {}

const arr = ['thang', 'lam', 'linh']
//console.log(arr.length);
for (const value of arr) {
    console.log(value);
    
}