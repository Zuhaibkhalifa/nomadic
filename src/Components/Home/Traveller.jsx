import React from "react";
import guide from "../../assets/Images/guide.jpg";
import scene from "../../assets/Images/scene.jpg";
// import profile from "../../assets/Images/profile.jpg";
import icon2 from "../../assets/Icons/calend.png";
import icon3 from "../../assets/Icons/plus.png";
import icon1 from "../../assets/Icons/Group 93.png";
import back from "../../assets/Icons/left-arrow.png";
import share from "../../assets/Icons/upload.png";
import star from "../../assets/Icons/star.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import profile from "../../assets/Images/profile.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Traveller = () => {
  const navigate = useNavigate();
  return (
    <section>
      <section className="image">
        <img
          className="back"
          src={back}
          alt="back"
          onClick={() => navigate("/home")}
        />
        <img className="hero-image" src={scene} alt="hero " />
        <img className="share" src={share} alt="share" />
      </section>
      <section className="box">
        <div className="ic">
          <img src={icon1} style={{ width: "35px" }} alt="icons" />
          <h6>region</h6>
          <h5>Africa</h5>
        </div>
        <div className="ic">
          <img src={icon2} style={{ width: "35px" }} alt="icons" />
          <h6>Duration </h6>
          <h5>7 Days</h5>
        </div>
        <div className="ic">
          <img src={icon3} style={{ width: "35px" }} alt="icons" />
          <h6>Max Traveller</h6>
          <h5>10</h5>
        </div>
      </section>
      <section className="tribe">
        <h2>Bolsonoro Tribes</h2>
        <p>
          Incididunt proident ea Lorem elit quis in ullamco magna ex quis
          proident. Deserunt non laboris amet labore aute elit elit est qui
          consequat minim. Incididunt sint amet aliqua laborum officia irure
          fugiat ex est eu fugiat. Lorem in consequat elit qui in. Eiusmod amet
          nulla amet id amet sit excepteur cupidatat ipsum.
        </p>
        <h2>Trip itinary</h2>
        <p>
          Incididunt proident ea Lorem elit quis in ullamco magna ex quis
          proident.
        </p>
      </section>
      <button className="grad">Download Trip itinary</button>
      <section className="tour">
        <h2>Tour Guide</h2>
        <p>Meet Your trip guide</p>
        <div className="tourguide">
          <div className="man">
            <img
              src={guide}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                marginRight: "20px",
              }}
              alt="guide"
            />
            <div>
              <h4>Ratch</h4>
              <q>254 Trips</q>
              <h6 className="hhhh">kenyan</h6>
            </div>
          </div>
          <div>
            <img src={star} alt="stars" style={{ width: "20px" }} />
            <img src={star} alt="stars" style={{ width: "20px" }} />
            <img src={star} alt="stars" style={{ width: "20px" }} />
            <img src={star} alt="stars" style={{ width: "20px" }} />
            <img src={star} alt="stars" style={{ width: "20px" }} />
          </div>
        </div>
      </section>
      <h2 className="review res">Review</h2>
      <section>
        <Swiper
          modules={[Pagination]}
          className="mySwiper"
          centeredSlides={true}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 250,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 250,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 200,
            },
          }}
        >
          <SwiperSlide>
            <div
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                boxShadow: "0 5px 10px rgb(0 0 0 / 0.2)",
                padding: "20px",
                margin: "20px",
              }}
            >
              <div className="bbwrapper">
                <img
                  alt="profile"
                  src={profile}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    boxShadow: " 0 5px 10px rgb(0 0 0 / 0.6)",
                  }}
                />
                <h4>arwa</h4>
                <h6>One of the best places in world</h6>
                <div>
                  <img src={star} alt="stars" style={{ width: "20px" }} />
                  <img src={star} alt="stars" style={{ width: "20px" }} />
                  <img src={star} alt="stars" style={{ width: "20px" }} />
                  <img src={star} alt="stars" style={{ width: "20px" }} />
                  <img src={star} alt="stars" style={{ width: "20px" }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                boxShadow: "0 5px 10px rgb(0 0 0 / 0.2)",
                padding: "20px",
                margin: "20px",
              }}
            >
              <div className="bbwrapper">
                <img
                  alt="profile"
                  src={profile}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    boxShadow: " 0 5px 10px rgb(0 0 0 / 0.6)",
                  }}
                />
                <h4>arwa</h4>
                <h6>One of the best places in world</h6>
                <div>
                  <img src={star} alt="stars" style={{ width: "20px" }} />
                  <img src={star} alt="stars" style={{ width: "20px" }} />
                  <img src={star} alt="stars" style={{ width: "20px" }} />
                  <img src={star} alt="stars" style={{ width: "20px" }} />
                  <img src={star} alt="stars" style={{ width: "20px" }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="green">
        <h4>Book Trip Now</h4>
        <h4>$ 2,899</h4>
      </section>
    </section>
  );
};

export default Traveller;
