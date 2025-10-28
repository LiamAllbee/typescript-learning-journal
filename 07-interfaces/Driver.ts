import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// declare an array for coaches initially empty

let theCoaches: Coach[] = [];

// add coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let element of theCoaches) {
    console.log(element.getDailyWorkout());
}