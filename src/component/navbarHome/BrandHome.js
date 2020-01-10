import React from "react";

import "../../style/Home/navHome.css";
import logo from "../../img/logo_cleverit_color.svg";
import { Image } from "react-bootstrap";
const BrandHome = () => {
  return <Image src={logo} alt="Company Logo" className="img-nav" />;
};

export default BrandHome;
