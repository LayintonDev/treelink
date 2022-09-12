import React from "react";
import logo from "../assets/EK6IsMVr-removebg-preview (1).png";

const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
				<div className="container-fluid">
					<div className="ms-md-5">
						<img src={logo} height="100px" width="100px" alt="logo" />
						<a className="navbar-brand" href="/">
							Fugu Nation
						</a>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse me-5 flex-grow-0"
						id="navbarNav"
					>
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link " aria-current="page" href="/">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Collections
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" href="/">
									Road Map
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									FAQ
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									Contact Us
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-search"
										viewBox="0 0 16 16"
									>
										<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
									</svg>
									{/* <span class="glyphicon glyphicon-search"></span> */}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
