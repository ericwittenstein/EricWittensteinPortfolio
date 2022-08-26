import React from "react";
// import { useState } from "react";
// import { Document, Page } from "react-pdf";
// import SinglePagePDFViewer from "../pdf/single-page";
// import AllPagesPDFViewer from "../pdf/all-pages";
// import { pdfjs } from "react-pdf";
import PdfViewerComponent from "../PdfViewerComponent";

import EricWittensteinResume from "../images/EricWittensteinResume.pdf";

export default function Resume() {
	// const [EricWittensteinResume, setDocument] = useState(
	// 	"../images/EricWittensteinResume.pdf"
	// );

	// const handleOpen = () => setDocument("../images/emailIcon.png");

	return (
		<div className="main">
			<h3>Resume</h3>
			{/* <SinglePagePDFViewer pdf={EricWittensteinResume} /> */}
			{/* <AllPagesPDFViewer pdf={EricWittensteinResume} /> */}
			<div className="PDF-window">
				<div className="PDF-viewer">
					<PdfViewerComponent document={EricWittensteinResume} />
				</div>
			</div>
		</div>
	);
}
