import React from "react";
import "../../stylesheet/layout/footer.scss";
import logo from "../../images/logo.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <small className="footer__small">
          We <i class="footer__heart fas fa-heart"></i> Planet Express
        </small>
        <img className="footer__logo" src={logo} alt="Mad Women" />
      </footer>
    );
  }
}

export default Footer;
