"use strict";

var button = document.querySelector("#contact-form-container button");
var form = document.getElementById("contact-form");
button.addEventListener("click", submitForm);

function submitForm(e) {
  const firstName = document.getElementById("contact-form").elements["firstName"].value;
  const lastName = document.getElementById("contact-form").elements["lastName"].value;
  const email = document.getElementById("contact-form").elements["email"].value;
  const message = document.getElementById("contact-form").elements["message"].value;
  const body = {
    firstName,
    lastName,
    email,
    message
  }
  e.preventDefault();
  fetch('http://localhost:3002/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json",
      }
  }).then(function (res) {
    return res.json();
  }).then(function (resObject) {
    return console.log(resObject.a);
  });
}