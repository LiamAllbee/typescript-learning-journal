let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

console.log("C-style loop");
// C-style loop
for(let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

console.log("\nFor of loop");
// For of Loop
for(let tempSport of sportsOne) {
    if(tempSport == "Cricket") {
        console.log(`${tempSport} << My favorite sport`);
    }
    else {
        console.log(tempSport);
    }
}