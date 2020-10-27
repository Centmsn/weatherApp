import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
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
      <span className="footer__small-text">
        Icons made by{" "}
        <a
          className="footer__link"
          href="https://www.flaticon.com/authors/becris"
          title="Becris"
        >
          Becris
        </a>{" "}
        from{" "}
        <a
          className="footer__link"
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          {" "}
          www.flaticon.com
        </a>
      </span>
      <span className="footer__small-text">
        Icons made by{" "}
        <a
          href="https://creativemarket.com/Becris"
          title="Becris"
          className="footer__link"
        >
          Becris
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          className="footer__link"
        >
          {" "}
          www.flaticon.com
        </a>
      </span>
    </div>
  );
};

export default Footer;
