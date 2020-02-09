import "../css/hamburger.css";
import "../css/body.css";
import "../css/forms.css";
import "../css/index_0_0_1.css";
import "../css/spinner.css";
import "../css/howitworks.css";
import "../css/landingpage.css";

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
	submitForm(data);
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
	submitForm(data);
}

function submitForm (data) {

	fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      mode: "cors"
    })
	.then(res => res.json())
	.then(resObject => {
	if (resObject.errors) {
	  addErrors(resObject.errors);
	} else {
	  repaintDOM()
	}
	});
};

function repaintDOM () {
	const formContainer = document.querySelectorAll('#form-container');
	if (document.querySelector('.error-list')) {
		document.querySelector('.error-list').remove()
	}
	const h2 = document.querySelectorAll('#form-container h2');
	const form = document.querySelectorAll('#form-container form');

	h2.forEach(h2 => h2.innerHTML = 'Account created!');
	form.forEach(form => form.remove());
	formContainer.forEach(container => {
		let text = document.createElement('p');
  		text.innerHTML = 'Your application fee will be waived. Stay tuned for more instructions.';
  		text.classList.add('center');
		container.appendChild(text);
	})
}

function addErrors (errors) {
	const formContainer = document.querySelectorAll('#form-container');
	if (document.querySelector('.error-list')) {
		document.querySelector('.error-list').remove()
	}
	let h2s = [];
	formContainer.forEach(container => {
		h2s.push(container.firstElementChild);
	})

	

	formContainer.forEach((container, index) => {
		let errorList = document.createElement('div');
		errorList.classList.add('error-list');
		errors.forEach(error => {
			const newError = document.createElement('p');
			newError.classList.add('warning')
			newError.innerHTML = error;
			errorList.appendChild(newError);
		})
		
		container.insertBefore(errorList, h2s[index]);
	})

}