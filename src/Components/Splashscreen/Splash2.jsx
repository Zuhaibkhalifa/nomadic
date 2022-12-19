import React from "react";
import "../../assets/Styles/Splash.css";
import back from "../../assets/Icons/left-arrow.png";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/Icons/Group 41.png";
import image2 from "../../assets/Icons/Group 100.png";

const Splash2 = () => {
  const navigate = useNavigate();
  return (
    <main className="yellow">
      <img
        className="back"
        src={back}
        alt="back"
        onClick={() => navigate("/splash1")}
      />
      <section className="header_p">
        <h4 className="header">Quetion 2 / 3</h4>
        <div className="container">
          <div className="outer">
            <div className="inner2"></div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="image_class">
          <h3 className="h3">How Do You Like to Travel ?</h3>
        </div>
        <div className="wrapper2">
          <button className="button1" onClick={() => navigate("/splash3")}>
            <img className="im1" src={image1} alt="icons" />
            <h2 className="al">Alone</h2>
          </button>
          <button className="button1" onClick={() => navigate("/splash3")}>
            <img className="im2" src={image2} alt="icons 2" />
            <h2 className="al2">With a Group</h2>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Splash2;
