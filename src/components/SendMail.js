import React from "react";
import Arrow from "../assets/images/icon-arrow.svg";
import Error from "../assets/images/icon-error.svg";

const SendMail = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validate = () => {
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      setError("Please provide a valid email");
      return;
    }
    setError(null);
    return console.log("Email sent successfully");
  };

  return (
    <div className="mobileDiv">
      <div className={error ? "sendMail error" : "sendMail"}>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="text"
            id="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <img
            src={Error}
            alt="error"
            className={error ? "errorIcon visible" : "errorIcon"}
          />
          <div className="sendMail__button">
            <input type="submit" value="" />
            <img src={Arrow} alt="arrow" />
          </div>
        </form>
      </div>
      {error ? <p className="errorText">{error}</p> : null}
    </div>
  );
};

export default SendMail;
