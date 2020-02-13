export function addSpinner(element) {
  element.firstElementChild.disabled = true;
  var spinner = document.createElement('div');
  spinner.classList.add('spinner-box');
  spinner.innerHTML = '<div class="circle-border"><div class="circle-core"></div></div>';
  element.appendChild(spinner);
}

export function removeSpinner(element) {
	document.querySelector('.spinner-box').remove();
  	 element.firstElementChild.disabled = false;
}