// import React, { useState, useEffect } from 'react';
// import InputField from '../components/InputField';
// import CustomButton from '../components/CustomButton';
// import { useNavigate } from 'react-router-dom';

// function Welcome() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [formData, setFormData] = useState({
//     password: '',
//   });

//   useEffect(() => {
//     // Load the email from local storage
//     const storedEmail = localStorage.getItem('userEmail');
//     setEmail(storedEmail || ''); // Set to empty if no email is found
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Data:', formData);
//     navigate('/Imageslider');
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center p-5 main" style={{ minHeight: '100vh' }}>
//       <div>
//         <div className="text-center">
//           <h2>Sign in</h2>
//           <h4>
//             {email ? email : 'No email found'}{' '}
//             <span
//               className="mt-2 blue fw-bold cursor-pointer"
//               onClick={() => navigate('/Login')}
//             >
//               Change
//             </span>
//           </h4>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mt-5 mb-3 row w-100%">
//             <InputField
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="w-100 d-flex justify-content-between">
//             <span className="mt-2 blue fw-bold cursor-pointer" onClick={() => navigate('/Emailott')}>
//               Forgot Password?
//             </span>
//           </div>

//           <div className="d-flex justify-content-center my-3">
//             <CustomButton className="fw-bold" label="CONTINUE" type="submit" color="primary" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Welcome;



import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    password: '',
  });

  useEffect(() => {
    // Load the email from local storage
    const storedEmail = localStorage.getItem('userEmail');
    setEmail(storedEmail || ''); // Set to empty if no email is found
  }, []);

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
      <div>
        <div className="text-center">
          <h2>Sign in</h2>
          <h4>{email ? email : 'No email found'}</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-5 mb-3 row w-100%">
            <InputField
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-100 d-flex justify-content-between">
            <span className="mt-2 blue fw-bold cursor-pointer" onClick={() => navigate('/Emailott')}>
              Forgot Password?
            </span>
          </div>

          <div className="d-flex justify-content-center my-3 gap-3">
            <CustomButton className="fw-bold w-50" label="CONTINUE" type="submit" color="primary" />
            <CustomButton className="fw-bold w-50" label="Update Email" type="button" color="primary" onClick={() => navigate('/Login')} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Welcome;

