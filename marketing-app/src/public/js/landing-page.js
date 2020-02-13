import "../css/hamburger.css";
import "../css/body.css";
import "../css/forms.css";
import "../css/index_0_0_1.css";
import "../css/spinner.css";
import "../css/howitworks.css";
import "../css/landingpage.css";
import submitAuthForm from './submit-auth-form.js';
import {addSpinner} from './spinner';

const main = document.querySelector('main');
const mobileRegister = document.querySelectorAll('.mobile .top-content-button');
const mobileModal = document.querySelector('.student-register-modal-mobile');
const register = document.querySelectorAll('.large .top-content-button');
const modal = document.querySelector('.student-register-modal');
const submitButtonMobile = document.querySelector('#register-form-mobile button');
const submitButton = document.querySelector('#register-form button');

mobileRegister.forEach((button) => button.addEventListener('click', openModalMobile));
register.forEach((button) => button.addEventListener('click', openModal));
submitButtonMobile.addEventListener('click', handleSubmitMobile);
submitButton.addEventListener('click', handleSubmit);

function openModalMobile () {
	mobileModal.classList.remove('hidden');
	main.classList.add('hidden');
}

function openModal () {
	modal.classList.remove('hidden');
}

function handleSubmitMobile (e) {
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
	submitForm(data, 'studentregister', spinnerElement);
}

function handleSubmit (e) {
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
}