import React from "react";

// object destructuring assignment to highlight variables from the props object, giving them unique names
function NavTabs({ currentPage, handlePageChange }) {
	return (
		<nav className="navbar navbar-expand-sm justify-content-center">
			<div className="container-fluid">
				<a className="navbar-brand d-flex" href="#about">
					Eric Wittenstein
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarLinks"
					aria-controls="navbarLinks"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse w-100"
					id="navbarLinks"
				>
					<ul className="navbar-nav me-auto w-100 justify-content-end">
						<li className="nav-item">
							<a
								href="#about"
								onClick={() => handlePageChange("About")}
								// if current page is the about page, set to nav link active, otherwise normal
								className={
									currentPage === "About"
										? "nav-link active"
										: "nav-link"
								}
							>
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								href="#projects"
								onClick={() => handlePageChange("Projects")}
								// if current page is the projects page, set to nav link active, otherwise normal
								className={
									currentPage === "Projects"
										? "nav-link active"
										: "nav-link"
								}
							>
								Projects
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
						<li className="nav-item">
							<a
								href="#resume"
								onClick={() => handlePageChange("Resume")}
								// conditional / ternary operator to check if current page is the resume page
								// if yes, set to nav link active, otherwise, regular nav link
								className={
									currentPage === "Resume"
										? "nav-link active"
										: "nav-link"
								}
							>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavTabs;
