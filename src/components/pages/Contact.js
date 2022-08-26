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
				<Form>
					<Form.Label>Your Name: </Form.Label>
					<Row>
						<Col>
							<Form.Group
								className="mb-3"
								controlId="formFirstName"
							>
								<Form.Control
									type="text"
									placeholder="First Name"
									aria-label="First Name Field"
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
									placeholder="Last Name"
									aria-label="Last Name Field"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Form.Group className="mb-3" controlId="formEmail">
						<Form.Label>Your Email: </Form.Label>
						<Form.Control
							type="email"
							placeholder="YourEmail@domain.com"
							aria-label="Email Field"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formText">
						<Form.Label>Your Message: </Form.Label>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>
					<Button className="formSubmit" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
}
