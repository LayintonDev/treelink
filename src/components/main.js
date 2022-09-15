import React from "react";
import FirstBanner from "./first_banner";
import SecondBanner from "./second_banner";
import FirstSocialContainer from "./first_social_container";
import SecondSocialContainer from "./second_social_container";
import mobile from "../assets/Mobile.png";

const Main = () => {
	return (
		<main className="main_body">
			<FirstBanner />
			<img src={mobile} alt="mobile" className="mobile" />
			<FirstSocialContainer />
			<SecondBanner />
			<SecondSocialContainer />
			<hr style={{ color: "green", height: "10px" }} />
		</main>
	);
};

export default Main;
