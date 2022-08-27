import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Contact() {
	return (
		<div className="main">
			<h3>Contact Me</h3>
			<div className="contact">
				<Form
					action="https://formsubmit.co/eric.wittenstein@gmail.com"
					method="POST"
				>
					<Form.Label>Your Name: </Form.Label>
					<Row>
						<Col>
							<Form.Group
								className="mb-3"
								controlId="formFirstName"
							>
								<Form.Control
									type="text"
									name="firstName"
									placeholder="First Name"
									aria-label="First Name Field"
									required
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group
								className="mb-3"
								controlId="formLastName"
							>
								<Form.Control
									type="text"
									name="lastName"
									placeholder="Last Name"
									aria-label="Last Name Field"
									required
								/>
							</Form.Group>
						</Col>
					</Row>
					<Form.Group className="mb-3" controlId="formEmail">
						<Form.Label>Your Email: </Form.Label>
						<Form.Control
							type="email"
							name="email"
							placeholder="YourEmail@domain.com"
							aria-label="Email Field"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formText">
						<Form.Label>Your Message: </Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							type="text"
							name="message"
							required
						/>
					</Form.Group>
					<Button className="formSubmit" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
}
