let weight = 90; // in kilograms
const height = 1.76; // in meters

let bmi = weight / Math.pow(height, 2);
console.log(bmi);

if (bmi < 18.5) {
  console.log("You are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are normal.");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are overweight.");
} else {
  console.log("you are obese.");
}
