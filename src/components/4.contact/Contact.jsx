import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
	const [state, handleSubmit] = useForm("xyzqbagw");

	if (state.succeeded) {
		return <h1>Thanks for message!</h1>;
	}

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
			<div className="flex">
				<form onSubmit={handleSubmit} className="">
					<div className="flex">
						<label htmlFor="email">Email Adress:</label>
						<input required type="email" name="email" id="email" />
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</div>

					<div className="flex" style={{ marginTop: "24px" }}>
						<label htmlFor="message">
							Your message:<p></p>
						</label>
						<textarea
							required
							type="message"
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
						Submit
					</button>
				</form>
				<div className="border animation">animation</div>
			</div>
		</section>
	);
};

export default Contact;
