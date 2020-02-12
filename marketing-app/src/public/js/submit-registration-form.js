import {removeSpinner} from './spinner';

export default function submitForm (data, spinnerElement) {
	fetch(`${DOMAIN}/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      mode: "cors"
    })
	.then(res => res.json())
	.then(resObject => {
	if (resObject.errors) {
	  addErrors(resObject.errors);
	  removeSpinner();
	} else {
	  removeSpinner();
	  repaintDOM(resObject.promotion);	  
	}
	});
};

function repaintDOM (promotion) {
	const formContainer = document.querySelectorAll('.student-register-form-container');
	if (document.querySelector('.error-list')) {
		document.querySelectorAll('.error-list').forEach(error => error.remove());
	}
	const h2 = document.querySelectorAll('.student-register-form-container h2');
	const form = document.querySelectorAll('.student-register-form-container form');
	const p = document.querySelectorAll('.student-register-form-container p');

	h2.forEach(h2 => h2.innerHTML = 'Account created!');
	form.forEach(form => form.remove());
	if (p) p.forEach(p => p.remove());
	formContainer.forEach(container => {
		let text = document.createElement('p');
		const innerHTML = promotion 
			? 'Your application fee will be waived. Stay tuned for more instructions.'
			: 'You\'re all set for now. Stay tuned for more instructions.'
  		text.innerHTML = innerHTML;
  		text.classList.add('center');
		container.appendChild(text);
	})
}

function addErrors (errors) {
	const formContainer = document.querySelectorAll('.student-register-form-container');
	if (document.querySelector('.error-list')) {
		document.querySelectorAll('.error-list').forEach(error => error.remove());
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