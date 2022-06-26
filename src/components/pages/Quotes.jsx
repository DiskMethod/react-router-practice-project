import React from "react";

import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Lucas", text: "Learning React is fun!" },
  { id: "q2", author: "Markus", text: "Learning React is great!" },
];

// Route: /quotes
const Quotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
