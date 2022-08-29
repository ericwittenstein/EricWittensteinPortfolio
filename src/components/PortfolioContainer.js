import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./Footer";

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState("About");

	// checking for current page value, render corresponding component
	const renderPage = () => {
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Resume") {
			return <Resume />;
		}
		if (currentPage === "Projects") {
			return <Projects />;
		} else return <Contact />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			{/* passing currentPage from state and the function to update it */}
			<NavTabs
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			{/* calling the renderPage method which will return a component */}
			{renderPage()}
			<Footer />
		</div>
	);
}
