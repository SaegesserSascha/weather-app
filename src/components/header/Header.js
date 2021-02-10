import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to="/">
      <header className="header-container">
        <div className="header-content-container">
          <img className="header-img" src="/images/sun.png" alt="" />
          <h1 className="header-title">Wetter</h1>
        </div>
      </header>
    </Link>
  );
}