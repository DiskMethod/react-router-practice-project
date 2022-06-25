import React from "react";
import classes from "./components/layout/MainNavigation.module.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.logo}>Great Quotes</h1>
        <nav className={classes.nav}>
          <ul>
            <li>All Quotes</li>
            <li>Add a Quote</li>
          </ul>
        </nav>
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
