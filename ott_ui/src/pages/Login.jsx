import React, { useState, useEffect } from 'react';
import CustomRadioButtons from '../components/CustomRadioButton';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("signin"); // Default selection for sign-in
  const [formData, setFormData] = useState({
    username: "",  // Mobile number or email field
  });

  const [errors, setErrors] = useState({
    username: "",
  });

  // Load stored email when component mounts
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setFormData({ username: storedEmail });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    // Validate Mobile Number or Email
    if (!formData.username) {
      validationErrors.username = "Please enter your mobile number or email";
    } else if (!/^\d{10}$/.test(formData.username) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.username)) {
      validationErrors.username = "Enter a valid 10-digit mobile number or email";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save updated email to local storage
    localStorage.setItem('userEmail', formData.username);

    console.log("Submitted Data:", formData);
    navigate('/Welcome'); // Redirect to Welcome page
  };

  const handleRadioChange = (event) => {
    setSelected(event.target.value);
    navigate('/');
  };

  const signinOptions = [
    { value: "signin", label: "Sign in Already a customer?" },
  ];
  const radioOptions = [
    { value: "create", label: "Create account" },
  ];

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <div className="text-center mb-4">
            <h3>Welcome</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <CustomRadioButtons
              options={radioOptions}
              selectedValue={selected}
              onChange={handleRadioChange}
            />
            <Row className="mt-3">
              <Col xs={12}>
                <CustomRadioButtons
                  options={signinOptions}
                  selectedValue={selected}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>

            {/* Mobile Number / Email Input */}
            <Row className="mb-3">
              <Col xs={12}>
                <InputField
                  type="text"
                  name="username"
                  placeholder="Mobile number or email"
                  value={formData.username}
                  onChange={handleChange}
                  required 
                  style={{ width: "90%", height: "40px", fontSize: "16px" }}
                />
                {errors.username && <p className="text-danger">{errors.username}</p>}
              </Col>
            </Row>

            {/* Submit Button */}
            <div className="d-flex justify-content-center mb-3">
              <CustomButton className="fw-bolder" label="Continue" type="submit" color="primary" />
            </div>

            <p className="text-center mt-2">
              By creating an account, you agree to the Terms of Use and<br />
              License Agreement, which can be found on the website.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
