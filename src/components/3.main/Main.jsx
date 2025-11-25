import { useState } from "react";
import "./Main.css";

const myProjects = [
	{
		projectTitle: "Project 1",
		category: "css",
		imgPath: "",
		github: "",
	},
	{
		projectTitle: "Project 2",
		category: "java",
		imgPath: "",
		github: "",
	},
	{
		projectTitle: "Project 3",
		category: "",
		imgPath: "",
		github: "",
	},
];

const Main = () => {
	const [currentActive, setcurrentActive] = useState("all");
	const [arr, setArr] = useState(myProjects);
	return (
		<main className="flex">
			<section className="border flex left-section">
				<button
					onClick={() => {
						setcurrentActive("all");
					}}
					className={currentActive === "all" ? "active" : null}
				>
					All Projects
				</button>
				<button
					onClick={() => {
						setcurrentActive("css");
						const newArr = myProjects.filter((item) => {
							return item.category === "css";
						});
						setArr(newArr);
					}}
					className={currentActive === "css" ? "active" : null}
				>
					Html & Css
				</button>
				<button
					onClick={() => {
						setcurrentActive("java");
						const newArr = myProjects.filter((item) => {
							return item.category === "java";
						});
						setArr(newArr);
					}}
					className={currentActive === "java" ? "active" : null}
				>
					JavaScript
				</button>
				<button
					onClick={() => {
						setcurrentActive("react");
						const newArr = myProjects.filter((item) => {
							return item.category === "react";
						});
						setArr(newArr);
					}}
					className={currentActive === "react" ? "active" : null}
				>
					React
				</button>
				<button
					onClick={() => {
						setcurrentActive("node");
						const newArr = myProjects.filter((item) => {
							return item.category === "node";
						});
						setArr(newArr);
					}}
					className={currentActive === "node" ? "active" : null}
				>
					Node & Express
				</button>
			</section>

			<section className="border flex right-section">
				{myProjects.map((item) => {
					return (
						<article key={item.imgPath} className="card">
							<img width={266} src={item.imgPath} alt="" />
							<div style={{ width: "266px" }} className="box">
								<h1 className="title">{item.projectTitle}</h1>
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
						</article>
					);
				})}
			</section>
		</main>
	);
};

export default Main;
