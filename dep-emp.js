//Exercise header
let input = require('readline-sync')
console.log('==============================')
console.log(' *** Dependent Employees  *** ')
console.log('==============================')

//Questions
const name = input.question('What is your name? ')
let salary = Number(input.question('What is your current salary? '))
let dependents = Number(input.question('How many dependents have you got? '))
console.clear()

console.log('==============================')
console.log(' *** Dependent Employees  *** ')
console.log('==============================')
console.log(`-The employee ${name} has ${dependents} dependents.`)

//Figuring out the new salary according to the dependents
//If the employee has none dependets increase 5%, if has between 1 and 3 increase 10% and so on...
let newsalary = 0
if(dependents == 0){
    newsalary = salary * 0.05
}else if(dependents <= 3){
    newsalary = salary * 0.10
}else if(dependents <= 6){
    newsalary = salary * 0.15
}else{
    newsalary = salary * 0.18
}
console.log(`-His/Her new salary is ${(newsalary + salary).toFixed(2)} pounds!!`)