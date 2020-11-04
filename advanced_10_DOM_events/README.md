# DOM events

DOM (Document Object Model) events are actions that occur as a result of the user action or as result of state change of the elements of a DOM tree. 
We listen to the event that happens and upon that we have some action. So the object that listen the event we call event listener.

## Types of Events

Some of event types:
* Mouse events
* Keyboard events
* Form events
* Media events
* View events
* Windows events
...

Complete list of events is at: [Events](https://developer.mozilla.org/en-US/docs/Web/Events)

### Mouse events

Some of mouse events:
* `click`
  - A pointing device button (ANY button; soon to be primary button only) has been pressed and released on an element.
* `dblclick` 
  - A pointing device button is clicked twice on an element
* `contextmenu`
  - A pointing device button is pressed on an element.
* `mousedown`
  - A pointing device is moved onto the element that has the listener attached.
* `mouseleave`
  - A pointing device is moved off the element that has the listener attached.
* `mousemove`
  - A pointing device is moved over an element (fired continuously as the mouse moves).
* `mouseover`
  - A pointing device is moved onto the element that has the listener attached or onto one of its children.
* `mouseout`
  - A pointing device is moved off the element that has the listener attached or off one of its children.
* `mouseup`
  - A pointing device button is released over an element.
* `select`
  - Some text is being selected.

### Keyboard events

List of all keyboard events:
* `keydown` 
  - ANY key is pressed
* `keypress` 
  - ANY key (except Shift, Fn, or CapsLock) is in a pressed position (fired continuously).
* `keyup`
  - ANY key is released

### Form events

* `reset`
  - reset button is pressed
* `submit`
  - submit button is pressed

### Media events

* `pause`
  - Playback has been paused.
* `play`
  - Playback has begun.
* `volumechange`
  - The volume has changed.

### View events
* `resize`
  -The document view or an element has been scrolled.
* `scroll`
  - The document view has been resized.

## Creating an event

Three steps in creating an event:

1. query the dom for the elements
   - only one element have to be returned
   - We have two alternatives 
     - select by using `getElementById()` or to use `querySelector()`
     ```js
     const gebi = document.getElementById('id');
     const qs = document.getSelector('#id'); 
     ```
2. create a callback function 
    - as we learned there are many ways how to create a callback function
    - if we use `=>` function we create it while we create the event listener
      which is quite common practice how we create/call it
     
3. add event listener to the element with passing the type of event and callback function
  -  callback function can be written before event listener creation,
      after the function or as an => function
  - general code for creating an event listener is following
    ```js
    selectedDOMelement.addEventListener('eventType', callback_function);
    ``` 
   - if we use two element selected in upper examples we 
      ```js
      qebi.addEventListener('click', () => console.log('click'));
      qs.addEventListener('dblclik', () => console.log('double click'));
      ```
  - If we want to write event listener in one line we can 
    ```js
    document.getElementById('id').addEventListener('click', () => console.log('click'));
    ```

4. As we can add an event listener we can remove it 
   ```js
   domElement.removeEventListener('eventType', callback_function);
   ```

## Event object

When the event happens also an event object is created. 
There are many properties and method useful. 

```js
document.getElementById('id').addEventListener('click', e => console.log(e));
```

## Event bubbling

If we have the same events in DOM hiearchy the event from the bottom level will go to the top unless 
we prevent that bubbling. There is a suitable method for that.

Let assume that `li` element is a child element of `ul` element
```js
const li = document.getSelector('li');
li.addEventListener('click', e => {
    console.log('LI');
    // e.preventPropagation();
});

const ul = document.getSelector('ul');
ul.addEventListener('click', e => console.log('UL'));
```

If we call event object method stop propagation we can stop event bubbling

## Event delegation

If we add some list elements or maybe we add a row or some columnt to the table dynamically.
As we add those element we want to add listeners dinamically as well. 
The technique for that we call **event delegation** 
If we don't use event delegation the event listeners will be only assigned to the initial 
collection of elements

```js
const ul = document.querySelector('ul');

ul.addEventListener('click', e => {

  // prints the target element which is LI
  console.log(e.target);   

  // and this mousevent bubbles up to the UL element
  // so if we want to erase the li element we first check
  // if the target is LI element and we remove the element
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
}
```














After the event occurs, the browser creates an event object
Some useful properties of the event object:
  - target