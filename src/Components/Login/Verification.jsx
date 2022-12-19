import React from "react";
import "../../assets/Styles/Login.css";
import main from "../../assets/Images/otp.jpg";
import logo from "../../assets/Icons/Image 1.png";
import back from "../../assets/Icons/left-arrow.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="image">
        <img
          className="back"
          src={back}
          alt="back"
          onClick={() => navigate("/")}
        />
        <img className="hero-image" src={main} alt="hero " />
        <img className="logo" src={logo} alt="logo" />
      </section>
      <section className="login">
        <h1>OTP Verification</h1>
        <h6 className="pad">Enter the Otp Sent to +971 54 722 1998</h6>
        <input className="input" placeholder="Enter the OTP" />
      </section>
      <button className="button" onClick={() => navigate("/splash1")}>
        Continue
      </button>
    </div>
  );
};

export default Login;
