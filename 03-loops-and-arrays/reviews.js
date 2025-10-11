var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
// Traditional C-Style loop. Has an advantage of can count through an array backwards. Can also count by skipping variables
console.log("/// Reverse ///");
for (var i = reviews.length - 1; i >= 0; i--) {
    console.log(reviews[i]);
}
console.log("/// Skipping ///");
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    i++;
}
// for of loop. Cant skip cant reverse. Is just simple and easier to read. Syntax: for(let element of array) {}
console.log("/// For of: Forwards ///");
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var element = reviews_1[_i];
    console.log(element);
    total += element;
}
var average = total / reviews.length;
console.log("Reviews average is ".concat(average));
console.log(reviews.length);
