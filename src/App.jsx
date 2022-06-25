import React from "react";
import classes from "./components/layout/MainNavigation.module.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header className={classes.header}>
        <p className={classes.logo}>Great Quotes</p>
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
