import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Login({ setAuthToken }) {
  // styles
  const styles = {
    show: {
      position: "relative",
      left: "90%",
      bottom: "30px",
      color: "blue",
      cursor: "pointer",
    },
  };

  const navigate = useNavigate();

  // form data state
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // toggle show password
  const toggleShow = () => {
    setShow(!show);
  };

  // handle form data change
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // handle clear input fields
  const handleClearInput = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  // handle form submit

  const apiUrl = import.meta.env.VITE_API_URL
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // Assuming the token is returned in the response
        const token = data.token;

        // Save the token in local storage
        localStorage.setItem("authToken", token);

        // Update the parent component's state (if needed)
        setAuthToken(token);

        alert("Login successful");

        handleClearInput();
        // Navigate to the next view (for example, the cars page)
        navigate("/");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-5 text-danger">Welcome! Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => handleFormDataChange(e)}
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleFormDataChange(e)}
          />
          <div style={styles.show}>
            {show ? (
              <p onClick={toggleShow}>Hide</p>
            ) : (
              <p onClick={toggleShow}>Show</p>
            )}
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
