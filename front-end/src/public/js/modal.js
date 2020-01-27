const employerOpenBtn = document.getElementById('employer-login');
const studentOpenBtn = document.getElementById('student-login');
const employerOpenBtnMobile = document.getElementById('employer-login-mobile');
const studentOpenBtnMobile = document.getElementById('student-login-mobile');
const employerModal = document.querySelector('.employer-modal');
const studentLoginModal = document.querySelector('.student-login-modal');
const studentRegisterModal = document.querySelector('.student-register-modal');
const signUpHere = document.querySelector('.student-login-modal u');
const loginHere = document.querySelector('.student-register-modal u');

employerOpenBtn.addEventListener('click', openEmployer);
studentOpenBtn.addEventListener('click', openLoginStudent);
employerOpenBtnMobile.addEventListener('click', openEmployerMobile);
employerModal.addEventListener('click', handleCloseEmployer);
studentLoginModal.addEventListener('click', handleCloseStudentLogin);
studentRegisterModal.addEventListener('click', handleCloseStudentRegister);
signUpHere.addEventListener('click', openRegisterStudent);
loginHere.addEventListener('click', openLoginStudent);

function openEmployer (e) {
	if (!studentLoginModal.classList.contains('hidden')) studentLoginModal.classList.add('hidden');
	if (!studentRegisterModal.classList.contains('hidden')) studentRegisterModal.classList.add('hidden');
	employerModal.classList.remove('hidden');
}

function openEmployerMobile (e) {
	console.log('here');
}

function openLoginStudent (e) {
	if (!employerModal.classList.contains('hidden')) employerModal.classList.add('hidden');
	if (!studentRegisterModal.classList.contains('hidden')) studentRegisterModal.classList.add('hidden');
	studentLoginModal.classList.remove('hidden');
}

function openRegisterStudent (e) {
	studentLoginModal.classList.add('hidden');
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

