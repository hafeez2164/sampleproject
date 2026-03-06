import React, { useState } from "react";
import "../CSS/Form/form.css";

import EyeHiddenIcon from "../assets/icons/EyeHiddenIcon";
import EyeVisibleIcon from "../assets/icons/EyeVisibleIcon";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Alert from './Alert';

function Form() {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertData, setAlertData] = useState(null);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // ✅ Handle Login
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !password) {
    setAlertData({
      type: "error",
      message: "Please fill all fields!",
    });
  } else {
    setAlertData({
      type: "success",
      message: "Login Successful!",
    });
  }
};

  return (
    <div className="Form-container">

      <div className="form-header">
        <h2>Measi Institute of Information Technology</h2>
        <h5>Manage your college efficiently</h5>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-fields">

          <label>College Email ID:</label>
          <input
            type="text"
            placeholder="Enter College Mail ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Enter Your Password:</label>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span className="icon" onClick={togglePassword}>
              {showPassword ? <EyeVisibleIcon /> : <EyeHiddenIcon />}
            </span>
          </div>

        </div>

        <div className="form-button">
          <button type="submit">Login</button>
          <p>Forget Password?</p>
        </div>

      </form>

      {/* ✅ Toast Container */}
      {/* <ToastContainer position="top-right" autoClose={2000} /> */}

      {alertData && (
  <Alert
    type={alertData.type}
    message={alertData.message}
    onClose={() => setAlertData(null)}
  />
)}

    </div>
  );
}

export default Form;