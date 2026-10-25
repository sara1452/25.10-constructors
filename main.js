//1
function Phone(brand, model) {
    this.brand = brand
    this.model = model
}
Phone.prototype.details = function () {
    console.log(`phone: ${this.brand} ${this.model}`);
}
new Phone("samsung", "S22").details()
//2
function Rectangle(width, height) {
    this.width = width
    this.height = height

}
Rectangle.prototype.area = function () {
    return this.height * this.width
}
console.log(new Rectangle(2, 4).area())
//3
function BankAccount(owner, balance) {
    this.owner = owner
    this.balance = balance
}
BankAccount.prototype.deposit = function (amount) {
    return this.balance + amount
}
BankAccount.prototype.withdraw = function (amount) {
    if (this.balance > amount)
        return this.balance - amount
    else
        console.log("היתרה בחשבונך לא מספיקה");

}
BankAccount.prototype.checkBalance = function (amount) {
    console.log(`היתרה בחשבונך היא: ${this.balance}`);

}
const bankAccount1 = new BankAccount("sara", 150)
bankAccount1.checkBalance()
console.log(bankAccount1.deposit(20))
console.log(bankAccount1.withdraw(30))
//4
function Animal(name) {
    this.name = name
    this.speak = function () {
        console.log(`the ${this.name} make a sound`);
    }
}
function Dog(name) {
    Animal.call(this, name);
    this.bark = function () {
        console.log(`${this.name} barking`);
    }
}
Object.setPrototypeOf(Dog.prototype, Animal.prototype)
const d1 = new Dog("Rocky")
d1.bark()
d1.speak()
//5
function Vehicle(type) {
    this.type = type
    this.describe = function () {
        console.log(`This is a ${this.type} `);
    }
}
function Car(brand) {
    this.brand = brand
    Vehicle.call(this, "car")
    this.info = function () {
        console.log(`this is a brand: ${brand} type: ${this.type}`)
    }
}
Object.setPrototypeOf(Car.prototype, Vehicle.prototype)
const car1 = new Car("bmw")
car1.describe()
car1.info()

//6
function Shape() {
    this.area = function () {
        return 0;
    }
}
function Circle(radius) {
    this.radius = radius
    this.area = function () {
        return this.radius * this.radius * Math.PI
    }
}
function Square(side) {
    this.side = side
    this.area = function () {
        return this.side * this.side
    }
}
console.log(new Circle(3).area());
console.log(new Square(4).area());
//7
class Book{
    constructor(title,author){
        this.title=title
        this.author=author
    }
    info(){
        console.log(`${this.title} by ${this.author}`);  
    }
}
new Book("The hobbit","Tolkein").info()
//8
class Person{
    constructor(name){
        this.name=name
    }
    greet(){
        console.log(`hello i'm ${this.name}`);
        
    }
}
class Student extends Person{
    constructor(name,school){
        super(name)
        this.school=school
    }
    study(){
        console.log(`${this.name} is studing at ${this.school}`);   
    }
}
new Student("Alice","Oxford").greet()
new Student("Alice","Oxford").study()

//9
class Employee{
    #salary
    constructor(salary){
        this.#salary=salary
    }
    getSalary(){
        return this.#salary
    }
    work(){
        console.log("employee is working");    
    }
}
class Manager extends Employee
{
    constructor(salary){
        super(salary)
    }
    work(){
        console.log("manager is managing");
    }
}
const e1=new Employee(4000)
console.log(e1.getSalary());
e1.work()
const m1=new Manager(5000)
console.log(m1.getSalary());
m1.work()
