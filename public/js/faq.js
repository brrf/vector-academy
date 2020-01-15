"use strict"; //toggle active accordion items

var accordion = document.querySelector('#faq-section');
var accordionItems = document.querySelectorAll('.accordion-item');
accordion.addEventListener('click', function (event) {
  function findAccordionItem(event) {
    var currentTarget = event.target;

    while (currentTarget.parentNode.tagName != "MAIN") {
      if (currentTarget.classList.contains('accordion-item')) return currentTarget;
      currentTarget = currentTarget.parentNode;
    }
  }

  var accordionItem = findAccordionItem(event);
  if (!accordionItem) return;
  var accordionPanel = accordionItem.lastElementChild;
  var isAlreadyAcive = accordionItem.classList.contains('is-active') ? true : false;

  if (isAlreadyAcive) {
    accordionItem.classList.remove('is-active');
    accordionPanel.classList.remove('display');
  } else {
    accordionItem.classList.add('is-active');
    accordionPanel.classList.add('display');
  }
});