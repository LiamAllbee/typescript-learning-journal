var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
console.log("C-style loop");
// C-style loop
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("\nFor of loop");
// For of Loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log("".concat(tempSport, " << My favorite sport"));
    }
    else {
        console.log(tempSport);
    }
}
