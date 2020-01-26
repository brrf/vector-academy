const employerOpenBtn = document.getElementById('employer-login');
const studentOpenBtn = document.getElementById('student-login');
const employerModal = document.getElementById('employer-modal');
const employerCloseBtn = document.querySelector("#employer-modal span");

// employerOpenBtn.addEventListener('click', openEmployer);
// studentOpenBtn.addEventListener('click', openStudent);
employerModal.addEventListener('click', handleCloseEmployer);

function handleCloseEmployer (e) {
	console.log(e.target);
}
