"use strict";

//toggle active accordion items
const accordion = document.querySelector('#faq-section');
const accordionItems = document.querySelectorAll('.accordion-item');
accordion.addEventListener('click', function (event) {
  
  function findAccordionItem (event) {
    let currentTarget = event.target;
    while (currentTarget.parentNode.tagName != "MAIN") {
      if (currentTarget.classList.contains('accordion-item')) return currentTarget;
      currentTarget = currentTarget.parentNode;
    }
  }
  const accordionItem = findAccordionItem(event)
  if (!accordionItem) return;
  const accordionPanel = accordionItem.lastElementChild;
  const isAlreadyAcive = accordionItem.classList.contains('is-active') ? true : false; 

  if (isAlreadyAcive) {
    accordionItem.classList.remove('is-active');
    accordionPanel.classList.remove('display');
  } else {
    accordionItem.classList.add('is-active');
    accordionPanel.classList.add('display');
  }
});