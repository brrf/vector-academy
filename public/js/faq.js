//toggle active accordion items

let accordion = document.querySelector('.accordion');
let accordionItems = document.querySelectorAll('.accordion-item');

accordion.addEventListener('click', function(event) {
	const li = event.target.closest('li');
	if (!li) return;
	const isAlreadyAcive = li.classList.contains('is-active') ? true : false

	for (let item of accordionItems) {
		item.classList.remove('is-active');
		item.lastElementChild.classList.remove('display')
	}
	
	if (isAlreadyAcive) {
		li.classList.remove('is-active');
		li.lastElementChild.classList.remove('display');
	} else {
		li.classList.add('is-active');
		li.lastElementChild.classList.add('display');
	}
	
})