import React, { useState } from 'react';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

function Emailott() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    otp: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(''); // Clear error message on change
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Invalid email address');
      return;
    }
    
    console.log('Submitted Data:', formData);
    navigate('/Confirm');
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-5 main" style={{ minHeight: "100vh" }}>
      <div>
        <div className="text-center">
          <h2>Email Verification</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 mb-3 row w-100%">
            <label>Email</label>
            <InputField
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-4 mb-3 row w-100%">
            <label>OTP</label>
            <InputField
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              required
            />
          </div>

          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          <div className="d-flex justify-content-center my-3">
            <CustomButton className="fw-bold" label="VERIFY" type="submit" color="primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Emailott;
