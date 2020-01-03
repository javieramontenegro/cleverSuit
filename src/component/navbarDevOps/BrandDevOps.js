import React from "react";

import "../../style/DevOps/navDevOps.css";
import logo from "../../img/logoCleverDevOps.svg";
import { Image } from "react-bootstrap";
const BrandDevOps = () => {
  return <Image src={logo} alt="Company Logo" className="img-nav" />;
};

export default BrandDevOps;
