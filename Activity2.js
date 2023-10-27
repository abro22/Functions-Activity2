

//1. Create a function that takes a string as a parameter. If the string is equal to ping log pong to the console.


function aFunction (aString) {
    if ( aString === "ping") 
    console.log ("pong")

} 

aFunction ("ping")


//2. Create a function that takes in a number. Console log that number squared 

function theFunction (aNumber) {
    console.log (aNumber * aNumber)

} 

theFunction (6)


//3. Create a function that console logs every number from 1-20

const numbers = ["1", "2", "3", "4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]

numbers.forEach (number => {
    console.log (number)
})

//----------------------------------------

function printNumber () {
    for ( i = 1; i <= 20; i++) {
    console.log (i) }
}

printNumber ()



//4. Create a function that console logs every odd number from 1-20


// where to start, where to end/ goes too, how to get there/ what to do 


function oddNumber () {
for (i = 1; i <= 20; i += 2) {
console.log (i) }

}

oddNumber ()

//----------------------- even number 

function evenNumber () {
    for ( i = 0; i <= 20; i +=2) {
        console.log (i)
    }

}

evenNumber ()



//5.   Create a function that takes a number as a parameter. Console log every number from 1 to that number.

function aNumber (number) {

    for ( i = 1; i <= number; i++ ) {

        console.log (i)
    }

}

aNumber (15)
