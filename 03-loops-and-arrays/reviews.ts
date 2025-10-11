let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;

// Traditional C-Style loop. Has an advantage of can count through an array backwards. Can also count by skipping variables
console.log("/// Reverse ///");
for (let i = reviews.length - 1; i >= 0; i--) {
    console.log(reviews[i]);
}
console.log("/// Skipping ///");
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    i++;
}

// for of loop. Cant skip cant reverse. Is just simple and easier to read. Syntax: for(let element of array) {}
console.log("/// For of: Forwards ///");
for(let element of reviews) {
    console.log(element);
    total += element;
}

let average: number = total / reviews.length;
console.log(`Reviews average is ${average}`);
console.log(reviews.length);