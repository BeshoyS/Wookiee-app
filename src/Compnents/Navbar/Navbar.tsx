import React from "react";
import { NavLink } from "react-router-dom";
import SearchInput from "../Search/SearchInput";

// type Props = {}

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <h2><NavLink to="/home">Wookies Movies</NavLink></h2>
      </div>
      <SearchInput/>
    </header>
  );
}
