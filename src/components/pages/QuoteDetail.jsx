import React, { useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";

import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Lucas", text: "Learning React is fun!" },
//   { id: "q2", author: "Markus", text: "Learning React is great!" },
// ];

// Route: /quotes/:id
// Outlet: /quotes/:id/comments <Comments />
const QuoteDetail = (props) => {
  const params = useParams();
  const { sendRequest, status, error, data } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.id);
  }, [sendRequest, params]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  return (
    <>
      <HighlightedQuote text={data.text} author={data.author} />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
