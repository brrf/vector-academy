"use strict";

var button = document.querySelector("#form-container button");
var form = document.getElementById("contact-form");
button.addEventListener("click", submitForm); // repaint DOM when server responds without error

function repaintDOM() {
  document.querySelector('h2').innerHTML = 'Message Received!';
  document.querySelector('form').remove();
  var text = document.createElement('p');
  text.innerHTML = 'We appreciate your reaching out. We will be in touch shortly with a reply.';
  document.querySelector('#contact-form-container').appendChild(text);
}

function addSpinner() {
  var spinner = document.createElement('div');
  spinner.classList.add('spinner-box');
  spinner.innerHTML = '<div class="circle-border"><div class="circle-core"></div></div>';
  document.querySelector('#contact-form-container div').appendChild(spinner);
}

function removeSpinner() {
  document.querySelector('.spinner-box').remove();
}

function submitForm(e) {
  var firstName = document.getElementById("contact-form").elements["firstName"].value;
  var lastName = document.getElementById("contact-form").elements["lastName"].value;
  var email = document.getElementById("contact-form").elements["email"].value;
  var message = document.getElementById("contact-form").elements["message"].value; //form Validation

  if (!firstName || !lastName || !email || !message) {
    return;
  }

  addSpinner();
  var body = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message
  };
  e.preventDefault();
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