// load Apply modals from buttons

const apply1 = document.querySelector('.top-content-button');
const apply2 = document.querySelector('#jumpstart-section button');
const employerModal = document.querySelector('.employer-modal');
const studentLoginModal = document.querySelector('.student-login-modal');
const studentRegisterModal = document.querySelector('.student-register-modal');


employerModal.addEventListener('click', handleCloseEmployer);
studentLoginModal.addEventListener('click', handleCloseStudentLogin);
studentRegisterModal.addEventListener('click', handleCloseStudentRegister);
apply1.addEventListener('click', openApplyStudent);
apply2.addEventListener('click', openApplyStudent);

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