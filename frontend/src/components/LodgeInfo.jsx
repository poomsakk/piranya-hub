import React from "react";
import { useLocation, useParams } from "react-router-dom";

const LodgeInfo = () => {
  const { lodgeId } = useParams();
  return <div>{lodgeId}</div>;
};

export default LodgeInfo;
