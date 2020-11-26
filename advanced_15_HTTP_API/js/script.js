function emailClicked() {
  const emailBody = this.children[0];
  if (emailBody.classList.contains('email-body-hidden')) {
    emailBody.classList.remove('email-body-hidden');
  } else {
    emailBody.classList.add('email-body-hidden');
  }
}
    
function showEmail(email) {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(email.from + ' – ' + email.title);
  newDiv.appendChild(newContent);
  newDiv.className = "email";
  // add the body of the email
  const emailBody = document.createElement("p");
  const emailBodyContent = document.createTextNode(email.body);
  emailBody.className = "email-body-hidden";
  emailBody.appendChild(emailBodyContent);
  newDiv.appendChild(emailBody);
  newDiv.onclick = emailClicked;
  const containerDiv = document.querySelector('.container');
  containerDiv.appendChild(newDiv);
}

function showAllEmails(emails) {
  emails.forEach((email) => {
    showEmail(email);
  });
}

function fetchEmails(){
  // fetch email data in JSON format from our HTTP API
  fetch('https://api.jsonbin.io/b/5fad6d9bea9b612e1c66e0ab')
  .then(function(response) {
    console.log(response.status);
    return response.json();
  })
  .then(function(emails) {
    console.log(emails);
    showAllEmails(emails);
  });
}

function myMailClicked(event) {
  let headerTitle = event.target;
  if (headerTitle.innerHTML === 'MMM') {
    headerTitle.innerHTML = 'MyMightyMail';
  } else {
    headerTitle.innerHTML = 'MMM';
  }
}
    
function main(){
  fetchEmails();
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  main();
});
