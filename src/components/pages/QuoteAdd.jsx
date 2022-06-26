import React from "react";

import QuoteForm from "../quotes/QuoteForm";

// Route: /add-quote
const QuoteAdd = (props) => {
  const addQuoteHandler = (quote) => {
    console.log(quote);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default QuoteAdd;
