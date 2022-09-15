import React from "react";
import Banner from "./banner";
import banner from "../assets/Fugulogo.png";

const FirstBanner = () => {
	return (
		<Banner
			title={"Fugu Nation"}
			className="first_banner_container"
			des={
				"Fugu Nation's promise to it's community is to never stop producingoutisde the box projects that will stun, amaze and innovate. Projectsthat will make sure your investment keeps growing in value & becomes a source of revenue."
			}
			banner={banner}
		/>
	);
};

export default FirstBanner;
