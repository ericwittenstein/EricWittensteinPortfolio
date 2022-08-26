import React from "react";
import { Document, Page } from "react-pdf";

import EricWittensteinResume from "../images/Eric Wittenstein Resume.pdf";

export default function Resume() {
	return (
		<div className="main">
			<h3>Resume</h3>
			<Document file={EricWittensteinResume}>
				<Page pageNumber={1} />
			</Document>
		</div>
	);
}
