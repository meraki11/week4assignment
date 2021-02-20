/*1.	Using template literals instead of concatenation, write a function that takes 
        firstName and lastName and returns ‘firstName lastName’*/
function returnName(firstName,lastName){
    console.log(`The answer to Coding Step 1 is:${firstName} ${lastName}`);
}
returnName('Iron','Man');

/*2.	Write the same function as above as an arrow function with a different name.*/
    let returnNewName = (firstName, lastName) => `The answer to Coding Step 2 is: ${firstName} ${lastName}`

console.log(returnNewName('Tony', 'Stark'));

/*3.	Look up the JavaScript functions setTimeout() and setInterval(). 
        Notice how they each take a callback.*/

/*3a.	Using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position.
        The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.*/
setTimeout(() => (alert("Time is up!")), 3000);
console.log('The answer to Coding Step 3a is: alert box to display after 3 seconds');

/*3b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. 
        Using setInterval, pass askAreWeThereYet into the callback parameter position. 
        Choose whatever length of time you want for the interval.*/
askAreWeThereYet = () => {alert("Are we there yet?");};
setInterval((askAreWeThereYet), 5000);
console.log('The answer to Coding Step 3b is: alert box to display after 5 seconds and will continue repeating until window is closed');

/*4.	In this step you are going to write a function that takes a callback to better understand how callbacks work.*/
/*4a.	Write a new function named processSplicedValue that takes 3 parameters – an array, 
        the index of the element to be spliced from the array, 
        and a callback function that will process the sliced element. 

        Inside the function, use the first two parameters to splice an element from the array.

        Inside the function, call the callback function and pass the spliced value into it.

        Outside of the function, create an array of strings, call processSplicedValue, and pass in the array you just created, 
        an index number, and console.log into it. 
        For example: processSplicedValue(arrayName, 2, console.log);*/

let weekString = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

function myCallback(value){
    console.log(value);
}

function processSplicedValue(array, splicedIndex, myCallback) {
    var removed = array.splice(splicedIndex, 1);
    myCallback(removed);
}

processSplicedValue(weekString, 2, console.log);

/*4b.	Call the processSplicedValue function again but this time pass in the alert method instead of console.log.*/
processSplicedValue(weekString, 2, alert);

/*4c.	Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.*/
processSplicedValue(weekString, 2, (myCallback) => alert(myCallback));


/*4d.	Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.*/
function luckyDay(value) {
        alert("your lucky day this week is: " + value);
}  
processSplicedValue(weekString, 1, luckyDay);
