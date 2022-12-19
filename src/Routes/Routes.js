import React, { useState } from "react";
import { Routes as Router, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import Verification from "../Components/Login/Verification";

import { Context } from "../Container/Context";
import Splash1 from "../Components/Splashscreen/Splash1";
import Splash2 from "../Components/Splashscreen/Splash2";
import Splash3 from "../Components/Splashscreen/Splash3";
import Home from "../Components/Home/Home";
import Traveller from "../Components/Home/Traveller";

const Routes = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Context.Provider value={{ activeStep, setActiveStep }}>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/splash1" element={<Splash1 />} />
        <Route path="/splash2" element={<Splash2 />} />
        <Route path="/splash3" element={<Splash3 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/travel" element={<Traveller />} />
      </Router>
    </Context.Provider>
  );
};

export default Routes;
