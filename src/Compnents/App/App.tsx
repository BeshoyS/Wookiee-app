import React from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";
import Search from "../Search/Search";

/*NOTE */
/*Thank you for this chance, i'm still learning typescript and this is the first time to use it and i wasn't ready enough, i'm not satisfied by my preformance, if you can give me another chance, i will do my best to show my skills again */

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
