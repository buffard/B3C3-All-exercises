// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".
// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.
// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

for (var num = 1; num <= 100; num++) {
  if (num % 7 === 0 && num % 5 === 0){
    var i = "chickenMonkey"
    console.log(i)
  } else if (num % 5 === 0) {
    var i = "chicken"
    console.log(i)
   } else if (num % 7 === 0) {
     var i = "monkey"
     console.log(num)
  } else {
    console.log(num)
 }
}

