import React from "react";

const Banner = ({ banner, title, des }) => {
	return (
		<div className="container-fluid">
			<div className="first_container  row">
				<img
					src={banner}
					className="col-lg-5 col-md-6 col-sm-6 banner_img"
					alt="first_banner"
				/>
				<div className="col-lg-7 col-md-6 col-sm-6 banner_test_container">
					<p className="banner_head_test">{title}</p>
					<p className="banner_body_test">{des}</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
