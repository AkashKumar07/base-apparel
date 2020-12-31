import React from "react";
import SendMail from "../components/SendMail";
import logo from "../assets/images/logo.svg";

const Content = () => {
  return (
    <div className="content">
      <div className="content__main">
        <img src={logo} alt="logo" className="logo" />
        <div className="imageMobile" />
        <div>
          <p className="content__title">
            <span className="content__title-pronoun">We're</span>
            <br /> Coming <br /> Soon
          </p>
          <p className="content__summary">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <SendMail />
        </div>
      </div>
    </div>
  );
};

export default Content;
