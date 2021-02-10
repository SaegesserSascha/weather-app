import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content-container">
        <ul className="footer-list">
          <h3 className="footer-subtitle">Kontakt</h3>
          <li className="footer-list-item">
            <p>[REDACTED]</p>
          </li>
          <li className="footer-list-item">
            <p className="footer-link"><a href="https://www.linkedin.com/in/sascha-saegesser/">LinkedIn</a></p>
          </li>
          <li className="footer-list-item">
            <p className="footer-link"><a href="https://github.com/SaegesserSascha">GitHub</a></p>
          </li>
        </ul>
        <ul className="footer-list">
          <h3 className="footer-subtitle">Technologien</h3>
          <li className="footer-list-item">
            <p>HTML 5</p>
          </li>
          <li className="footer-list-item">
            <p>CSS 3</p>
          </li>
          <li className="footer-list-item">
            <p>JavaScript ES6+</p>
          </li>
          <li className="footer-list-item">
            <p className="footer-link">React 17</p>
          </li>
        </ul>
        <ul className="footer-list">
          <h3 className="footer-subtitle">Images</h3>
          <li className="footer-list-item">
            <p className="footer-link">Header icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a><br />
            from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </p>
          </li>
          <li className="footer-list-item">
            <p className="footer-link">Weather icons from <a href="https://www.weatherbit.io/api/meta">Weatherbit</a>
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}