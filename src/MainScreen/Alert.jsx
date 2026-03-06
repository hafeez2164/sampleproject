import React from "react";
import "../CSS/Form/Alert.css"


function Alert({ type, message, onClose }) {
  return (
    <div className="alert-overlay">
      <div className={`alert-box ${type}`}>
        <span className="alert-icon">
          {type === "success" ? "✓" : "⚠"}
        </span>

        <p>{message}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Alert;