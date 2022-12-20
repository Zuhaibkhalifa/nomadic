import React from "react";
import "../../assets/Styles/Splash.scss";
import back from "../../assets/Icons/left-arrow.png";
import { useNavigate } from "react-router-dom";
import image from "../../assets/Images/howdoes.jpg";
import happy from "../../assets/Icons/Group 84.png";
import boring from "../../assets/Icons/Group 87.png";
import wierd from "../../assets/Icons/Group 91.png";
import exciting from "../../assets/Icons/Group 89.png";

const Splash3 = () => {
  const navigate = useNavigate();
  return (
    <main className="yellow">
      <img
        className="back"
        src={back}
        alt="back"
        onClick={() => navigate("/splash2")}
      />
      <section className="header_p">
        <h4 className="header">Quetion 3 / 3</h4>
        <div className="container">
          <div className="outer">
            <div className="inner3"></div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="image_class">
          <h3 className="h3">How Does This Image Feelo To You?</h3>
        </div>
        <img className="how" src={image} alt="hoe" />
        <div className="wrapper3">
          <button className="button3" onClick={() => navigate("/home")}>
            <img className="imim" src={happy} alt="happy" />
          </button>
          <button className="button3" onClick={() => navigate("/home")}>
            <img className="imim" src={boring} alt="happy" />
          </button>
          <button className="button3 " onClick={() => navigate("/home")}>
            <img className="imim" src={exciting} alt="happy" />
          </button>
          <button className="button3" onClick={() => navigate("/home")}>
            <img className="imim" src={wierd} alt="happy" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Splash3;
