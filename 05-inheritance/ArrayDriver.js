"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(2, 8, 10, 12);
// declare an array of shapes initially empty
// could be full if done like this let theShapes: Shape[] = [myCircle, myShape, myRectangle];
var theShapes = [];
// add shapes
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
// for of loop (element of array)
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
}
