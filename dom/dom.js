
// console.dir(document);

// console.log(document.domain); //<--Shows IP Address
// console.log(document.URL);

// // 
// console.log(document.title);
// // 
// console.log(document.doctype);
// // 
// console.log(document.head);
// // 
// console.log(document.body);
// // 
// console.log(document.all);
// // 
// console.log(document.all[13]);
// // 
// document.all[10].textContent = 'We Just Changed The Header';

// document object model can scan the tree for element

// console.log(document.form);
// console.log(document.links);
// console.log(document.images); 

// ////////////////////////////////////////////////////////////////////////////

// Access the DOM with GETELEMENTBYID 

console.log(document.getElementById('header-title'));

//creation of an object variable using the document function.

let headerTitle = document.getElementById('header-title');

console.log(headerTitle);
//
headerTitle.textContent = "I am changing the header";
//
headerTitle.innerHTML = "I am changing it again"
//
headerTitle.style.color = "hotpink";


///////////////getElementByClassName//////////////////////////////////////////////////////////


let items = document.getElementsByClassName('list-group-item');
//
console.log(items);
//
console.log(items[0])
//
items[1].textContent = "Alpha Keppa Alpha";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";
items[1].textContent = "Alpha Keppa Alpha";
items[1].style.color = "green";
//
items[0].textContent = "Delta Sigma Theta";
items[0].style.fontWeight = "bold";
items[0].style.backgroundColor = "blue";
items[0].textContent = "Skee Wee";
items[0].style.color = "white";
//
items[2].textContent = "Hello world number 2";
items[2].style.fontWeight = "bold";
items[2].style.backgroundColor = "pink";
items[2].textContent = "Skee Wee";
items[2].style.color = "red";