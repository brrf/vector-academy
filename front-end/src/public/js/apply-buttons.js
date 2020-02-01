// load Apply modals from home screen buttons

const apply1 = document.querySelector('#top-content-section-large button');
const apply2 = document.querySelector('#jumpstart-section.large button');
const apply1Mobile = document.querySelector('#top-content-section-mobile button')
const apply2Mobile = document.querySelector('#jumpstart-section.mobile button')
const employerModal = document.querySelector('.employer-modal');
const studentLoginModal = document.querySelector('.student-login-modal');
const studentRegisterModal = document.querySelector('.student-register-modal');
const mainInactive = document.querySelector('.main-inactive');
const mainInactiveMenu = document.querySelector('.main-inactive-menu');
const mainActive = document.querySelector('.main-active');
const studentRegisterModalMobile = document.querySelector('.student-register-modal-mobile');
const hamburger = document.querySelector('.hamburger');
const footer = document.querySelector('footer');


employerModal.addEventListener('click', handleCloseEmployer);
studentLoginModal.addEventListener('click', handleCloseStudentLogin);
studentRegisterModal.addEventListener('click', handleCloseStudentRegister);
apply1.addEventListener('click', openApplyStudent);
apply2.addEventListener('click', openApplyStudent);
apply1Mobile.addEventListener('click', openApplyStudentMobile);
apply2Mobile.addEventListener('click', openApplyStudentMobile);

function openApplyStudent (e) {
	if (!studentLoginModal.classList.contains('hidden')) studentLoginModal.classList.add('hidden');
	if (!employerModal.classList.contains('hidden')) employerModal.classList.add('hidden');
	studentRegisterModal.classList.remove('hidden');
}

function handleCloseEmployer (e) {
	if (e.target.nodeName === 'SPAN' || e.target.classList.contains('employer-modal')) {
		employerModal.classList.add('hidden');
	}
}

function handleCloseStudentLogin (e) {
	if (e.target.nodeName === 'SPAN' || e.target.classList.contains('student-login-modal')) {
		studentLoginModal.classList.add('hidden');
	}
}

function handleCloseStudentRegister (e) {
	if (e.target.nodeName === 'SPAN' || e.target.classList.contains('student-register-modal')) {
		studentRegisterModal.classList.add('hidden');
	}
}

function openApplyStudentMobile (e) {
	footer.classList.add('hidden');
	hamburger.classList.add('is-active');
	mainActive.classList.add('hidden');
	mainInactive.classList.remove('hidden');
	mainInactiveMenu.classList.add('hidden');
	studentRegisterModalMobile.classList.remove('hidden');
	window.scrollTo(0, 0);
}