// ===== SignIn.js =====
import React, { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.username}!`);
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">🎮 Welcome Back</h2>
        <p className="signin-subtitle">Sign in to continue your gaming journey</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="signin-options">
            <a href="#" className="forgot-link">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <p className="signup-text">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
