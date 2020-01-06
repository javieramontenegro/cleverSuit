import React from "react";

import "../../style/Qa/navQa.css";
import logo from "../../img/logoCleverQa.svg";
import { Image } from "react-bootstrap";
const BrandQa = () => {
  return <Image src={logo} alt="Company Logo" className="img-nav" />;
};

export default BrandQa;
