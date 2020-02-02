"use strict";

import {addSpinner, removeSpinner} from './spinner';

var button = document.querySelector("#contact-form button");
var form = document.getElementById("contact-form");
button.addEventListener("click", submitForm); 

// repaint DOM when server responds without error
function repaintDOM() {
  document.querySelector('.contact-form-container h2').innerHTML = 'Message Received!';
  document.querySelector('.contact-form-container form').remove();
  var text = document.createElement('p');
  text.innerHTML = 'We appreciate your reaching out. We will be in touch shortly with a reply.';
  document.querySelector('.contact-form-container').appendChild(text);
}

function submitForm(e) {
  e.preventDefault();
  var firstName = document.getElementById("contact-form").elements["firstName"].value;
  var lastName = document.getElementById("contact-form").elements["lastName"].value;
  var email = document.getElementById("contact-form").elements["email"].value;
  var message = document.getElementById("contact-form").elements["message"].value; 

  //form Validation
  if (!firstName || !lastName || !email || !message) {
    return;
  }
  const element = document.querySelector('#contact-form div')
  addSpinner(element);
  var body = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message
  };
  fetch(`${DOMAIN}/contact`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (resObject) {
    if (!resObject.err) {
      removeSpinner();
      repaintDOM();
    } else {
      alert('error');
      removeSpinner();

    }
  });
}