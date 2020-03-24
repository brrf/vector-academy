import React from 'react';
import '../css/footer.css';

export default function Footer () {
	const year = new Date().getFullYear();
	const copyright = "Copyright \u00A9 ".concat(year, " Vector Academy. All Rights Reserved.");

	return (
		<footer className='footer-container'>
			<h1>Vector Academy</h1>
			<div className='footer-contents-container'>
				<p><a href='https://www.vectoracademy.io/privacy'>Privacy Policy</a></p>
				<p><a href='https://www.vectoracademy.io/contact'>Contact Us</a></p>
			</div>				
			<p className='copyright'>{copyright}</p>
		</footer>
	)
}