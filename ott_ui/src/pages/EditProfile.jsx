import React from 'react'
import './EditProfile.scss'
import CustomButton from '../components/CustomButton'
function EditProfile() {
  return (
    <div>
       
            <h2>Edit Profile</h2>
            <hr />
            <div className="parent1">
      <form action="">
        <div className="ed">
        <label htmlFor="Name">Name</label>
        <br />
        <input type="text" placeholder='Change Name'/>
        <br />
        </div>
        <div className="ed">
        <label htmlFor="Email Or MobileNo">Email Or MobileNo</label>
        <br />
        <input type="text" placeholder='Change Email Or MobileNo'/>
        <br />
        </div>
        <div className="ed">
        <label htmlFor="change password">Change Password</label>
        <br />
        <input type="password" placeholder='Enter New Password' />
        <br />
        </div>
        <div className="ed">
        <label htmlFor="change password">Re-Enter Password</label>
        <br />
        <input type="password" placeholder='Re-Enter New Password' />
        </div>
        <br />
        <CustomButton className="Delete" label="Save Changes" type="submit" color="Danger"/>
      </form>
      </div>
      
    </div>
  )
}

export default EditProfile
// import React, { useState } from 'react';
// import { CustomButton, InputField } from '../components';
// import { Container, Typography, Box, Avatar } from '@mui/material';
// import { Save as SaveIcon } from '@mui/icons-material';
 
// const EditProfile = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement form submission logic, such as API calls
//     console.log('Form submitted:', formData);
//   };
 
//   return (
//     <Container maxWidth="sm">
//       <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
//         <Avatar sx={{ width: 80, height: 80, mb: 2 }} />
//         <Typography variant="h5">Edit Profile</Typography>
//         <Box component="form" onSubmit={handleSubmit} width="100%" mt={2}>
//           <InputField
//             label="First Name"
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             placeholder="First Name"
//           />
//           <InputField
//             label="Last Name"
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             placeholder="Last Name"
//           />
//           <InputField
//             label="Email"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="Email Address"
//           />
//           <InputField
//             label="Password"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             placeholder="New Password"
//           />
//           <InputField
//             label="Confirm Password"
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             placeholder="Confirm Password"
//           />
//           <CustomButton
//             label="Save Changes"
//             type="submit"
//             variant="contained"
//             color="primary"
//             showIcon={true}
//             icon={SaveIcon}
//           />
//         </Box>
//       </Box>
//     </Container>
//   );
// };
 
// export default EditProfile;
