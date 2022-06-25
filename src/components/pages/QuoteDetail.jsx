import React from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = (props) => {
  const params = useParams();
  return <h1>Quote details page for {params.id}</h1>;
};

export default QuoteDetail;
