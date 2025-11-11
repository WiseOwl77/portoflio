import "./Main.css";

function Main() {
	return (
		<main className="flex">
			<section className="border flex left-section">
				<button className="active">All Projects</button>
				<button>Html & Css</button>
				<button>JavaScript</button>
				<button>React</button>
				<button>Node & Express</button>
			</section>

			<section className="border flex right-section">
				{["nn", "ll", "kk"].map((item) => {
					return (
            	<article key={item} className="card">
					<img width={266} src="" alt="" />
					<div style={{ width: "266px" }} className="box">
						<h1 className="title"></h1>
						<p className="sub-title"></p>

						<div className="flex icons">
							<div style={{ gap: "11px" }} className="flex">
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
}

export default Main;
