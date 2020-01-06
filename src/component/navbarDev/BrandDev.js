import React from "react";

import "../../style/Dev/navDev.css";
import logo from "../../img/logoCleverDev.svg";
import { Image } from "react-bootstrap";
const BrandDev = () => {
  return <Image src={logo} alt="Company Logo" className="img-nav" />;
};

export default BrandDev;
