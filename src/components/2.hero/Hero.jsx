import "./Hero.css";

function Hero() {
	return (
		<section className="hero flex">
			<div className="left-section">
				<div className="parent-avatar flex">
					<img src="./photo.png" className="avatar" alt="" />
					<div className="icon-verified_user"></div>
				</div>
				<h1 className="title">💻 Full Stack Developer. <h6>  Thinks like a strategist, moves like a fighter ♟️</h6></h1>
				<p className="description">I'm a Faten Fared, a software developer with a passion for creating innovative and user-friendly applications. I have experience in full stack development and enjoy working on challenging projects.</p>
				<div className="icons flex">
					<div className="icon-github"></div>
					<div className="icon-linkedin"></div>
				</div>
			</div>
			<div className="right-section animation border">animation</div>
		</section>
	);
}

export default Hero;
