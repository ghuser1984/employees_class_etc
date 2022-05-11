// working with different array methods and arrow functions
// also checking lodash library
const { indexOf } = require('lodash')
let _ = require('lodash')
// starting with forEach

let myPeople = [{'name': 'Nikita','occupation':'construction','age':29},
{'name':'Irina','occupation':'unknow','age':25},{'name':'Volodya','occupation':'unknown','age':25},
{'name':'Evegenii','occupation':'logistics','age':39},
{'name':'Damir','occupation':'exMilitary','age':35}]

// myPeople.forEach((person,index) => console.log(`${index+1}: My name is ${person.name} and Iam ${person.age} years old`))

// continue with filter
let myOldPeople = myPeople.filter((person) => person.age>=30)
// myOldPeople.sort(function(a,b){return a.age-b.age})
myOldPeople.sort((a,b) => (a.age-b.age))
myOldPeople.forEach((person,index) => console.log(`${index+1}: My name is ${person.name} and Iam ${person.age} years old`))

class Person {
  constructor(name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
  Print(){
    console.log(`My name is ${this.name}. Iam ${this.age} years old ${this.occupation}.`)
  }
  changeOcc(occupation){
    this.occupation = occupation;
  }
  increaseAge(){
    this.age+=1;
  }
}

let dmitrii = new Person('Dmitrii',39,'geologist')
let Evegenii = new Person('Evgenii', 39,'Logistics')
let Damir = new Person('Damir',35,'salesperson')

let oldGuys = []
oldGuys.push(Evegenii)
oldGuys.push(dmitrii)
oldGuys.push(Damir)
console.log(oldGuys)

oldGuys.sort((a,b) => (a.age-b.age))
oldGuys.forEach((guy) => guy.Print())

let oldGuysUp = oldGuys.filter((guy) => guy.age > 35)
console.log(oldGuysUp)


// let exp = [1,2,3,4]
// let chunkd = _.chunk(exp,2)
// console.log(chunkd)
// expsq = exp.map((el) => (el**2))
// console.log(expsq)

class workPerson extends Person {
  constructor(name,age,occupation,workingPlace){
    super(name,age,occupation);
    this.workingPlace = workingPlace;
  }
  Print(){
    console.log(`My name is ${this.name}. Iam ${this.age} years old ${this.occupation} and I\'m working at ${this.workingPlace}.`)

  }
  changeJob(workingPlace){
    this.workingPlace=workingPlace;
  }
}

let Vovan = new workPerson('Vova',25,'WebDev','Secret_place')

Vovan.Print()

class Work {
  constructor(employer,salary){
    this.employer = employer;
    this.salary = salary;
    this.employees = [];
  }
  
  addEmployee(employee){
    if (employee instanceof workPerson && this.employees.indexOf(employee) === -1){
      employee.changeJob(this.employer)
      this.employees.push(employee)  
    }
    else {console.log('Cannot hire this person or whoever it is ')}
  }

  fireEmployee(employee){
    if (employee instanceof workPerson && this.employees.indexOf(employee) !== -1){
      this.employees.splice(indexOf(employee),1)
    } else { console.log('Failed to fire employee')}
  }

  listEmployees(){
    if (this.employees.length>0){
      this.employees.forEach((person, index) => console.log(`${index+1}. Name: ${person.name}, age: ${person.age}`))
    } else {console.log('No employees at the moment')}
  }
}

let KFC = new Work('KFC','9000')
KFC.listEmployees()
KFC.addEmployee(dmitrii)
KFC.addEmployee(Vovan)
Vovan.Print()
KFC.listEmployees()
