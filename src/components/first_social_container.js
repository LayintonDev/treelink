import React from "react";
import twitter from "../assets/Twitter-Fugu.png";
import instagram from "../assets/Insta-Fugu.png";
import facebook from "../assets/Facebook-Fugu.png";
import discord from "../assets/Discord-Fugu.png";
import reddit from "../assets/Reddit-Fugu.png";
import youtube from "../assets/youtube-Fugu.png";
import opensea from "../assets/Opensea-Fugu.png";
import Tiktok from "../assets/Tiktok-Fugu.png";
import cont_browsing from "../assets/Btn.png";
import mobile from "../assets/Mobile.png";
import SocialWidget from "./social_widgets";

const FirstSocialContainer = () => {
	return (
		<div className="socials_container">
			<img src={mobile} alt="mobile" className="mobile" />
			<h5>
				FUGU NATION <span className="social_header_span">TREELINK</span>
			</h5>
			<div className="row row-cols-xs-5 row-cols-sm-5   row-cols-md-5   row-cols-lg-5">
				<SocialWidget
					image={twitter}
					color={"#005cb9"}
					title={"TWITTER"}
					bottom_title="FUGU_NATION"
				/>
				<SocialWidget
					image={instagram}
					color={"#005cb9"}
					title={"INSTAGRAM"}
					bottom_title="FUGU_NATION"
				/>
				<div className="col indi_socials_container"></div>
			</div>
			<div className="row row-cols-xs-5 row-cols-sm-5   row-cols-md-5   row-cols-lg-5">
				<SocialWidget
					image={facebook}
					color={"#005cb9"}
					title={"FACEBOOK"}
					bottom_title="FUGU_NATION"
				/>
				<SocialWidget
					image={discord}
					color={"#005cb9"}
					title={"DISCORD"}
					bottom_title="FUGU_NATION"
				/>
				<SocialWidget
					image={reddit}
					color={"#005cb9"}
					title={"REDDIT"}
					bottom_title="FUGU_NATION"
				/>
			</div>
			<div className="row row-cols-xs-5 row-cols-sm-5   row-cols-md-5   row-cols-lg-5">
				<SocialWidget
					image={youtube}
					color={"#005cb9"}
					title={"YOUTUBE"}
					bottom_title="FUGU_NATION"
				/>
				<SocialWidget
					image={Tiktok}
					color={"#005cb9"}
					title={"TIKTOK"}
					bottom_title="FUGU_NATION"
				/>
				<SocialWidget
					image={opensea}
					color={"#005cb9"}
					title={"OPENSEA"}
					bottom_title="FUGU_NATION"
				/>
			</div>
			<div className="row row-cols-xs-2 row-cols-sm-2   row-cols-md-5   row-cols-lg-2">
				<div className="col"></div>
				<div className="col"></div>
				<a href="/" className="col ms-5 continue_browsing">
					<img
						className="cont_browsing_img"
						src={cont_browsing}
						alt="twitter"
					/>
				</a>
			</div>
		</div>
	);
};

export default FirstSocialContainer;
