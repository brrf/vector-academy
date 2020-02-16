import logo from "../../public/assets/Vector-01.png";
import twitterLogo from '../../public/assets/Twitter_Logo_Blue.png';
import facebookLogo from '../../public/assets/facebook_logo.png';
import redditLogo from '../../public/assets/reddit_logo.png';
import instagramLogo from '../../public/assets/instagram_logo.png';
import linkedinLogo from '../../public/assets/linkedin_logo.png';
import {addSpinner, removeSpinner} from "../../public/js/spinner";
import submitAuthForm from '../../public/js/submit-auth-form.js';

"use strict";
export default function templatePage () {
	const mainActive = document.querySelector('.main-active');

	const header = document.createElement('header');
	header.id = 'navbar-container';
	header.innerHTML = `<a href=\"./\"><img src=${logo} alt=\"logo\"></a><div class='navbar-large'><ul class='navbar-links'><li>About &#9662<ul class='dropdown hidden'><li><a href=\"./howitworks\">How it works</a></li><li><a href=\"./timeline\">Application Timeline</a></li><li><a href=\"./faqs\">FAQs</a></li></ul></li><li id=\"employer-login\">Employer Login</li><li id=\"student-login\">Student Login</li><li><button>Apply</button></li></ul></div><div class='navbar-mobile'><button class=\"hamburger hamburger--spin\" type=\"button\"><span class=\"hamburger-inner\"></span></button></div><div class="login-modal employer-modal hidden"><div id='form-container' class="login-form-container"><span>&times;</span><h2>Employer Login</h2><form><input data-type="text" class="form-full-width" name="institutionID" autocomplete="email" maxlength="50" placeholder="Institution ID" required><input type="password" autocomplete="current-password" class="form-full-width" name="password" maxlength="50" placeholder="Password" required><div class='form-submit-button-container'><button>Login</button></div></form><p>Don't have an account?&nbsp;&nbsp;&nbsp;<a href="./contact"><u>Contact us!</u></a></p></div></div><div class="login-modal student-login-modal hidden"><div id='form-container' class="login-form-container student-login-form-container"><span>&times;</span><h2>Student Login</h2><form><input data-type="text" autocomplete="email" class="form-full-width" name="email" maxlength="50" placeholder="E-mail" required><input type="password" autocomplete="current-password" class="form-full-width" name="password" maxlength="50" placeholder="Password" required> 	<div class='form-submit-button-container'><button>Login</button></div></form><p>Don't have an account?&nbsp;&nbsp;&nbsp;<u>Sign up here!</u></p></div></div><div class="login-modal student-register-modal hidden"><div id='form-container' class="student-register-form-container login-form-container"><span>&times;</span><h2>Register</h2><form id="register-form"><input data-type="text" type="e-mail" class="form-full-width" name="email" maxlength="50" placeholder="E-mail" required><input type="password" class="form-full-width" name="password" autocomplete="new-password" maxlength="50" placeholder="Password" required><input type="password" class="form-full-width" autocomplete="new-password" name="password2" maxlength="50" placeholder="Confirm Password" required>	<div class='form-submit-button-container'><button >Register</button></div></form><p>Already have an account?&nbsp;&nbsp;&nbsp;<u>Sign in here!</u></p></div></div>`;
	document.body.insertBefore(header, mainActive);
	const mainInactive = document.createElement('main');
	mainInactive.className = 'main-inactive hidden';
	mainInactive.innerHTML = "<div class=\"main-inactive-menu\"><a href=\"./howitworks\"><h3>How it works</h3></a><a href=\"./timeline\"><h3>Application Timeline</h3></a><a href=\"./faqs\"><h3>FAQs</h3></a><hr><h3 id=\"employer-login-mobile\">Employer Login</h3><h3 id=\"student-login-mobile\">Student Login</h3><h3><button class=\"student-register-mobile\">Apply</button></h3></div><div class=\"employer-modal-mobile hidden\"><div id='form-container' class=\"login-form-container\"><h2>Employer Login</h2><form><input data-type=\"text\" autocomplete=\"email\" class=\"form-full-width\" name=\"institutionID\" maxlength=\"50\" placeholder=\"Institution ID\" required><input type=\"password\" autocomplete=\"current-password\" class=\"form-full-width\" name=\"password\" maxlength=\"50\" placeholder=\"Password\" required><div class='form-submit-button-container'><button>Login</button>	</div></form><p>Don't have an account?&nbsp;&nbsp;&nbsp;<a href=\"./contact\"><u>Contact us!</u></a></p></div></div><div class=\"student-login-modal-mobile hidden\"><div id='form-container' class=\"login-form-container student-login-form-container\"><h2>Student Login</h2><form><input data-type=\"text\" autocomplete=\"email\" class=\"form-full-width\" name=\"email\" maxlength=\"50\" placeholder=\"E-mail\" required><input type=\"password\" autocomplete=\"current-password\" class=\"form-full-width\" name=\"password\" maxlength=\"50\" placeholder=\"Password\" required> 	<div class='form-submit-button-container'><button>Login</button>	</div></form><p>Don't have an account?&nbsp;&nbsp;&nbsp;<u>Sign up here!</u></p></div></div><div class=\"student-register-modal-mobile hidden\"><div id='form-container' class=\"student-register-form-container login-form-container\"><h2>Register</h2><form id='register-form-mobile'><input data-type=\"text\" type=\"e-mail\" class=\"form-full-width\" name=\"email\" maxlength=\"50\" placeholder=\"E-mail\" required><input type=\"password\" autocomplete=\"current-password\" class=\"form-full-width\" name=\"password\" maxlength=\"50\" placeholder=\"Password\" required><input type=\"password\" autocomplete=\"current-password\" class=\"form-full-width\" name=\"password2\" maxlength=\"50\" placeholder=\"Confirm Password\" required><div class='form-submit-button-container'><button >Register</button></div></form><p>Already have an account?&nbsp;&nbsp;&nbsp;<u>Sign in here!</u></p></div></div>";
	document.body.appendChild(mainInactive);
	const footer = document.createElement('footer');
	footer.innerHTML = `<div class='footer-container'><h1><a href=\"./index\">Vector</a></h1><div class='footer-contents-container'><div><h3>About</h3><ul><li><a href=\"./privacy\">Privacy Policy</a></li><li><a href=\"./contact\">Contact</a></li></ul></div><div><h3>Social</h3><ul><li><a href=\"https://www.twitter.com/VectorAcad\">Twitter</a></li><li><a href=\"https://www.facebook.com/vectoracademy.io/\">Facebook</a></li><li><a href=\"https://www.reddit.com/r/vectoracademy/\">Reddit</a></li><li><a href=\"https://www.instagram.com/vectoracad/\">Instagram</a></li><li><a href=\"https://www.linkedin.com/company/37268628/admin/\">LinkedIn</a></li></ul></div><div><h3>Resources</h3><ul><li><a href=\"./faqs\">FAQ</a></li><li><a href=\"./howitworks\">How it works</a></li><li class=\"footer-student-register\">Application</li></ul></div></div></div><p></p>`;
	document.body.appendChild(footer); 

	//toggle mobile login forms
	const employerOpenBtnMobile = document.getElementById('employer-login-mobile');
	const studentOpenBtnMobile = document.getElementById('student-login-mobile');
	const studentRegisterBtnMobile = document.querySelector('.student-register-mobile');
	const employerModalMobile = document.querySelector('.employer-modal-mobile');
	const studentLoginModalMobile = document.querySelector('.student-login-modal-mobile');
	const studentRegisterModalMobile = document.querySelector('.student-register-modal-mobile');
	const registerHereMobile = document.querySelector('.student-login-modal-mobile u');
	const loginHereMobile = document.querySelector('.student-register-modal-mobile u');
	const mainInactiveMenu = document.querySelector('.main-inactive-menu');

	employerOpenBtnMobile.addEventListener('click', openEmployerMobile);
	studentOpenBtnMobile.addEventListener('click', openLoginStudentMobile);
	studentRegisterBtnMobile.addEventListener('click', openRegisterStudentMobile);	
	registerHereMobile.addEventListener('click', openRegisterStudentMobile);
	loginHereMobile.addEventListener('click', openLoginStudentMobile);

	function openEmployerMobile (e) {
		mainInactiveMenu.classList.add('hidden');
		employerModalMobile.classList.remove('hidden');
	}

	function openLoginStudentMobile (e) {
		mainInactiveMenu.classList.add('hidden');
		if (!studentRegisterModalMobile.classList.contains('hidden')) studentRegisterModalMobile.classList.add('hidden');
		studentLoginModalMobile.classList.remove('hidden');
	}

	function openRegisterStudentMobile (e) {
		studentLoginModalMobile.classList.add('hidden');
		mainInactiveMenu.classList.add('hidden');
		studentRegisterModalMobile.classList.remove('hidden');
	}

	//handle mobile login requests
	const employerLoginBtn = document.querySelector(".employer-modal-mobile button");
	const studentLoginBtn = document.querySelector(".student-login-modal-mobile button");
	const studentRegisterBtn = document.querySelector(".student-register-modal-mobile button");
	employerLoginBtn.addEventListener('click', handleEmployerLogin);
	studentLoginBtn.addEventListener('click', handleStudentLogin);
	studentRegisterBtn.addEventListener('click', handleStudentRegister);


	function tempResponse (userType) {
		const container = document.querySelector(`.${userType}-modal-mobile .login-form-container`);
		const element = document.querySelector('.employer-modal-mobile .form-submit-button-container');
		removeSpinner(element);
		//remove a warning if already present
		if (document.querySelector(`.${userType}-modal-mobile .warning`)) {
			const deleteWarning = document.querySelector(`.${userType}-modal-mobile .login-form-container .warning`);
			container.removeChild(deleteWarning);
		}		
		const h2 = document.querySelector(`.${userType}-modal-mobile .login-form-container h2`);
		let warning = document.createElement('p');
		warning.classList=('warning');
		warning.innerHTML = 'No such user exists';
		container.insertBefore(warning, h2);
	}

	function handleEmployerLogin (e) {
		e.preventDefault();
		//form Validation
		var institutionID = document.querySelector(".employer-modal-mobile form").elements["institutionID"].value
		var password = document.querySelector(".employer-modal-mobile form").elements["password"].value;

	  if (!institutionID || !password) {
	    return;
	  } else {
	  	const element = document.querySelector('.employer-modal-mobile .form-submit-button-container');
	  	addSpinner(element);
	  	setTimeout(tempResponse, 800, 'employer');
	  }	
	}

	function handleStudentLogin(e) {
		e.preventDefault();
		//form Validation
		const email = document.querySelector(".student-login-modal-mobile form").elements["email"].value
		const password = document.querySelector(".student-login-modal-mobile form").elements["password"].value;
		
		const data = {
			email,
			password
		}
			const spinnerElement = document.querySelector('.student-login-modal-mobile form div');
			submitAuthForm(data, 'studentlogin', spinnerElement);
	}	
	

	function handleStudentRegister(e) {
		e.preventDefault();

		const email = document.getElementById("register-form-mobile").elements["email"].value;
		const password = document.getElementById("register-form-mobile").elements["password"].value;
		const password2 = document.getElementById("register-form-mobile").elements["password2"].value;

		const data = {
			email,
			password,
			password2
		};

		const spinnerElement = document.querySelector('#register-form-mobile > div')
		submitAuthForm(data, 'studentregister', spinnerElement);
	}

	//update copyright by year
	const copyright = document.querySelector('footer p');
	const year = new Date().getFullYear();
	copyright.innerHTML = "Copyright &copy; ".concat(year, " Vector Training Academy. All Rights Reserved."); 

	//toggle active of hamburger
	const hamburger = document.querySelector('.hamburger');
	hamburger.addEventListener("click", function () {
	  hamburger.classList.toggle('is-active');
	  mainActive.classList.toggle('hidden');
	  mainInactive.classList.toggle('hidden');
	  mainInactiveMenu.classList.remove('hidden');
	  employerModalMobile.classList.add('hidden');
	  studentRegisterModalMobile.classList.add('hidden');
	  studentLoginModalMobile.classList.add('hidden');
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