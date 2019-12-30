import React from "react";

import "../../style/navUx.css";
import logo from "../../img/logoCleverEx.svg";
import { Image } from "react-bootstrap";
const Brand = () => {
  return <Image src={logo} alt="Company Logo" className="img-nav" />;
};

export default Brand;
