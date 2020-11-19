# DOM Manipulation & Events

Let's create a little email web app which shows you your emails and lets you read them.

## Postman

Postman is a really cool tool that let's us test REST APIs without writing any code. You can download it form [here](https://www.postman.com/downloads/).

We will use Postman to inspect the REST APIs to get a sense of the data we are dealing with.

### Get the emails from JSONbin

We will use the data from JSONbin to display it in our E-mail client app.

### Get the emails from our Web API

I also created our own mini e-mail REST API app from which we can also fetch e-mails.

Additionaly, we can also create and send new e-mails as well. That way, we can append ne e-mails to our list.

## Running the REST API

If you want to run this web api, you will need to downlaod node.js [from here](https://nodejs.org/en/download/) and install it on your computer.

After you have installed node, you have to:

1. Position yourself inside the emails_api folder in your favourite terminal (bash, PowerShell, ...)
2. Run `node install` to install all dependencies. You only need to run this command once
3. Run `node start` to spin up the Email REST API. You can stop the server by pressing CTRL+C or simply closing the terminal.

After these step you have the REST API running locally on your PC on the http://localhost:3000 endpoint.

Feel free to look around the code and try to modify it if you feel courageous.

The REST API exposes 2 endpoints:

- GET http://localhost:3000/api/emails - a list of all e-mails
- POST http://localhost:3000/api/emails - for sending a new e-mail and storing it

## Making POST requests

We will first use Postman to send an e-mail.

Then we will modify our e-mail client app to send e-mail from it.

## Creating new emails and sending them

First we will edit the HTML to create a form in which we will provide 3 input fields corresponding to our 3 e-mail fields (from, title, and body).

### About Forms

Forms were originally designed for the pre-JavaScript Web to allow web sites to send user-submitted information in an HTTP request. This design assumes that interaction with the server always happens by navigating to a new page.

But, they are part of the DOM like the rest of the page.

A web form consists of any number of input fields grouped in a `<form>` tag. HTML allows several different styles of fields, ranging from simple on/off checkboxes to drop-down menus and fields for text input.

Read more about forms at [this link](https://eloquentjavascript.net/18_http.html).

### Back to our app

Actually, we will create forms and send e-mail data in 3 ways:

- The default browser behaviour
- Creating our own JavaScript form submit handler
- Not using forms at all and doing everything manually
