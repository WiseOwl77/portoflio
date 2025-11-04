import React, { useState } from "react";
import "./Header.css";

const Header = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<header className="border flex">
			<button onClick={() => setShowModal(true)} className="menu">show model</button>
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
			<button>light</button>
{showModal && (
  	<div className="fixed">
				<ul className="model">
          <li>
            <button onClick={() => setShowModal(false)}>close</button>
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
