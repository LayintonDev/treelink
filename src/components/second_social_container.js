import React from "react";
import twitter from "../assets/Twitter-PFS.png";
import instagram from "../assets/Insta-PFS.png";
import facebook from "../assets/Facebook-PFS.png";

import opensea from "../assets/Opensea-PFS.png";
import Tiktok from "../assets/Tiktok-PFS.png";

import SocialWidget from "./social_widgets";

const SecondSocialContainer = () => {
	return (
		<div className="socials_container ">
			<h5 style={{ color: "#800080" }}>
				PUFFERSQUAD <span className="social_header_span">TREELINK</span>
			</h5>
			<div className="row row-cols-xs-5 row-cols-sm-5   row-cols-md-5   row-cols-lg-5 ">
				<SocialWidget
					color={"#800080"}
					image={twitter}
					title={"TWITTER"}
					bottom_title="PUFFERSQUAD"
				/>
				<SocialWidget
					color={"#800080"}
					image={instagram}
					title={"INSTAGRAM"}
					bottom_title="PUFFERSQUAD"
				/>
				<div className="col indi_socials_container"></div>
			</div>

			<div className="row row-cols-xs-5 row-cols-sm-5   row-cols-md-5   row-cols-lg-5">
				<SocialWidget
					color={"#800080"}
					image={facebook}
					title={"FACEBOOK"}
					bottom_title="PUFFERSQUAD"
				/>
				<SocialWidget
					color={"#800080"}
					image={Tiktok}
					title={"TIKTOK"}
					bottom_title="PUFFERSQUAD"
				/>
				<SocialWidget
					color={"#800080"}
					image={opensea}
					title={"OPENSEA"}
					bottom_title="PUFFERSQUAD"
				/>
			</div>
		</div>
	);
};

export default SecondSocialContainer;
