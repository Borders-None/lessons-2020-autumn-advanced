# DOM

## Interacting with the DOM

* Tree of nodes / elements created by the browser
  - everything is a node
* Object Oriented Representation
* Window is the root element, although we usually use document as a root element in our queries
* Change / Remove HTML elements in the DOM / on the page
* Change & add CSS styles to elements
* Read & change element attributes (href, src, alt, ...)
* Create new HTML elements and insert them into the DOM / the page
* Attach event listeners to elements (click, keypress, submit)

![DOM](images/download.gif)

## Examining properties

DOM - Document Object Model

Printing the complete object to the console
```js
console.dir(document);
```

Acessing object properties
```js
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
``` 

Changing the object properties:
```js 
document.title =  123;
```

## Methods to get DOM elements 

Traditional API:

* `document.getElementById()`
  - faster than `document.querySelector()`
* `document.getElementsByClassName()`
  - returns `HTMLCollection` object
* `document.getElementsByTagName()`
  - returns `HTMLCollection` object

Modern API:
Uses CSS selectors

* `document.querySelector()` 
  - returns only a first element
* `document.querySelectorAll()`
  - returns `NodeList` object

## Traditional API
Uses direct name from the tag element

### `getElementById`

```js
var banner = document.getElementById('page-banner');
```   

### `getElementsByClass`

```js
var title = document.getElementByClassName('title');
```

### `getElementByTag` 

  ```js
  var lis = document.getElementsByTagName('li');
  var paragraphs = document.getElementsByTagName('p');
  ```

## Modern API

It uses CSS selector, be aware thay you need to mark ids with # sign, 
not like in getElementById metho

###  `querySelector`

Works only for one item, it only selects first one in the the collection
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

```js
var input = document.querySelector('input');
input.value = 'Hello World'`
```

Although it has two inputs it only selects the first one
first one is the text input, and second is the submit button

Selecting a submit button and changing the text

```js
var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";
```

```js
Only changes the first element in the group
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
```

### `querySelectorAll`

Returns a NodeList -> we can run array functions on it 

```js
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';
```

Selecting only odd ones 

```js
var odd = document.querySelectorAll('li:nth-child(odd)');  
```

Selecting only event ones
```js
var even= document.querySelectorAll('li:nth-child(even)');
```

If you have the same number of  


```js
for(var i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}
```

## Traversing the DOM

```js
var itemList = document.querySelector('#items');

console.log(itemList.parentNode);

Using the item as a selector
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);
```

ParentElement interchangeable with parentNode

```js
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

# Traversing the DOM tree upward
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);

/* parentELement vs parentNode */

/* CHILDNODES */
# not recommended (inserts text nodes)
   => NodeList
console.log(itemList.childNodes); 

console.log(itemList.children);
=> HTMLCollection

console.log(itemList.children); // 
console.log(itemList.children[0]);
itemList.children[1].style.backgroundColor = 'yellow';
```

FirstChild vs FirstElementChild

```js
// FirstChild
console.log(itemList.firstChild);

// FirstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';
```  

LastChild vs LastElementChild

```js
// LastChild
console.log(itemList.lastChild);

// LastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);
```

previousSibling vs previousElementSibling

```js
// previousSibling
console.log(itemList.previousSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';
```


## Creating elements
 
```js
// create an element
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';


// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

console.log(newDiv);

// Add text to div
newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);
```


