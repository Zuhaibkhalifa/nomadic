import React from "react";
import "../../assets/Styles/Splash.css";
import back from "../../assets/Icons/left-arrow.png";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/Icons/Group 12.png";

const Splash1 = () => {
  const navigate = useNavigate();
  return (
    <main className="yellow">
      <img
        className="back"
        src={back}
        alt="back"
        onClick={() => navigate("/verification")}
      />
      <section className="header_p">
        <h4 className="header">Quetion 1 / 3</h4>
        <div className="container">
          <div className="outer">
            <div className="inner"></div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="image_class">
          <h3 className="h3">How Many Times You Travel in a Year?</h3>
          <img className="image" src={avatar} alt="avatar" />
        </div>
        <div className="wrapper">
          <button className="buttons" onClick={() => navigate("/splash2")}>
            One Time a Year
          </button>
          <button className="buttons" onClick={() => navigate("/splash2")}>
            Two Times a Year
          </button>
          <button className="buttons " onClick={() => navigate("/splash2")}>
            Every 3 months
          </button>
          <button className="buttons" onClick={() => navigate("/splash2")}>
            As long as Possible
          </button>
        </div>
      </section>
    </main>
  );
};

export default Splash1;
