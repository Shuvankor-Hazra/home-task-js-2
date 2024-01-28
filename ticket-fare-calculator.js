// Ticket fare Calculator

let passengerAge = 30;
let isStudent = false;
let ticket = 500;
let paidAmount;

if (passengerAge < 10) {
(paidAmount = ('Free.....'));
} else if (isStudent === true) {
  // 50% Discount
  discountAmount = (ticket * 50) / 100;
((paidAmount = ticket - discountAmount));
} else if (passengerAge >= 60) {
  discountAmount = (ticket * 15) / 100;
((paidAmount = ticket - discountAmount));
} else {
(paidAmount = ticket);
}


console.log(paidAmount);
console.log(`The student's grade is: Tk ${paidAmount}`);