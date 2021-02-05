import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <ul className="footer-list contact">
        <h3 className="footer-subtitle">Kontakt</h3>
        <li className="footer-list-item">
          <p>Sascha Sägesser</p>
        </li>
        <li className="footer-list-item">
          <p className="footer-link"><a href="https://www.linkedin.com/in/sascha-saegesser/">LinkedIn</a></p>
        </li>
        <li className="footer-list-item">
          <p className="footer-link"><a href="https://github.com/SaegesserSascha">GitHub</a></p>
        </li>
      </ul>
      <ul className="footer-list used-technologies">
        <h3 className="footer-subtitle">Technologien</h3>
        <li className="footer-list-item">
          <p>HTML 5</p>
        </li>
        <li className="footer-list-item">
          <p>CSS 3</p>
        </li>
        <li className="footer-list-item">
          <p>Javascript (ES6+)</p>
        </li>
        <li className="footer-list-item">
          <p className="footer-link">Powered by <a href="https://reactjs.org/">React v17</a></p>
        </li>
      </ul>
    </footer>
  );
}