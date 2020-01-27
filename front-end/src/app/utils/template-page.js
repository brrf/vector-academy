import logo from "../../public/assets/Vector-01.png";

"use strict";
export default function templatePage () {
	const mainActive = document.querySelector('.main-active');

	const header = document.createElement('header');
	header.id = 'navbar-container';
	header.innerHTML = `<a href=\"./\"><img src=${logo} alt=\"logo\"></a><div class='navbar-large'><ul class='navbar-links'><li>About &#9662<ul class='dropdown hidden'><li><a href=\"./howitworks\">How it works</a></li><li><a href=\"./prereqs\">Prerequisites</a></li><li><a href=\"./faqs\">FAQs</a></li></ul></li><li id=\"employer-login\">Employer Login</li><li id=\"student-login\">Student Login</li><li><button>Apply</button></li></ul></div><div class='navbar-mobile'><button class=\"hamburger hamburger--spin\" type=\"button\"><span class=\"hamburger-inner\"></span></button></div>`;
	document.body.insertBefore(header, mainActive);
	const mainInactive = document.createElement('main');
	mainInactive.className = 'main-inactive hidden';
	mainInactive.innerHTML = "<a href=\"./howitworks\"><h3>How it works</h3></a><a href=\"./prereqs\"><h3>Prerequisites</h3></a><a href=\"./faqs\"><h3>FAQs</h3></a><hr><h3 id=\"employer-login-mobile\">Employer Login</h3><h3 id=\"student-login-mobile\">Student Login</h3><a href=\"'./apply\"><button>Apply</button></a>";
	document.body.appendChild(mainInactive);
	const footer = document.createElement('footer');
	footer.innerHTML = "<div class='footer-container'><h1><a href=\"./index\">Vector</a></h1><div><h3>About</h3><ul><li><a href=\"./privacy\">Privacy Policy</a></li><li><a href=\"./contact\">Contact</a></li></ul></div><div><h3>Resources</h3><ul><li><a href=\"./faqs\">FAQ</a></li><li><a href=\"./privacy\">How it works</a></li><li><a href=\"./privacy\">Application</a></li></ul></div></div><p></p>";
	document.body.appendChild(footer); 

	//toggle mobile login forms
	const employerOpenBtnMobile = document.getElementById('employer-login-mobile');
	const studentOpenBtnMobile = document.getElementById('student-login-mobile');
	const employerModalMobile = document.querySelector('.employer-modal-mobile');
	const studentLoginModalMobile = document.querySelector('.student-login-modal-mobile');
	const studentRegisterModalMobile = document.querySelector('.student-register-modal-mobile');
	const signUpHere = document.querySelector('.student-login-modal-mobile u');
	const loginHere = document.querySelector('.student-register-modal-mobile u');

	employerOpenBtnMobile.addEventListener('click', openEmployerMobile);

	function openEmployerMobile (e) {
		employerModalMobile.classList.remove('hidden');
	}

	//update copyright by year
	const copyright = document.querySelector('footer p');
	const year = new Date().getFullYear();
	copyright.innerHTML = "Copyright &copy; ".concat(year, " Vector Training Academy. All Rights Reserved."); //toggle active of hamburger

	const hamburger = document.querySelector('.hamburger');
	hamburger.addEventListener("click", function () {
	  hamburger.classList.toggle('is-active');
	  mainActive.classList.toggle('hidden');
	  mainInactive.classList.toggle('hidden');
	  footer.classList.toggle('hidden');
	}); 
	
	//toggle dropdown list (no :hover event on mobile)
	const dropdownParent = document.querySelector('.navbar-links li:first-child');
	const dropdownList = document.querySelector('.dropdown');
	dropdownParent.addEventListener("click", function () {
	  dropdownList.classList.toggle('hidden');
	});
	dropdownParent.addEventListener("mouseover", function () {
	  dropdownList.classList.remove('hidden');
	});
	dropdownParent.addEventListener("mouseout", function () {
	  dropdownList.classList.add('hidden');
	});
};