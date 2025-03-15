


// // // import React, { useState } from 'react';
// // // import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// // // import CustomRadioButtons from '../components/CustomRadioButton';
// // // import InputField from '../components/InputField';
// // // import CustomButton from '../components/CustomButton';
// // // import { Row, Col } from 'react-bootstrap';
// // // import { useNavigate } from 'react-router-dom';
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';

// // // function Createaccount() {
// // //   const navigate = useNavigate();
// // //   const [selected, setSelected] = useState("create"); 
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [formData, setFormData] = useState({
// // //     firstName: "",
// // //     username: "",
// // //     password: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };
  
// // //   const handleRadioChange = (event) => {
// // //     setSelected(event.target.value);
// // //     navigate('/Login');
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const { firstName, username, password } = formData;

// // //     if (!firstName.trim() || !username.trim() || !password.trim()) {
// // //       toast.error("Please fill all required fields!", { position: "top-center" });
// // //       return;
// // //     }

// // //     toast.success("✅ Signed in successfully!", { position: "top-center" });

// // //     setTimeout(() => navigate('/Login'), 1500);
// // //   };

// // //   const handlePasswordToggle = () => {
// // //     setShowPassword(!showPassword);
// // //   };
  
// // //   const signinOptions = [
// // //     { value: "signin", label: "Sign in Already a customer ?" },
// // //   ];

// // //   return (
// // //     <div className="d-flex justify-content-center p-5" style={{ overflow: 'hidden' }}>
// // //       <div className="w-100" style={{ maxWidth: "500px" }}>
// // //         <ToastContainer />

// // //         <div className="text-center mb-4">
// // //           <h3>Welcome</h3>
// // //         </div>

// // //         <form onSubmit={handleSubmit}>
// // //           <CustomRadioButtons 
// // //             options={[{ value: "create", label: "Create account" }]} 
// // //             selectedValue={selected} 
// // //             onChange={() => {}}
// // //           />
          
// // //           <Row className="mb-3">
// // //             <Col xs={12}>
// // //               <InputField
// // //                 type="text"
// // //                 name="firstName"
// // //                 placeholder="First & last name"
// // //                 value={formData.firstName}
// // //                 onChange={handleChange}
// // //                 required
// // //               />
// // //             </Col>
// // //           </Row>
          
// // //           <Row className="mb-3">
// // //             <Col xs={12}>
// // //               <InputField
// // //                 type="text"
// // //                 name="username"
// // //                 placeholder="Mobile number or email"
// // //                 value={formData.username}
// // //                 onChange={handleChange}
// // //                 required
// // //               />
// // //             </Col>
// // //           </Row>

// // //           <Row className="mb-3">
// // //             <Col xs={12}>
// // //               <InputField
// // //                 type={showPassword ? "text" : "password"}
// // //                 name="password"
// // //                 placeholder="Create a password"
// // //                 value={formData.password}
// // //                 onChange={handleChange}
// // //                 required
// // //               />
// // //             </Col>
// // //           </Row>
          
// // //           <Row className="mb-3">
// // //             <Col xs={12}>
// // //               <CustomRadioButtons
// // //                 options={[{ value: "show", label: "Show Password" }]}
// // //                 selectedValue={showPassword ? "show" : ""}
// // //                 onChange={handlePasswordToggle}
// // //               />
// // //             </Col>
// // //           </Row>

// // //           <div className="d-flex justify-content-center mb-3">
// // //             <CustomButton className="fw-bolder" label="CONTINUE" type="submit" color="primary"/>
// // //           </div>

// // //           <p className="text-center mt-2">
// // //             By creating an account, you agree to the Terms of Use and License Agreement, which can be found on the website.
// // //           </p>
          
// // //           <Row className="mt-3">
// // //             <Col xs={12}>
// // //               <CustomRadioButtons
// // //                 options={signinOptions}
// // //                 selectedValue={selected}
// // //                 onChange={handleRadioChange}
// // //               />
// // //             </Col>
// // //           </Row> 
// // //         </form>

// // //         {/* Social Media Icons */}
// // //         <div className="d-flex justify-content-center mt-4">
// // //           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-dark">
// // //             <FaFacebook size={30} />
// // //           </a>
// // //           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-dark">
// // //             <FaTwitter size={30} />
// // //           </a>
// // //           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-dark">
// // //             <FaInstagram size={30} />
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Createaccount;



// // import React, { useState } from 'react';
// // import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// // import CustomRadioButtons from '../components/CustomRadioButton';
// // import InputField from '../components/InputField';
// // import CustomButton from '../components/CustomButton';
// // import { Row, Col } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // function Createaccount() {
// //   const navigate = useNavigate();
// //   const [selected, setSelected] = useState("create"); 
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     username: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };
  
// //   const handleRadioChange = (event) => {
// //     setSelected(event.target.value);
// //     navigate('/Login');
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const { firstName, username, password } = formData;

// //     if (!firstName.trim() || !username.trim() || !password.trim()) {
// //       toast.error("Please fill all required fields!", { position: "top-center" });
// //       return;
// //     }

// //     toast.success("✅ Signed in successfully!", { position: "top-center" });

// //     setTimeout(() => navigate('/Login'), 1500);
// //   };

// //   const handlePasswordToggle = () => {
// //     setShowPassword(!showPassword);
// //   };
  
// //   const signinOptions = [
// //     { value: "signin", label: "Sign in Already a customer ?" },
// //   ];

// //   return (
// //     <div className="d-flex justify-content-center p-5" style={{ overflow: 'hidden' }}>
// //       <div className="w-100" style={{ maxWidth: "500px" }}>
// //         <ToastContainer />

// //         <div className="text-center mb-4">
// //           <h3>Welcome</h3>
// //         </div>

// //         <form onSubmit={handleSubmit}>
// //           <CustomRadioButtons 
// //             options={[{ value: "create", label: "Create account" }]} 
// //             selectedValue={selected} 
// //             onChange={() => {}}
// //           />
          
// //           <Row className="mb-3">
// //             <Col xs={12}>
// //               <InputField
// //                 type="text"
// //                 name="firstName"
// //                 placeholder="First & last name"
// //                 value={formData.firstName}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </Col>
// //           </Row>
          
// //           <Row className="mb-3">
// //             <Col xs={12}>
// //               <InputField
// //                 type="text"
// //                 name="username"
// //                 placeholder="Mobile number or email"
// //                 value={formData.username}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col xs={12}>
// //               <InputField
// //                 type={showPassword ? "text" : "password"}
// //                 name="password"
// //                 placeholder="Create a password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </Col>
// //           </Row>
          
// //           <Row className="mb-3">
// //             <Col xs={12}>
// //               <CustomRadioButtons
// //                 options={[{ value: "show", label: "Show Password" }]}
// //                 selectedValue={showPassword ? "show" : ""}
// //                 onChange={handlePasswordToggle}
// //               />
// //             </Col>
// //           </Row>

// //           <div className="d-flex justify-content-center mb-3">
// //             <CustomButton className="fw-bolder" label="CONTINUE" type="submit" color="primary"/>
// //           </div>

// //           <p className="text-center mt-2">
// //             By creating an account, you agree to the Terms of Use and License Agreement, which can be found on the website.
// //           </p>
          
// //           <Row className="mt-3">
// //             <Col xs={12}>
// //               <CustomRadioButtons
// //                 options={signinOptions}
// //                 selectedValue={selected}
// //                 onChange={handleRadioChange}
// //               />
// //             </Col>
// //           </Row> 
// //         </form>

// //         {/* Social Media Icons with Original Colors */}
// //         <div className="d-flex justify-content-center mt-4">
// //           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ color: "#1877F2" }}>
// //             <FaFacebook size={30} />
// //           </a>
// //           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ color: "#000000" }}>
// //             <FaTwitter size={30} />
// //           </a>
// //           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ color: "#C13584" }}>
// //             <FaInstagram size={30} />
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Createaccount;



// import React, { useState } from 'react';
// import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import CustomRadioButtons from '../components/CustomRadioButton';
// import InputField from '../components/InputField';
// import CustomButton from '../components/CustomButton';
// import { Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Createaccount() {
//   const navigate = useNavigate();
//   const [selected, setSelected] = useState("create"); 
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
  
//   const handleRadioChange = (event) => {
//     setSelected(event.target.value);
//     navigate('/Login');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { firstName, username, password } = formData;

//     if (!firstName.trim() || !username.trim() || !password.trim()) {
//       toast.error("Please fill all required fields!", { position: "top-center" });
//       return;
//     }

//     toast.success("✅ Signed in successfully!", { position: "top-center" });

//     setTimeout(() => navigate('/Login'), 1500);
//   };

//   const handlePasswordToggle = () => {
//     setShowPassword(!showPassword);
//   };
  
//   const signinOptions = [
//     { value: "signin", label: "Sign in Already a customer ?" },
//   ];

//   return (
//     <div className="d-flex justify-content-center p-5" style={{ overflow: 'hidden' }}>
//       <div className="w-100" style={{ maxWidth: "500px" }}>
//         <ToastContainer />

//         <div className="text-center mb-4">
//           <h3>Welcome</h3>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <CustomRadioButtons 
//             options={[{ value: "create", label: "Create account" }]} 
//             selectedValue={selected} 
//             onChange={() => {}}
//           />
          
//           <Row className="mb-3">
//             <Col xs={12}>
//               <InputField
//                 type="text"
//                 name="firstName"
//                 placeholder="First & last name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>
          
//           <Row className="mb-3">
//             <Col xs={12}>
//               <InputField
//                 type="text"
//                 name="username"
//                 placeholder="Mobile number or email"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col xs={12}>
//               <InputField
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Create a password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>
          
//           <Row className="mb-3">
//             <Col xs={12}>
//               <CustomRadioButtons
//                 options={[{ value: "show", label: "Show Password" }]}
//                 selectedValue={showPassword ? "show" : ""}
//                 onChange={handlePasswordToggle}
//               />
//             </Col>
//           </Row>

//           <div className="d-flex justify-content-center mb-3">
//             <CustomButton className="fw-bolder" label="CONTINUE" type="submit" color="primary"/>
//           </div>

//           <p className="text-center mt-2">
//             By creating an account, you agree to the Terms of Use and License Agreement, which can be found on the website.
//           </p>
          
//           <Row className="mt-3">
//             <Col xs={12}>
//               <CustomRadioButtons
//                 options={signinOptions}
//                 selectedValue={selected}
//                 onChange={handleRadioChange}
//               />
//             </Col>
//           </Row> 
//         </form>

//         {/* Social Media Icons with Original Colors */}
//         <div className="d-flex justify-content-center mt-4">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ color: "#1877F2" }}>
//             <FaFacebook size={30} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ color: "#0077B5" }}>
//             <FaLinkedin size={30} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3" style={{ color: "#C13584" }}>
//             <FaInstagram size={30} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Createaccount;

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import CustomRadioButtons from '../components/CustomRadioButton';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Createaccount() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("create"); 
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleRadioChange = (event) => {
    setSelected(event.target.value);
    navigate('/Login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, username, password } = formData;

    if (!firstName.trim() || !username.trim() || !password.trim()) {
      toast.error("Please fill all required fields!", { position: "top-center" });
      return;
    }

    toast.success("✅ Signed in successfully!", { position: "top-center" });

    setTimeout(() => navigate('/Login'), 1500);
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialMediaClick = (url) => {
    window.location.href = url;
  };
  
  const signinOptions = [
    { value: "signin", label: "Sign in Already a customer ?" },
  ];

  return (
    <div className="d-flex justify-content-center p-5" style={{ overflow: 'hidden' }}>
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <ToastContainer />

        <div className="text-center mb-4">
          <h3>Welcome</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <CustomRadioButtons 
            options={[{ value: "create", label: "Create account" }]} 
            selectedValue={selected} 
            onChange={() => {}}
          />
          
          <Row className="mb-3">
            <Col xs={12}>
              <InputField
                type="text"
                name="firstName"
                placeholder="First & last name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          
          <Row className="mb-3">
            <Col xs={12}>
              <InputField
                type="text"
                name="username"
                placeholder="Mobile number or email"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12}>
              <InputField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          
          <Row className="mb-3">
            <Col xs={12}>
              <CustomRadioButtons
                options={[{ value: "show", label: "Show Password" }]}
                selectedValue={showPassword ? "show" : ""}
                onChange={handlePasswordToggle}
              />
            </Col>
          </Row>

          <div className="d-flex justify-content-center mb-3">
            <CustomButton className="fw-bolder" label="CONTINUE" type="submit" color="primary"/>
          </div>

          <p className="text-center mt-2">
            By creating an account, you agree to the Terms of Use and License Agreement, which can be found on the website.
          </p>
          
          <Row className="mt-3">
            <Col xs={12}>
              <CustomRadioButtons
                options={signinOptions}
                selectedValue={selected}
                onChange={handleRadioChange}
              />
            </Col>
          </Row> 
        </form>

        {/* Social Media Icons with Click Function */}
        <div className="d-flex justify-content-center mt-4">
          <span className="mx-3" style={{ color: "#1877F2", cursor: "pointer" }} onClick={() => handleSocialMediaClick("https://facebook.com")}>
            <FaFacebook size={30} />
          </span>
          <span className="mx-3" style={{ color: "#0077B5", cursor: "pointer" }} onClick={() => handleSocialMediaClick("https://linkedin.com")}>
            <FaLinkedin size={30} />
          </span>
          <span className="mx-3" style={{ color: "#C13584", cursor: "pointer" }} onClick={() => handleSocialMediaClick("https://instagram.com")}>
            <FaInstagram size={30} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Createaccount;

