import React from "react";
import "../../assets/Styles/Login.scss";
import main from "../../assets/Images/first.jpg";
import logo from "../../assets/Icons/Image 1.png";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Login = () => {
  const [value, setValue] = React.useState();
  const navigate = useNavigate();
  return (
    <div className="container">
      <section>
        <img className="hero-image" src={main} alt="hero " />
        <img className="logo" src={logo} alt="logo" />
      </section>
      <section className="login">
        <h1>Login</h1>
        <p>Kindly enter your mobile number</p>
        <PhoneInput
          placeholder="Enter Your Phone Number"
          className="global"
          value={value}
          onChange={(value) => setValue(value)}
        />
        <button className="button" onClick={() => navigate("./verification")}>
          Get The OTP
        </button>
      </section>
    </div>
  );
};

export default Login;
