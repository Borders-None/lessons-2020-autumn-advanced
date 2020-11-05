var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var emails = [
      { from:"Nataša", title: "Extra materials for learning", body: text},
      { from:"State lottery", title: "Congratulations, you've won!", body: text},
      { from:"Mladen", title: "Don't forget your homework!", body: text},
      { from:"ACME", title: "Job interview", body: text},
      { from:"Josip", title: "Practice makes perfect!", body: text},
      { from:"Dražen", title: "Next class will be about...", body: text}
    ];
    
function emailClicked(event) {
  console.log('email clicked');
  console.log(event);
  console.log(this);
  if (this.children.length > 0) {
    this.removeChild(this.lastChild);
  } else {
    const emailBody = document.createElement("p"); 
    const emailBodyContent = document.createTextNode(text); 
    emailBody.appendChild(emailBodyContent);
    this.appendChild(emailBody);
  }
}

function showEmail(email) {
  // create a new div element 
  const newDiv = document.createElement("div"); 
  
  // and give it some content 
  const newContent = document.createTextNode(email.from + ' – ' + email.title); 
  
  // set the CSS class
  newDiv.className = "email";
  
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  
  // set the click event
  newDiv.onclick = emailClicked;

  // add the newly created element and its content into the DOM
  const containerDiv = document.querySelector('.container');
  containerDiv.appendChild(newDiv);
}

function showAllEmails() {
  emails.forEach(email => {
    showEmail(email);
  })
}

function myMailClicked() {
  const headerTitle = document.querySelector('#header-title');
  if (headerTitle.innerHTML === 'MM') {
    headerTitle.innerHTML = 'MyMail';
  } else {
    headerTitle.innerHTML = 'MM';
  }
}

function main(){
  console.log(emails);  
  // show the emails one by one
  // showEmail(emails[0]);
  // showEmail(emails[1]);
  showAllEmails();
}

main();