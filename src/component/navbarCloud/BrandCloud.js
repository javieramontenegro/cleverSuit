import React from "react";

import "../../style/Cloud/navCloud.css";
import logo from "../../img/logoCleverDevOps.svg";
import { Image } from "react-bootstrap";
const BrandCloud = () => {
  return <Image src={logo} alt="Company Logo" className="img-nav" />;
};

export default BrandCloud;
