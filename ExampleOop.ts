// Abstraction 
// Polymorphism
// Encapsulation
// Inheritance
// Access Modifiers ===> public, private, protected.
// abstract class Animal {
//     static AnimalName : string;
//     public AnimalSize : number;
//     public AnimalColor : string;

//     constructor(AnimalSize :number, AnimalColor : string){
//         this.AnimalSize = AnimalSize;
//         this.AnimalColor = AnimalColor;

//     }
//     static displayInfo(){
//         console.log(this.AnimalName);
//     }
//     greeting (){
//         console.log('Hello my name is' +" "+ Animal.AnimalName);
        
//     }
//     abstract makesound(): void;
// }
// class Dog extends Animal{
//     // DogName : string = "German";
//     constructor(AnimalSize :number, AnimalColor : string){
//         super(AnimalSize, AnimalColor);
//     }
//     makesound(){
//     }
// }

//Animal.displayInfo();
// let dog = new Dog(15, "Black");
// console.log(dog.DogName);
// console.log(dog.AnimalColor);
// console.log(dog.AnimalSize);
// dog.greeting();

//Example of OOP in TypeScript:

abstract class Vehicle {
    protected make : string;
    protected model : string;
    constructor(make :string, model :string){
        this.make = make;
        this.model = model;
    }
    abstract stratEngine(): void;
    displayinfo(){
        console.log(`Vehicle: ${this.make} ${this.model}`);
    }
}
class Car extends Vehicle{
    private year : number;
    constructor(make :string, model :string, year :number){
        super(make, model);
        this.year = year;
    }
    stratEngine(): void {
        console.log(`The engine of the car ${this.make} ${this.model} is starting.`);
    }
    displayinfo(): void {
        console.log(`Car Details: ${this.make} ${this.model} ${this.year}`);
    }
    honk(): void{
        console.log("Beep Beep!");
    }
}

let myCar = new Car("Toyota Corolla", "Camry", 2026);
myCar.displayinfo();
myCar.stratEngine();
myCar.honk();