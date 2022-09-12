import React from "react";
import FirstBanner from "./first_banner";
import SecondBanner from "./second_banner";
import FirstSocialContainer from "./first_social_container";
import SecondSocialContainer from "./second_social_container copy";

const Main = () => {
	return (
		<main>
			<FirstBanner />
			<FirstSocialContainer />
			<SecondBanner />
			<SecondSocialContainer />
			<hr style={{ color: "green", height: "10px" }} />
		</main>
	);
};

export default Main;
