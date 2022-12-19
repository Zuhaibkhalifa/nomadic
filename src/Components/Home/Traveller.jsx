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
          <img src={icon1} style={{ width: "50px" }} alt="icons" />
          <p>region</p>
          <h4 className="res">Africa</h4>
        </div>
        <div className="ic">
          <img src={icon2} style={{ width: "50px" }} alt="icons" />
          <p>Duration </p>
          <h4 className="res">7 Days</h4>
        </div>
        <div className="ic">
          <img src={icon3} style={{ width: "50px" }} alt="icons" />
          <p>Max Traveller</p>
          <h4 className="res">10</h4>
        </div>
      </section>
      <section className="tribe">
        <h2 className="res">Bolsonoro Tribes</h2>
        <h4 className="h4">
          Incididunt proident ea Lorem elit quis in ullamco magna ex quis
          proident. Deserunt non laboris amet labore aute elit elit est qui
          consequat minim. Incididunt sint amet aliqua laborum officia irure
          fugiat ex est eu fugiat. Lorem in consequat elit qui in. Eiusmod amet
          nulla amet id amet sit excepteur cupidatat ipsum.
        </h4>
        <h2 className="res">Trip itinary</h2>
        <h4 className="h4">
          Incididunt proident ea Lorem elit quis in ullamco magna ex quis
          proident.
        </h4>
      </section>
      <button className="grad">Download Trip itinary</button>
      <section className="tour">
        <h2 className="res">Tour Guide</h2>
        <h5 className="h5">Meet Your trip guide</h5>
        <div className="tourguide">
          <div className="man">
            <img
              src={guide}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "50%",
                marginRight: "50px",
              }}
              alt="guide"
            />
            <div>
              <h4 className="hh">Ratch ford</h4>
              <h5 className="hhh">254 Trips</h5>
              <h6 className="hhhh">kenyan</h6>
            </div>
          </div>
          <div>
            <img src={star} alt="stars" style={{ width: "30px" }} />
            <img src={star} alt="stars" style={{ width: "30px" }} />
            <img src={star} alt="stars" style={{ width: "30px" }} />
            <img src={star} alt="stars" style={{ width: "30px" }} />
            <img src={star} alt="stars" style={{ width: "30px" }} />
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
            <div className="backimage2">
              <div className="bwrapper">
                <h6 className="p6">keygs</h6>
                <p className="pp">Lost America</p>
                <button className="btn">Book a Trip</button>
              </div>
              <div>
                <h6 className="ppp">$ 5,000</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="backimage2">
              <div className="bwrapper">
                <h6 className="p6">keygs</h6>
                <p className="pp">Lost America</p>
                <button className="btn">Book a Trip</button>
              </div>
              <div>
                <h6 className="ppp">$ 5,000</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="backimage2">
              <div className="bwrapper">
                <h6 className="p6">keygs</h6>
                <p className="pp">Lost America</p>
                <button className="btn">Book a Trip</button>
              </div>
              <div>
                <h6 className="ppp">$ 5,000</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="backimage2">
              <div className="bwrapper">
                <h6 className="p6">keygs</h6>
                <p className="pp">Lost America</p>
                <button className="btn">Book a Trip</button>
              </div>
              <div>
                <h6 className="ppp">$ 5,000</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="backimage2">
              <div className="bwrapper">
                <h6 className="p6">keygs</h6>
                <p className="pp">Lost America</p>
                <button className="btn">Book a Trip</button>
              </div>
              <div>
                <h6 className="ppp">$ 5,000</h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="backimage2">
              <div className="bwrapper">
                <h6 className="p6">keygs</h6>
                <p className="pp">Lost America</p>
                <button className="btn">Book a Trip</button>
              </div>
              <div>
                <h6 className="ppp">$ 5,000</h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="green">
        <h4 className="res">Book Trip Now</h4>
        <h4 className="res">$ 2,899</h4>
      </section>
    </section>
  );
};

export default Traveller;
