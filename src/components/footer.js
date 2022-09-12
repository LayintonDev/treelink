import React from "react";

const Footer = () => {
	return (
		<div className="main_footer_container  d-flex flex-column flex-lg-row justify-content-between">
			<div className="news_letter me-5 mb-5">
				<h4 className="news_letter_header">get ready for the next drop</h4>
				<form className="news_letter_form">
					<label for="news letter" class="visually-hidden">
						News Letter
					</label>
					<input
						type="text"
						class="form-control form-control-lg"
						id="news_letter"
						placeholder="Enter your email address here..."
					/>
					<button type="submit" class="btn btn-primary btn-sm  subscribe_btn">
						Subscribe
					</button>
				</form>
			</div>
			<div className="quicklink_container d-flex justify-content-between ">
				<div className="inid_quiclink_container me-5">
					<h5 className="quicklink_header">Quick Links</h5>
					<ul>
						<li className="quicklink_list">Home</li>
						<li className="quicklink_list">About Fugu</li>
						<li className="quicklink_list">Collection</li>
					</ul>
				</div>
				<div className="inid_quiclink_container me-5">
					<h5 className="quicklink_header">Quick Links</h5>
					<ul>
						<li className="quicklink_list">Contact Us</li>
						<li className="quicklink_list">FAQ</li>
					</ul>
				</div>
				<div className="inid_quiclink_container">
					<h5 className="quicklink_header">Quick Links</h5>
					<ul>
						<li className="quicklink_list">Policy</li>
						<li className="quicklink_list">Terms & Conditions</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
