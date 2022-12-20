import React, { useEffect, useState } from "react";
import "../../assets/Styles/main.scss";
import home from "../../assets/Icons/home.png";
import compass from "../../assets/Icons/compass.png";
import profile from "../../assets/Icons/user.png";
import suit from "../../assets/Icons/suitcase.png";
import chat from "../../assets/Icons/chat-bubble.png";
import { Swiper, SwiperSlide } from "swiper/react";
import tent from "../../assets/Icons/tent.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    return axios

      .get("https://mobileapp.nomadictribe.com/getTribesbyRegion")
      .then((res) => {
        console.log(res.data.tribes);
        setData(res.data.tribes);
        console.log(data[0]);

        // const img = res.data.tribes[0].tribes[0].images[0].image_url;
        // const bg = document.querySelector(".background1");
        // bg.style.backgroundImage = `url(${img})`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <main>
      <div className="main2">
        <button className="but">Tribes</button>
        <button className="but">Traveller</button>
      </div>
      <div className="main">
        <form>
          <input type="text" placeholder="Search Tribes..." />
        </form>
      </div>

      {/* {data.map((d) => {
        return (
          <div>
            <h1>{d._id.region}</h1>
            {d.tribes.map((tribe) => {
              return (
                <div>
                  <p>{tribe.title}</p>
                </div>
              );
            })}
            <h1>{d._id.region}</h1>
          </div>
        );
      })} */}

      <section className="slider">
        <h4>
          Visit them Now <img src={tent} alt="tent" style={{ width: "24px" }} />
        </h4>
        <Swiper
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
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
          {data.map((user) => {
            return (
              <SwiperSlide>
                <div
                  style={{
                    backgroundImage: `url(${user.tribes[0].cover_image}`,
                    backgroundSize: "cover",
                    objectFit: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "300px",
                    height: "200px",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "space-between ",
                    alignItems: "flex-end ",
                    cursor: "pointer",
                  }}
                >
                  <div className="bwrapper">
                    <h4 className="p6">{user.tribes[0].region}</h4>
                    <p className="pp">{user.tribes[0].name}</p>
                    <button className="btn">Book a Trip</button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      {data.map((user) => {
        return (
          <section className="slider2">
            <div>
              <h4 style={{ width: "10%" }} className="africa">
                {user._id.region.replaceAll("_", " ").toUpperCase()}
              </h4>
            </div>
            <div style={{ width: "100%", overflow: "hidden" }}>
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                  "@1.75": {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
              >
                {user.tribes.map((user2) => {
                  return (
                    <SwiperSlide
                      style={{
                        backgroundImage: `url(${user2.cover_image}`,
                        backgroundSize: "cover",
                        objectFit: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "200px",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-end ",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        onClick={() => navigate("/travel")}
                        className="bwrapper"
                      >
                        <h4 className="p6">{user2.title}</h4>
                        <p className="pp">{user2.region}</p>
                        <button className="btn">Book a Trip</button>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
        );
      })}

      <section>
        <div className="navbar">
          <img
            src={home}
            alt="icons"
            onClick={() => navigate("/")}
            style={{ width: "35px", cursor: "pointer" }}
          />
          <img
            src={compass}
            alt="icons"
            style={{ width: "35px", cursor: "pointer" }}
          />
          <img src={profile} alt="icons" style={{ width: "35px" }} />
          <img src={suit} alt="icons" style={{ width: "35px" }} />
          <img src={chat} alt="icons" style={{ width: "35px" }} />
        </div>
      </section>
    </main>
  );
};

export default Home;
