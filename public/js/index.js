"use strict";

//template the header, footer and main-inactive sections
let header = document.createElement('header');
header.id = 'navbar-container';
header.innerHTML = "<h1><a href=\"/\">Vector</a></h1><div class='navbar-large'><ul class='navbar-links'><li>About &#9662<ul class='dropdown hidden'><li><a href=\"/howitworks\">How it works</a></li><li><a href=\"/prereqs\">Prerequisites</a></li><li><a href=\"./faqs\">FAQs</a></li></ul></li><li><a href=\"./employerlogin\">Employer Login</a></li><li><a href=\"./employerlogin\">Student Login</a></li><li><button>Apply</button></li></ul></div><div class='navbar-mobile'><button class=\"hamburger hamburger--spin\" type=\"button\"><span class=\"hamburger-inner\"></span></button></div>";
document.body.prepend(header);
let footer = document.createElement('footer');
footer.innerHTML = "<div class='footer-container'><h1><a href=\"/\">Vector</a></h1><div><h3>About</h3><ul><li><a href=\"./privacy\">Privacy Policy</a></li><li><a href=\"./privacypolicy\">Contact</a></li></ul></div><div><h3>Resources</h3><ul><li><a href=\"./faqs\">FAQ</a></li><li><a href=\"./privacypolicy\">How it works</a></li><li><a href=\"./privacypolicy\">Application</a></li></ul></div></div><p></p>";
document.body.append(footer);
let mainInactive = document.createElement('main');
mainInactive.className = 'main-inactive hidden';
mainInactive.innerHTML = "<a href=\"/howitworks\"><h3>How it works</h3></a><a href=\"prereqs\"><h3>Prerequisites</h3></a><a href=\"./faqs\"><h3>FAQs</h3></a><hr><a href=\"./employerlogin\"><h3>Employer Login</h3></a><a href=\"./employerlogin\"><h3>Student Login</h3></a><a href=\"'./apply\"><button>Apply</button></a>";
footer.before(mainInactive); //update copyright by year

let copyright = document.querySelector('footer p');
const year = new Date().getFullYear();
copyright.innerHTML = "Copyright &copy; ".concat(year, " Vector Training Academy. All Rights Reserved."); //toggle active of hamburger

let hamburger = document.querySelector('.hamburger');
let mainActive = document.querySelector('.main-active');
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle('is-active');
  mainActive.classList.toggle('hidden');
  mainInactive.classList.toggle('hidden');
  console.log(mainInactive);
  footer.classList.toggle('hidden');
}); //toggle dropdown list (no :hover event on mobile)

let dropdownParent = document.querySelector('.navbar-links li:first-child');
let dropdownList = document.querySelector('.dropdown');
dropdownParent.addEventListener("click", function () {
  dropdownList.classList.toggle('hidden');
});
dropdownParent.addEventListener("mouseover", function () {
  dropdownList.classList.remove('hidden');
});
dropdownParent.addEventListener("mouseout", function () {
  dropdownList.classList.add('hidden');
});