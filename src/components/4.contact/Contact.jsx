import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import checkedAnimation from "../../animation/Checked.json";
import hireAnimation from "../../animation/hire.json";

const Contact = () => {
	const [state, handleSubmit] = useForm("xyzqbagw");

	return (
		<section className="contact-us">
			<h1 className="title">
				<span className="icon-envelope"></span>
				Contact Us
			</h1>
			<p className="sub-title">
				Contact us for more information and Get notified when I puplish
				somting new.
			</p>
			<div style={{ justifyContent: "space-between" }} className="flex">
				<form onSubmit={handleSubmit} className="">
					<div className="flex">
						<label htmlFor="email">Email Adress:</label>
						<input
							autoComplete="off"
							required
							type="email"
							name="email"
							id="email"
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</div>

					<div className="flex" style={{ marginTop: "24px" }}>
						<label htmlFor="message">
							<p>Your message:</p>
						</label>
						<textarea
							required
							name="message"
							id="message"
						></textarea>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>
					</div>
					<button
						type="submit"
						disabled={state.submitting}
						className="submit"
					>
						{state.submitting ? "submitting ..." : "submit"}
					</button>
					{state.succeeded && (
						<p
							className="flex"
							style={{ fontSize: "16px", marginTop: "1.7rem" }}
						>
							<Lottie
								loop={false}
								style={{ height: "35px" }}
								animationData={checkedAnimation}
							/>
							Your message has been sent successfully{" "}
						</p>
					)}
				</form>
				<div className="animation">
					<Lottie
						className="hireAnimation"
						style={{ height: "100" }}
						animationData={hireAnimation}
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
