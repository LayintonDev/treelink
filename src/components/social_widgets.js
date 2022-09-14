import React from "react";

const SocialWidget = ({ image, title, color, bottom_title, isFirst }) => {
	return (
		<div className={`col indi_socials_container `}>
			<img className="socials_img" src={image} alt="twitter" />
			<div className="socials_side_text">
				<h6 className="socials_h6" style={{ color: color }}>
					{title}
				</h6>
				<p className="socials_paragraph">follow</p>
				<p className="socials_paragraph">our account</p>
				<p className="socials_paragraph last">{bottom_title}</p>
			</div>
		</div>
	);
};

export default SocialWidget;
