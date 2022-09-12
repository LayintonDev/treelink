import React from "react";
import Banner from "./banner";
import banner from "../assets/PFS-banner.png";

const SecondBanner = () => {
	return (
		<Banner
			title={"PufferSquad"}
			banner={banner}
			des={
				'PFS is a "Work-to-earn" NFT project. Your PFS NFT is the key to access the platform we created for you. In this platform, the resources you need to make money from your NFT will be available.'
			}
		/>
	);
};

export default SecondBanner;
