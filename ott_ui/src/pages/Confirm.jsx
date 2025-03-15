import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

function Confirm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    setEmail(storedEmail || '');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    console.log('Submitted Data:', formData);
    localStorage.setItem('userEmail', formData.email); // Store email for future use
    navigate('/Login'); // Redirect after successful submission
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-5 main" style={{ minHeight: '100vh' }}>
      <div>
        <div className="text-center">
          <h2>Confirm Details</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mt-4 mb-3" style={{ width: "300px" }}>
            <InputField
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3" style={{ width: "300px" }}>
            <InputField
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-3" style={{ width: "300px" }}>
            <InputField
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-danger text-center">{error}</p>}

          {/* Submit Button */}
          <div className="d-flex justify-content-center my-3">
            <CustomButton className="fw-bold" label="SUBMIT" type="submit" color="primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Confirm;


