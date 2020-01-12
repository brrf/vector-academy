//toggle active accordion items

let accordion = document.querySelector('#faq-section');
let accordionItems = document.querySelectorAll('.accordion-item');

accordion.addEventListener('click', function(event) {
	const accordionItem = event.target.closest('.accordion-item');
	const accordionPanel = event.target.closest('.accordion-panel') || event.target.nextElementSibling;

	if (!accordionItem) return;
	const isAlreadyAcive = accordionItem.classList.contains('is-active') ? true : false

	for (let item of accordionItems) {
		item.classList.remove('is-active');
		item.lastElementChild.classList.remove('display')
	}
	
	if (isAlreadyAcive) {
		accordionItem.classList.remove('is-active');
		accordionPanel.classList.remove('display');
	} else {
		accordionItem.classList.add('is-active');		
		accordionPanel.classList.add('display');
	}
});