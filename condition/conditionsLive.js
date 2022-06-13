console.log("Hello World");


let randomNumber = Math.random();

console.log(randomNumber); 

if (randomNumber < 0.5) {

    console.log("Hello Monte");
    console.log(randomNumber);

}

if (randomNumber >= 0.5) {

    console.log('Random Number is greater than 0.5');
    console.log(randomNumber);

}

// If Else Statement:



const dayOfWeek = 'Monday';

if (dayOfWeek === 'Monday') {

    console.log('This is Monday');

} else if (dayOfWeek === 'Thursday') {

    console.log("This is Thursday");

} else if (dayOfWeek ===  'Saturday') {

    console.log("Hooray, today is Saturday");
}


const age = prompt('ENTER AN AGE');
// const age = 8;

if (age < 5) {
    console.log("You Type Pretty Fast - 5 ");
} else if (age < 10) {
    console.log("Output of the logic compared to CASE STATEMENTS");
} else if (age < 35) {
    console.log("Output of the logic Mr Adult.");
}
//ELSE -- ALL ALL CONDITIONS IN THE LOGIC HAVE FAILED
else {

    console.log("Last Resort If All Conditons Fail");
} 


const expr = 'Papayas';

switch (age) {

    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;    
    case 'Mangoes':
        console.log("Hello Mangos!");
        break;
    case 'Papayas':
        console.log("Hello Papayas");
        break;
    default:
        console.log("Sorry, we are out of your asked item.");

}

const password = prompt("Please Enter A New Password");

if (password.length >= 6) {

    //Nested Condition
    if (password.indexOf(' ') === -1) {

        console.log("Valid Password")
    }else {
        console.log("Password Can't Have Spaces")
    }

} else {

    console.log("Password is Too Short")
}

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong()
singSong()
singSong()

function greet(firstName) {
// 
    console.log(`Hey There, ${firstName}`)
}

greet('Monte')

function greet1(firstName,lastName) {
    console.log(`Hey There, ${firstName} ${lastName[0]}.`)
}

greet1('Boomer','Sooner')