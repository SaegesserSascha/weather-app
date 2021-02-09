import React from "react";
import "./style.css";
import { GrReturn } from "react-icons/gr";

export default function Return() {
  return (
    <button className="cta-return-button">
      <div className="return-text-container">
        <span className="return-icon"><GrReturn /></span>
        <p className="return-text">Übersicht</p>
      </div>
    </button>
  );
}