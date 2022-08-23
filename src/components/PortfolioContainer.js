import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState("Home");

	// checking for current page value, render corresponding component
	const renderPage = () => {
		if (currentPage === "Home") {
			return <Home />;
		}
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Blog") {
			return <Blog />;
		}
		return <Contact />;
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
		</div>
	);
}
