import React, { useState } from 'react';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

function EditProfile1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    navigate('/Imageslider');
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-5 main" style={{ minHeight: '100vh' }}>
      <div style={{ width: '100%', maxWidth: '500px' }}> 
        <div className="text-center">
          <h2>Edit Profile</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 mb-3">
            <InputField
              type="text"
              name="name"
              placeholder="Enter New Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%' }} 
            />
          </div>

          <div className="mt-4 mb-3">
            <InputField
              type="email"
              name="email"
              placeholder="Enter New Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%' }} 
            />
          </div>

          <div className="mt-4 mb-3">
            <InputField
              type="password"
              name="password"
              placeholder="Enter New Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </div>

          <div className="w-80 d-flex ">
            <span className="mt-2 blue fw-bold cursor-pointer" onClick={() => navigate('/Emailott')}>
              Forgot Password?
            </span>
          </div>

          <div className="d-flex justify-content-center my-3">
            <CustomButton
              className="fw-bold"
              label="SAVE"
              type="submit"
              color="primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile1;

 
 