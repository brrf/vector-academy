"use strict";

var button = document.querySelector("#contact-form-container button");
var form = document.getElementById("contact-form");
button.addEventListener("click", submitForm);

function repaintDOM() {
  document.querySelector('h2').innerHTML = 'Message Received!';
  document.querySelector('form').remove();
  document.querySelector('#contact-form-container button').remove();
  var text = document.createElement('p');
  text.innerHTML = 'We appreciate your reaching out. We will be in touch shortly with a reply.';
  document.querySelector('#contact-form-container').appendChild(text);
}

function submitForm(e) {
  var firstName = document.getElementById("contact-form").elements["firstName"].value;
  var lastName = document.getElementById("contact-form").elements["lastName"].value;
  var email = document.getElementById("contact-form").elements["email"].value;
  var message = document.getElementById("contact-form").elements["message"].value;
  var body = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message
  };
  e.preventDefault();
  fetch("http://localhost:3003/contact", {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (resObject) {
    if (!resObject.err) {
      repaintDOM();
    } else {
      console.log(resObject.err)
    }
  });
}