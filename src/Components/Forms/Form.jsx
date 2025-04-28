import React from "react";
import "./Form.css"; // Import the CSS file

function Form({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Sign In</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="form-input"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="form-input"
      />
      <button type="submit" className="form-button">
        Sign In
      </button>
    </form>
  );
}

export default Form;
