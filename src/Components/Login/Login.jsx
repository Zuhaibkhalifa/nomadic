import React from "react";
import "../../assets/Styles/Login.css";
import main from "../../assets/Images/first.jpg";
import logo from "../../assets/Icons/Image 1.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="image">
        <img className="hero-image" src={main} alt="hero " />
        <img className="logo" src={logo} alt="logo" />
      </section>
      <section className="login">
        <h1>Login</h1>
        <h6 className="pad">Kindly enter your mobile number</h6>
        <input className="input" placeholder="Enter the Number" />
      </section>
      <button className="button" onClick={() => navigate("./verification")}>
        Get The OTP
      </button>
    </div>
  );
};

export default Login;
