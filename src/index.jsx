import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import "./index.css";

import App from "./App";
import Quotes from "./components/pages/Quotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import QuoteAdd from "./components/pages/QuoteAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Quotes />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="/quotes/:id" element={<QuoteDetail />} />
          <Route path="add-qoute" element={<QuoteAdd />} />
          <Route path="*" element={<p>Something went wrong</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
