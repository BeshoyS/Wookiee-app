import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

// type Props = {}

const Search = () => {
  const [searchInp, setsearchInp] = useState<string | null>("");
  const [searchData, setsearchData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getSearchData(/*params:type*/) {
      const { data } = await axios.get(
        `https://wookie.codesubmit.io/movies?q=${searchInp}`,
        {
          headers: {
            Authorization: "Bearer Wookie2021",
          },
        }
      );
      setsearchData(data.movies);
    }
    getSearchData();
  }, [searchInp]);

  return (
    <div>
      <div className="search-page">
        <input
          type="search"
          onChange={(e) => setsearchInp(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <div className="search-sec">
        {searchData.map((movie: any) => {
            return (
              <div key={movie.id}>
                <img
                  onClick={() =>
                    navigate(`/movies/${movie.id}`, { state: movie })
                  }
                  className="movie__backdrop"
                  src={movie?.backdrop}
                  alt={movie?.slug}
                />
                <h4>{movie?.title}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
