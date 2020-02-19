import {addSpinner, removeSpinner} from './spinner';
import submitAuthForm from './submit-auth-form.js';

export default function loadModals() {
	const employerOpenBtn = document.getElementById('employer-login');
	//const studentOpenBtn = document.getElementById('student-login');
	const employerModal = document.querySelector('.employer-modal');
	const studentLoginModal = document.querySelector('.student-login-modal');
	const studentRegisterModal = document.querySelector('.student-register-modal');
	const studentApplyButton = document.querySelector('#navbar-container button');
	const loginHere = document.querySelector('.student-register-modal u');
	const registerHere = document.querySelector('.student-login-modal u');

	employerOpenBtn.addEventListener('click', openEmployer);
	//studentOpenBtn.addEventListener('click', openLoginStudent);
	employerModal.addEventListener('click', handleCloseEmployer);
	studentLoginModal.addEventListener('click', handleCloseStudentLogin);
	studentRegisterModal.addEventListener('click', handleCloseStudentRegister);
	studentApplyButton.addEventListener('click', openApplyStudent)
	registerHere.addEventListener('click', openRegisterStudent);
	loginHere.addEventListener('click', openLoginStudent);

	function openEmployer (e) {
		if (!studentLoginModal.classList.contains('hidden')) studentLoginModal.classList.add('hidden');
		if (!studentRegisterModal.classList.contains('hidden')) studentRegisterModal.classList.add('hidden');
		employerModal.classList.remove('hidden');
	}

	function openLoginStudent (e) {
		if (!employerModal.classList.contains('hidden')) employerModal.classList.add('hidden');
		if (!studentRegisterModal.classList.contains('hidden')) studentRegisterModal.classList.add('hidden');
		studentLoginModal.classList.remove('hidden');
	}

	function openApplyStudent (e) {
		if (!studentLoginModal.classList.contains('hidden')) studentLoginModal.classList.add('hidden');
		if (!employerModal.classList.contains('hidden')) employerModal.classList.add('hidden');
		studentRegisterModal.classList.remove('hidden');
	}

	function openRegisterStudent (e) {
		if (!studentLoginModal.classList.contains('hidden')) studentLoginModal.classList.add('hidden');
		studentRegisterModal.classList.remove('hidden');
	}

	function handleCloseEmployer (e) {
		if (e.target.nodeName === 'SPAN' || e.target.classList.contains('employer-modal')) {
			employerModal.classList.add('hidden');
		}
	}

	function handleCloseStudentLogin (e) {
		if (e.target.nodeName === 'SPAN' || e.target.classList.contains('student-login-modal')) {
			studentLoginModal.classList.add('hidden');
		}
	}

	function handleCloseStudentRegister (e) {
		if (e.target.nodeName === 'SPAN' || e.target.classList.contains('student-register-modal')) {
			studentRegisterModal.classList.add('hidden');
		}
	}

	//respond to login requests
	const employerLoginBtn = document.querySelector(".employer-modal button");
	const studentLoginBtn = document.querySelector(".student-login-modal button");
	const studentRegisterBtn = document.querySelector(".student-register-modal button");
	employerLoginBtn.addEventListener('click', handleEmployerLogin);
	studentLoginBtn.addEventListener('click', handleStudentLogin);
	studentRegisterBtn.addEventListener('click', handleStudentRegister);

	function tempResponse (userType) {
		const container = document.querySelector(`.${userType}-modal .login-form-container`);
		const element = document.querySelector('.employer-modal .form-submit-button-container');
		removeSpinner(element);
		//remove a warning if already present
		if (document.querySelector(`.${userType}-modal .warning`)) {
			const deleteWarning = document.querySelector(`.${userType}-modal .login-form-container .warning`);
			container.removeChild(deleteWarning);
		}		
		const h2 = document.querySelector(`.${userType}-modal .login-form-container h2`);
		let warning = document.createElement('p');
		warning.classList=('warning');
		warning.innerHTML = 'No such user exists';
		container.insertBefore(warning, h2);
	}

	function handleEmployerLogin (e) {
		e.preventDefault();
		//form Validation
		const institutionID = document.querySelector(".employer-modal form").elements["institutionID"].value
		const password = document.querySelector(".employer-modal form").elements["password"].value;

	  if (!institutionID || !password) {
	    return;
	  } else {
	  	const element = document.querySelector('.employer-modal .form-submit-button-container');
	  	addSpinner(element);
	  	setTimeout(tempResponse, 800, 'employer');
	  }	
	}

	function handleStudentLogin(e) {
		e.preventDefault();
		//form Validation
		const email = document.querySelector(".student-login-modal form").elements["email"].value
		const password = document.querySelector(".student-login-modal form").elements["password"].value;
		
		const data = {
			email,
			password
		}

			const spinnerElement = document.querySelector('.student-login-modal form div');
			submitAuthForm(data, 'studentlogin', spinnerElement)
	}	

	function handleStudentRegister(e) {
		e.preventDefault();

		const email = document.getElementById("register-form").elements["email"].value;
		const password = document.getElementById("register-form").elements["password"].value;
		const password2 = document.getElementById("register-form").elements["password2"].value;

		const data = {
			email,
			password,
			password2
		};

		const spinnerElement = document.querySelector('#register-form > div')
		submitAuthForm(data, 'studentregister', spinnerElement);
	};
};

