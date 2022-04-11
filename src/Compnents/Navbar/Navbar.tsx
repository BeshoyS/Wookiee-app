import React from "react";
import Search from "../Search/Search";

// type Props = {}

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <h2>Wookies Movies</h2>
      </div>
      <Search/>
    </header>
  );
}
