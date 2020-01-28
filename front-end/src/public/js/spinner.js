export function addSpinner(element) {
  var spinner = document.createElement('div');
  spinner.classList.add('spinner-box');
  spinner.innerHTML = '<div class="circle-border"><div class="circle-core"></div></div>';
  element.appendChild(spinner);
}

export function removeSpinner() {
  document.querySelector('.spinner-box').remove();
}