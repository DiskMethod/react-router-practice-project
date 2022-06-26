import React from "react";
import { useParams, Outlet } from "react-router-dom";

import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Lucas", text: "Learning React is fun!" },
  { id: "q2", author: "Markus", text: "Learning React is great!" },
];

// Route: /quotes/:id
// Outlet: /quotes/:id/comments <Comments />
const QuoteDetail = (props) => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.id);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
