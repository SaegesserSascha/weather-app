import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { GrReturn } from "react-icons/gr";

export default function Return() {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setIsSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button className={`cta-return-button pointer${isSticky ? " sticky" : ""}`} ref={ref}>
      <div className="return-text-container">
        <span className="return-icon"><GrReturn /></span>
        <p className="return-text">Übersicht</p>
      </div>
    </button>
  );
}