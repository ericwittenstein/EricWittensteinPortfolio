import React from "react";

// object destructuring assignment to highlight variables from the props object, giving them unique names
function NavTabs({ currentPage, handlePageChange }) {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<div className="d-flex flex-grow-1">
					<span className="w-100 d-lg-none d-block"></span>
					<span className="navbar-brand h1 d-none d-lg-inline-block">
						Eric Wittenstein
					</span>
					<div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarLinks"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					</div>
					<div
						className="collapse navbar-collapse flex-grow-1 text-right"
						id="navbarLinks"
					>
						<ul className="navbar-nav ms-auto flex-nowrap">
							<li className="nav-item">
								<a
									href="#home"
									onClick={() => handlePageChange("Home")}
									// conditional / ternary operator to check if current page is the home page
									// if yes, set to nav link active, otherwise, regular nav link
									className={
										currentPage === "Home"
											? "nav-link active"
											: "nav-link"
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
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavTabs;
