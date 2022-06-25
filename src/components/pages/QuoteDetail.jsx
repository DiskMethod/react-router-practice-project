import React from "react";
import { useParams, Outlet } from "react-router-dom";

const QuoteDetail = (props) => {
  const params = useParams();
  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.id}</p>
      <Outlet />
    </>
  );
};

export default QuoteDetail;
