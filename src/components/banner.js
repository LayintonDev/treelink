import React from "react";

const Banner = ({ banner, title, des, className }) => {
	return (
		<div className="">
			<div className={`row  ${className}`}>
				<img
					src={banner}
					className=" col-xs-12 col-sm-6 col-md-2 col-lg-5 banner_img"
					alt="banner"
				/>

				{/*   */}
				{/*  */}
				<div className="col-xs-12 col-sm-6 col-md-10 col-lg-7 banner_test_container">
					<p className="banner_head_test">{title}</p>
					<p className="banner_body_test">{des}</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
