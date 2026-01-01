abstract class Shape {
    constructor(protected color: string) {} 
    abstract area(): number;
    displayColor(): void {
        console.log(`This shape's color is ${this.color}.`);
    }
}

class Circle extends Shape {
    constructor(color: string, private radius: number) {
        super(color); 
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    constructor(color: string, private width: number, private height: number) {
        super(color);
    }
    area(): number {
        return this.width * this.height;
    }
}
const myCircle: Shape = new Circle("Blue", 5);
const myRectangle: Shape = new Rectangle("Red", 4, 6);
const shapes: Shape[] = [myCircle, myRectangle];
shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
    shape.displayColor();
});