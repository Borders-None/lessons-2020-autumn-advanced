var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var emails = [
      { from:"Nataša", title: "Extra materials for learning", body: 'Hey everyone, I am sending you the materials.'},
      { from:"State lottery", title: "Congratulations, you've won!", body: 'WOW! You did it! You won! So much money!'},
      { from:"Mladen", title: "Don't forget your homework!", body: 'hey, do not forget your homework for Tuesday!'},
      { from:"ACME", title: "Job interview", body: 'When do you have time to stop by for an interview? Would next week work for you?'},
      { from:"Josip", title: "Practice makes perfect!", body: 'I just wanted to say – please try out those examples we talked about!'},
      { from:"Dražen", title: "Next class will be about...", body: 'Hello, in the next class we will learn exciting new things about ReactJS!'}
    ];
    
function emailClicked(event) {
  // console.log(event.target.innerHTML);
  if (this.children.length > 0) {
    // remove the body
    this.removeChild(this.lastChild);
  } else {
    const emailBody = document.createElement("p");
    const emailBodyContent = document.createTextNode(text);
    emailBody.appendChild(emailBodyContent);
    this.appendChild(emailBody);
  }
}
    
function showEmail(email) {
  // console.log(email.from + ' – ' + email.title);
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(email.from + ' – ' + email.title);
  newDiv.appendChild(newContent);
  newDiv.className = "email";
  // newDiv.setAttribute('class', 'email');
  newDiv.onclick = emailClicked;
  // newDiv.addEventListener('click', emailClicked);
  const containerDiv = document.querySelector('.container');
  containerDiv.appendChild(newDiv);
}

function showAllEmails() {
  // for(i = 0; i < emails.length; i++){
  //   showEmail(emails[i]);
  // }
  
  emails.forEach((email) => {
    showEmail(email);
  });
}
// showAllEmails();

function myMailClicked(event) {
  // const headerTitle = document.querySelector('#header-title');
  let headerTitle = event.target;
  if (headerTitle.innerHTML === 'MMM') {
    headerTitle.innerHTML = 'MyMightyMail';
  } else {
    headerTitle.innerHTML = 'MMM';
  }
}
    
function main(){
  // console.log(emails);  
  // showEmail(emails[0]);
  showAllEmails();
}

main();

