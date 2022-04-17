import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center mt-3">Please Login</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" placeholder="Your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="Register">
          Submit
        </Button>
      </Form>
      <p>
        Already have an account?
        <span
          className="text-danger text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </span>
      </p>
    </div>
  );
};

export default Register;
