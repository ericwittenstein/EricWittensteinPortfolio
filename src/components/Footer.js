import React from "react";
import GitHubImage from "../components/images/githubicontr.png";
import LinkedInImage from "../components/images/linkedin.png";
import EmailImage from "../components/images/emailicon.png";

function Footer() {
	return (
		<footer>
			<div>
				Eric H. Wittenstein, 2022{" "}
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
