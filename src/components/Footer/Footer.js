import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__small-text">&#169;2020 Wojciech Rygorowicz</span>
      <span className="footer__small-text">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
          className="footer__link"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          className="footer__link"
        >
          www.flaticon.com
        </a>
      </span>
    </div>
  );
};

export default Footer;
