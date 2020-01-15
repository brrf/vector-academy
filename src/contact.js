"use strict";

let button = document.querySelector("#contact-form-container button");
let form = document.querySelector("form");
button.addEventListener("click", submitForm);

function submitForm(e) {
  console.log('here');
  e.preventDefault();
  console.log(new FormData(form))
  fetch('http://localhost:3002/contact', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        "Content-Type": "application/json"
      }
    })
  .then((res) => res.json())
  .then(resObject => console.log(resObject.a));
}