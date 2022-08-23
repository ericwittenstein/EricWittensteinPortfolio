import React from "react";

// object destructuring assignment to highlight variables from the props object, giving them unique names
function NavTabs({ currentPage, handlePageChange }) {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<a
					href="#home"
					onClick={() => handlePageChange("Home")}
					// conditional / ternary operator to check if current page is the home page
					// if yes, set to nav link active, otherwise, regular nav link
					className={
						currentPage === "Home" ? "nav-link active" : "nav-link"
					}
				>
					Home
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#about"
					onClick={() => handlePageChange("About")}
					// if current page is the about page, set to nav link active, otherwise normal
					className={
						currentPage === "About" ? "nav-link active" : "nav-link"
					}
				>
					About
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#blog"
					onClick={() => handlePageChange("Blog")}
					// if current page is the blog page, set to nav link active, otherwise normal
					className={
						currentPage === "Blog" ? "nav-link active" : "nav-link"
					}
				>
					Blog
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#contact"
					// if current page is the contact page, set to nav link active, otherwise normal
					onClick={() => handlePageChange("Contact")}
					className={
						currentPage === "Contact"
							? "nav-link active"
							: "nav-link"
					}
				>
					Contact
				</a>
			</li>
		</ul>
	);
}

export default NavTabs;
