import React from "react";
import GitHubImage from "../components/assets/githubicontr.png";
import LinkedInImage from "../components/assets/linkedin.png";
import EmailImage from "../components/assets/emailicon.png";
import logoIcon from "../components/assets/makercoinV3.png";

function Footer() {
	return (
		<footer>
			<div>
				<img
					alt="logo"
					src={logoIcon}
					height="25"
					width="25"
					className="navbar-icon"
				></img>{" "}
				<span>Eric H. Wittenstein, 2022</span>{" "}
				<a
					href="https://github.com/ericwittenstein/"
					rel="noreferrer"
					target="_blank"
				>
					<img
						className="icon"
						alt="github link"
						src={GitHubImage}
						height="25"
						width="30"
					></img>
				</a>
				<a
					href="https://www.linkedin.com/in/ericwittenstein/"
					rel="noreferrer"
					target="_blank"
				>
					<img
						className="icon"
						alt="linkedin link"
						src={LinkedInImage}
						height="30"
						width="30"
					></img>
				</a>
				<a
					href="mailto:eric.wittenstein@gmail.com"
					rel="noreferrer"
					target="_blank"
				>
					<img
						className="icon"
						alt="email link"
						src={EmailImage}
						height="35"
						width="30"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
