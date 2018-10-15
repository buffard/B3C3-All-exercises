// *PRACTICE: CHICKEN MONKEY*
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".
// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.
// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

for (let num = 1; num <= 100; num++) {
  if (num % 7 === 0 && num % 5 === 0){
    console.log('chickenMonkey')
  } else if (num % 5 === 0) {
    console.log('chicken')
   } else if (num % 7 === 0) {
     console.log('monkey')
  } else {
    console.log(num)
 }
}

// ===============================
// *PRACTICE: TAKE A NUMBER -  BATTLE OF THE BANDS*
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 0

const takeNumber = function (bandName) {
  bandNumber++;
  return `${bandNumber}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

// ===================================

// *PRACTICE: COOKOUT*
// Copy the following objects into your JavaScript file.
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.
  
function grill (currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;

  // Put the cooked food into the appropriate array
  cookedFood.push(currentObject);
};

// Your task is to iterate over the array of uncookedFood and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.


//below is the code I wrote

for (let i = 0; i < uncookedFood.length; i++) {
  grill(uncookedFood[i]);
}

// =======================

// *PRACTICE: OVERLY EXCITED*
// For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

// 1. For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.
// mkdir -p ~/workspace/javascript/overly-excited

// 2. Now that you have created the directory, you want to change to that directory so that you can add files to it.

// cd ~/workspace/javascript/overly-excited

// 3. Create an index.html file in this directory with the touch command.

// 4.Create an overly-excited.js file in this directory with the touch command.

// 5.Copy the following code and paste it into the index.html file. Notice that the overly-excited.js file is properly linked so that when you load this HTML file in a web browser, the logic in that file will be executed.

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Overly Excited</title>
// </head>
// <body>

//     <script src="overly-excited.js"></script>
// </body>
// </html>

// 6.Open the index.html file in your web browser.

// 7. At this point, you will simply see a blank web page because you have no content in the HTML file. Open your developer tools using the Option+Command+I keyboard shortcut.

// 8. At the top of the developer tools panel, you will see the word Console. Click on that word. The console.log() statement will output any message into this panel in your developer tools. You can try it out immediately by clicking in the Console panel, and typing console.log("Hello, world!"), and then pressing your return key.

// ========================

// *PRACTICE: STACKING WORDS*
// The learning objects of this exercise is to use iteration and string concatenation

// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Example output:

// The

// The walrus

// The walrus danced

// The walrus danced through

// The walrus danced through the

// The walrus danced through the trees

// The walrus danced through the trees in

// The walrus danced through the trees in the

// The walrus danced through the trees in the light

// The walrus danced through the trees in the light of

// The walrus danced through the trees in the light of the

// The walrus danced through the trees in the light of the moon ...

// Create an array that contains the words in the sentence

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
      // Concatenate the new word onto buildMeUp
      buildMeUp = buildMeUp + ' ' + sentence[i]
      // Print buildMeUp to the console
       console.log(buildMeUp)
    }
}
// Invoke the function and pass in the array
addExcitement(sentence)

// ========================================

// *PRACTICE: Some words are more exciting than others*

// The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one operation when a certain conditions is true, and a different operation if that condition is false.

// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
      if (i % 3 === 0 && i > 0) {
        buildMeUp = buildMeUp + ' ' + sentence[i] + '!'
       console.log(buildMeUp)
      } else {
        buildMeUp = buildMeUp + ' ' + sentence[i]
       console.log(buildMeUp)
      }
    }
}

addExcitement(sentence)

// ===============================================
// *PRACTICE: FUNCTION ARGUMENTS*
// The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.
function addExcitement (theWordArray, symbol) {
  let buildMeUp = ""

  for (let i = 0; i < theWordArray.length; i++) {
      /*
          If the current value of `i` divided by 3 has no
          remainder, add an exclamation point to the end of
          the word and then concatenate it to `buildMeUp`.

          Otherwise, just concatenate the word itself.
       */
    if (i % 3 === 0 && i > 0) {
      buildMeUp = buildMeUp + ' ' + sentence[i] + symbol
     console.log(buildMeUp)
    } else {
      buildMeUp = buildMeUp + ' ' + sentence[i]
     console.log(buildMeUp)
    }
  }
}
// I want to use a question mark
addExcitement(sentence, "?");

// =====================================
// *CHALLENGES: Arrow Functions*
// Challenges are optional exercises that you can work once you've completed all the practice exercises and understand the concepts in them.
// Watch the video (see above) about arrow functions, and see if you can rewrite addExcitement using that syntax.

const addExcitement = (theWordArray, symbol) => {
  let buildMeUp = ""
  for (let i = 0; i < theWordArray.length; i++) {
    if (i % 3 === 0 && i > 0) {
      buildMeUp = buildMeUp + ' ' + sentence[i] + symbol
     console.log(buildMeUp)
    } else {
      buildMeUp = buildMeUp + ' ' + sentence[i]
     console.log(buildMeUp)
    }
  }
}

addExcitement(sentence, "?");
