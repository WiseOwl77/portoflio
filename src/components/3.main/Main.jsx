import { useState } from "react";
import "./Main.css";
import { myProjects } from "./myProjects";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Main = () => {
	const [currentActive, setcurrentActive] = useState("all");
	// @ts-ignore
	const [arr, setArr] = useState(myProjects);
	const handleButtonClick = (buttonCategory) => {
		setcurrentActive(buttonCategory);
		const newArr = myProjects.filter((item) => {
			return item.category === buttonCategory;
		});
		setArr(newArr);
	};
	return (
		<main className="flex">
			<section className="flex left-section">
				<button
					onClick={() => {
						setcurrentActive("all");
						setArr(myProjects);
					}}
					className={currentActive === "all" ? "active" : null}
				>
					All Projects
				</button>
				<button
					onClick={() => {
						setcurrentActive("css");
						handleButtonClick("css");
					}}
					className={currentActive === "css" ? "active" : null}
				>
					Html & Css
				</button>
				<button
					onClick={() => {
						setcurrentActive("java");
						handleButtonClick("java");
					}}
					className={currentActive === "java" ? "active" : null}
				>
					JavaScript
				</button>
				<button
					onClick={() => {
						setcurrentActive("react");
						handleButtonClick("react");
					}}
					className={currentActive === "react" ? "active" : null}
				>
					React
				</button>
				<button
					onClick={() => {
						setcurrentActive("node");
						handleButtonClick("node");
					}}
					className={currentActive === "node" ? "active" : null}
				>
					Node & Express
				</button>
			</section>

			<section className="flex right-section">
				<AnimatePresence>
					{myProjects.map((item) => {
						return (
							<motion.article
								layout
								initial={{ transform: "scale(0)" }}
								animate={{ transform: "scale(1)" }}
								transition={{ type: "spring", damping: 8, stiffness: 50 }}
								key={item.imgPath}
								className="card"
							>
								<img width={266} src={item.imgPath} alt="" />
								<div style={{ width: "266px" }} className="box">
									<h1 className="title">
										{item.projectTitle}
									</h1>
									<p className="sub-title"></p>

									<div className="flex icons">
										<div
											style={{ gap: "11px" }}
											className="flex"
										>
											<div className="icon-link"></div>
											<div className="icon-github"></div>
										</div>
										<a className="link flex" href="">
											more
											<span className="icon-arrow-right"></span>
										</a>
									</div>
								</div>
							</motion.article>
						);
					})}
				</AnimatePresence>
			</section>
		</main>
	);
};

export default Main;
