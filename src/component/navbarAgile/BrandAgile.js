import React from "react";

import "../../style/Agile/navAgile.css";
import logo from "../../img/logoCleverAgile.svg";
import { Image } from "react-bootstrap";
const BrandAgile = () => {
  return <Image src={logo} alt="Company Logo" className="img-nav" />;
};

export default BrandAgile;
