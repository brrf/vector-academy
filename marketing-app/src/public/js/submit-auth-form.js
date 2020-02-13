import {addSpinner, removeSpinner} from './spinner';
import twitterLogo from '../assets/Twitter_Logo_Blue.png';

export default function submitAuthForm (data, url, spinnerElement, button) {
	addSpinner(spinnerElement);
	if (url === 'studentregister') {
		submitStudentRegistrationForm(data, spinnerElement);
	} else if (url === 'studentlogin') {
			submitStudentLoginForm(data, spinnerElement)
	}	
};

function submitStudentRegistrationForm (data, spinnerElement) {
	fetch(`${DOMAIN}/studentregister`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      mode: "cors"
    })
	.then(res => res.json())
	.then(resObject => {
	const formContainer = document.querySelectorAll('.student-register-form-container');
	if (resObject.errors) {	  
	  addErrors(resObject.errors, formContainer);
	  removeSpinner(spinnerElement);
	} else {
	  removeSpinner(spinnerElement);
	  repaintDOMRegister(resObject.promotion);	  
	}
	});
}

function submitStudentLoginForm (data, spinnerElement) {
	fetch(`${DOMAIN}/studentlogin`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      mode: "cors"
    })
	.then(res => res.json())
	.then(resObject => {
	  const formContainer = document.querySelectorAll('.student-login-form-container');
	  if (resObject.errors) {
	  	addErrors(resObject.errors, formContainer);
		removeSpinner(spinnerElement);	
	  }
	  else {
	  	addSuccess(resObject.success, formContainer);
	  	removeSpinner(spinnerElement);
	  	repaintDOMLogin();
	  }
	});
}

function repaintDOMRegister (promotion) {
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

function repaintDOMLogin () {
	const buttonContainer = document.querySelectorAll('.student-login-form-container .form-submit-button-container');
	
	buttonContainer.forEach(container => {
		const link = document.createElement('a');
		link.href = 'https://twitter.com/VectorAcad'
		const twitter = document.createElement('img');
		twitter.src = twitterLogo;
		twitter.classList = 'twitter-logo';
		twitter.alt = 'twitter-link';
		link.appendChild(twitter);
		container.appendChild(link)

	});
}

function addErrors (errors, formContainer) {
	if (document.querySelector('.error-list')) {
		document.querySelectorAll('.error-list').forEach(error => error.remove());
	}
	let h2s = [];
	formContainer.forEach(container => {
		h2s.push(container.firstElementChild);
	})

	formContainer.forEach((container, index) => {
		let alertList = document.createElement('div');
		alertList.classList.add('error-list');
		errors.forEach(error => {
			const newError = document.createElement('p');
			newError.classList.add('warning')
			newError.innerHTML = error;
			alertList.appendChild(newError);
		})
		
		container.insertBefore(alertList, h2s[index]);
	})
}

function addSuccess (success, formContainer) {
	if (document.querySelector('.error-list')) {
		document.querySelectorAll('.error-list').forEach(error => error.remove());
	}
	let h2s = [];
	formContainer.forEach(container => {
		h2s.push(container.firstElementChild);
	})

	formContainer.forEach((container, index) => {
		let alertList = document.createElement('div');
		alertList.classList.add('error-list');
		const newSuccess = document.createElement('p');
		newSuccess.classList.add('success')
		newSuccess.innerHTML = success;
		alertList.appendChild(newSuccess);
		container.insertBefore(alertList, h2s[index]);
	})

}