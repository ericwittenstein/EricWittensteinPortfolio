import React from "react";

import EricWittensteinResume from "../images/EricWittensteinResume.pdf";

export default function Resume() {
	return (
		<div className="main">
			<h3>Resume</h3>
			<div className="PDF-window">
				<div className="PDF-viewer"></div>
			</div>
		</div>
	);
}
