import React, { useState } from "react";
import "./Header.css";

const Header = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<header className="border flex">
			<button
				onClick={() => setShowModal(true)}
				className="menu icon-list"
			></button>
			<div />
			<nav>
				<ul className="flex">
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">Skills</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
			<button className="mode flex">
				<span className="icon-moon-fill"></span>
			</button>
			{showModal && (
				<div className="fixed">
					<ul className="model">
						<li>
							<button
								className="icon-cancel"
								onClick={() => setShowModal(false)}
							/>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
						<li>
							<a href="#">Skills</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
