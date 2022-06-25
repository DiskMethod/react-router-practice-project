import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "./index.css";
// Pages
import App from "./App";
import Quotes from "./components/pages/Quotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import QuoteAdd from "./components/pages/QuoteAdd";

// Components
import Comments from "./components/comments/Comments";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Quotes />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="/quotes/:id" element={<QuoteDetail />}>
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="add-quote" element={<QuoteAdd />} />
          <Route path="*" element={<p>Something went wrong</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
