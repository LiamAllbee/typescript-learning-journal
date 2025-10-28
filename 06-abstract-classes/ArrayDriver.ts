import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(2, 8, 10, 12);

// declare an array of shapes initially empty
// could be full if done like this let theShapes: Shape[] = [myCircle, myShape, myRectangle];
let theShapes: Shape[] = [];

// add shapes
theShapes.push(myCircle);
theShapes.push(myRectangle);

// for of loop (element of array)
for(let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
