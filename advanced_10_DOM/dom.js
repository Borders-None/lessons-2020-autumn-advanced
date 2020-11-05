
// detail output of an object
// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);

// Accessing the document properties
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// Changing the properties
// document.title =  123;

// Acessing certian elements
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// Accessing elements by using index
// but not recommended
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


/* 
* SELECTORS
*/

/* 
* GETELEMENTBYID 
*/
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');

// var header = document.getElementById('main-header');
// console.log(headerTitle);

// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';


// innerContent is not affected by the CSS styling
// console.log(headerTitle.innerText);
// 


// All this manipulations are done after selecting an element
// Do the element selectors first

// Change the complete node 
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// Difference between css properties and properties in DOM
// Properties in CSS are connected with `-` and in DOM there is the camelCase format


/* 
* GETELEMENTSBYCLASSNAME */
// automatically returns a collection 
// var items = document.getElementsByClassName('list-group-item');


// printing all items
// console.log(items); (HTMLCollection, zero based)

// changing certain properties
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// Gives error if we want to to change every item
// items.style.backgroundColor = '#f4f4f4';

// We need to use iteration if we want to change each element in the collection
// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //

// Grab all li elements on the page
// The same as class name, but it selects tags

// HTMLCollection ??
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //

// Works only for one item, it only selects first one in the the collection
// It uses CSS selector, be aware thay you need to mark ids with # sign, 
// not like in getElementById method


// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'
// # Although it has two inputs it only selects the first one
// first one is the text input, and second is the submit button

// Selecting a submit button and changing the text
// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// select
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// # Only changes the first element in the group

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //

// # Returns a NodeList -> we can run array functions on it 


// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// # selecting only odd ones 
// var odd = document.querySelectorAll('li:nth-child(odd)');  

// # selecting only event ones
// var even= document.querySelectorAll('li:nth-child(even)');

// If you have the same number of  
// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

/* 
* TRAVERSING THE DOM 
*/

// var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);

// Using the item as a selector
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

/* 
* parentElement interchangeable with parentNode
*/

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

// # Traversing the DOM tree upward
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

/* parentELement vs parentNode */

// CHILDNODES
// # not recommended (inserts text nodes)
//    => NodeList
// console.log(itemList.childNodes); 

// console.log(itemList.children);
// => HTMLCollection

// console.log(itemList.children); // 
// console.log(itemList.children[0]);
// itemList.children[1].style.backgroundColor = 'yellow';


// # FirstChild vs FirstElementChild

// // FirstChild
// console.log(itemList.firstChild);

// // FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// LastChild vs LastElementChild

// // LastChild
// console.log(itemList.lastChild);

// // LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);


// # previousSibling vs previousElementSibling

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

/*
* CREATING ELEMENTS
*/ 

// create a div
// var newDiv = document.createElement('div');

// Add class
// newDiv.className = 'hello';

// Add id
// newDiv.id = 'hello1';


// Add attr
// newDiv.setAttribute('title', 'Hello Div');

// Create text node
// var newDivText = document.createTextNode('Hello World');

// console.log(newDiv);

// Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// // EVENTS


// // var button = document.getElementById('button').addEventListener
// //         ('click', function() {
// //                 console.log(123);
// // });


// // var button = document.getElementById('button').addEventListener
// //         ('click', buttonClick);

// // function buttonClick() {
// //     console.log('Button clicked');
// // } 

// // var button = document.getElementById('button').addEventListener
// //         ('click', () => console.log('Button clicked'));

// // var button = document.getElementById('button').addEventListener
// //         ('click', buttonClick);

// // function buttonClick() {
// //     document.getElementById('header-title').textContent = 'Changed';
// //     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// // } 

// // function buttonClick(e) { 
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);

//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';

//     // console.log(e.type);

//     // in the whole document
//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // inside the element
//     // console.log(e.offsetX);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// // }

// // var button = document.getElementById('button').addEventListener
// //                 ('click', runEvent);

// var button = document.getElementById('button')
// var box = document.getElementById('box');

// // button.addEventListener('click', runEvent);
// // button.addEventListener('dblclick', runEvent);
// // button.addEventListener('mousedown', runEvent);
// // button.addEventListener('mouseup', runEvent);

// // for the whole box
// // box.addEventListener('mouseenter', runEvent);
// // // for every element in the box
// // box.addEventListener('mouseover', runEvent);

// // // leave the box / goes into another element (withing the box)
// // box.addEventListener('mouseleave', runEvent);
// // // leaves the box element completely
// // box.addEventListener('mouseout', runEvent);

// // tracking mouse inside the box element
// box.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//     // console.log('EVENT TYPE: ' + e.type);

//     // moving the mouse inside the element
//     // output.innerHTML = '<h3>MouseX: ' + e.offsetX 
//     //                  + ' </h3><h3> MouseY: ' + e.offsetY;
    
//     box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
// }