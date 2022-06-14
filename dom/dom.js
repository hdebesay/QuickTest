// console.dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.
console.dir(document);
// Gives the domain of the web page.
console.log(document.domain);
// Gives the URL of the web page.
console.log(document.URL); 
// displays the current url adress
// shows title of the document
console.log(document.title);
// Returns the Document Type Declaration (DTD) associated with current document
console.log(document.doctype);
// The head read-only property of the Document interface returns the <head> element of the current document.
console.log(document.head);
// The Document.body property represents the <body> or <frameset> node of the current document, or null if no such element exists.
console.log(document.body);
// The Document interface's read-only all property returns an HTMLAllCollection rooted at the document node.
console.log(document.all);
// The Document interface's read-only all property returns the 10th HTMLAllCollection.
console.log(document.all[10]);
document.all[10].textContent = "I just changed the header!";
// Document Object Model can scan the tree for elements. 
// The forms read-only property of the Document interface returns an HTMLCollection listing all the <form> 
console.log(document.forms);
// The links read-only property of the Document interface returns a collection of all elements and elements in a document 
console.log(document.links);
// Document.images. The images read-only property of the Document interface returns a collection of the images in the current HTML document.
console.log(document.images);
GetElementById.//////////////////
console.log(document.getElementById('header-title'));
// Creation of an object variable using the document function.
let headerTitle = document.getElementById('header-title');
// 
headerTitle.textContent = "Im Changing the Header";
headerTitle.innerText = "I Am Changing It Again.";
headerTitle.style.color = 'hotpink'; 


//////////////////////////////////////////
/////////////////////////GetElementByClassName///////////
//  saving it as a variable to be able to use it in a function
var items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[1]); 
// Styling Property Attributes through the variable.
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'pink';
items[1].textContent = 'Alpha Kappa Alpha';
items[1].style.color = 'green';

items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'red';
items[0].textContent = 'Oooop - Coleman Love';
items[0].style.color = 'white';

items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'blue';
items[2].textContent = 'Zee Phiiii - Zeta Phi Beta';
items[2].style.color = 'white';

// This is a counter which loops all the way until 10.
for (let i = 1; i <= 10; i++) {
     console.log(i);
// itereted  by +1
}

for (let i = 0; i <=20; i +=2) {
    console.log(i);
    // iterates by +2
 }

for (let i = 100; i >= 0; i -=2) {

     console.log(i);
    //  will go down by 2 and will stop at 0

}

for (var i = 0; i < items.length; i++) {

    items[i].style.backgroundColor = 'grey';
    items[i].textContent = 'I Changed The List';
    items[i].style.color = 'green';
    // it will change all the of them as long as the items length is

}

const myDiamonds = ['Snacky','Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lanky','Kibbles'];

for(let i = 0; i < myDiamonds.length; i++){

console.log(i, myDiamonds[i]);
}

//////////////////////////////////////////////////////////////////////////////
///////////////GetElementByTagName

var li = document.getElementsByTagName('li');
// shows li and on the second one shows a specific index
console.log(li);
console.log(li[1]);
// by choosing the indexedDB, you can change specific items,
li[1].textContent = "Hello 2";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'crimson';
li[1].style.color = 'white';


for(var i = 0; i < li.length; i++){

    li[i].style.backgroundColor = 'lightgrey';
    li[i].textContent = 'Changed Text'; 

}

//////////////////////////////////////////////////////////////////////////////
///////////// - Query Selector


var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px hotpink';
// changed the border bottom style 
var input = document.querySelector('input');
input.value = "Changed The Input Box Text";
// changed the Input value Box Text"
var submit = document.querySelector("input[type='submit']");
submit.value = "SEND"; 
// changed submit value to SEND
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
// chagned the color to red
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'coral';
// chaged the color to coral


////////////////////////////////////////////////////////////////////
//////////QuerySelectorALL


// querySelectorAll shows all of whatever that you list
// 
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello Monte';  
// 
// you can select the child by indexed,odd, or even.
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
// 
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
}


console.log("Hello World");

// This puts out random number
let randomNumber = Math.random();

console.log(randomNumber); 
// if the random number is less than 0.g, it will shows "hello world" and the randomNumber.
if (randomNumber < 0.5) {

    console.log("Hello Monte");
    console.log(randomNumber);

}
// if the number is greater than 0.5, it will show the random number and 'Random Number is greater than 0.5'
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

// prompt is a function that pops up on the browser
const age = prompt('ENTER AN AGE');
// const age = 8;
{/* < is a less than operator */}
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

// one you declare something with const, you can not change it later.
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

// break is important because once it finds the right item, it will stop the function

const password = prompt("Please Enter A New Password");

if (password.length >= 6) {

    //Nested Condition
    if (password.indexOf(' ') === -1) {
    //  The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

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



