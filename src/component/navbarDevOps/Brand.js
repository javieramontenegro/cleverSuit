import React from "react";

import "../../style/navDevOps.css";
import logo from "../../img/logoCleverDevOps.svg";
import { Image } from "react-bootstrap";
const Brand = () => {
  return <Image src={logo} alt="Company Logo" className="img-nav" />;
};

export default Brand;
