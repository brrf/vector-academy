//update copyright by year
let copyright = document.querySelector('footer p');
const year = new Date().getFullYear();
copyright.innerHTML = `Copyright &copy; ${year} Vector Training Academy. All Rights Reserved.`;

//toggle active of hamburger
let hamburger = document.querySelector('.hamburger');
let mainActive = document.querySelector('.main-active');
let mainInactive = document.querySelector('.main-inactive');
let footer = document.querySelector('footer');

hamburger.addEventListener("click", function() {
	hamburger.classList.toggle('is-active');
	mainActive.classList.toggle('hidden');
	mainInactive.classList.toggle('hidden');
	footer.classList.toggle('hidden');
})

//toggle dropdown list (no :hover event on mobile)
let dropdownParent = document.querySelector('.navbar-links li:first-child');
let dropdownList = document.querySelector('.dropdown');

dropdownParent.addEventListener("click", function () {
	dropdownList.classList.toggle('hidden');
});

dropdownParent.addEventListener("mouseover", function () {
	console.log('here')
	dropdownList.classList.remove('hidden');

});
dropdownParent.addEventListener("mouseout", function () {
	dropdownList.classList.add('hidden');
});