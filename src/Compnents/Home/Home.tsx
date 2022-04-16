import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "../Row/Row";

// type Props = {}

export default function Home() {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    async function getData(/*params:type*/) {
      const { data } = await axios.get("https://wookie.codesubmit.io/movies", {
        headers: {
          Authorization: "Bearer Wookie2021",
        },
      });
      setData(data.movies);
      getGenres(data.movies);
    }
    getData();
  }, [data]);

  function getGenres(data: any[]) {
    let genresCol: string[] = [];
    data.forEach(({ genres }) => {
      genres.forEach((value: string) => {
        !genresCol.includes(value) && genresCol.push(value);
      });
    });
    // console.log(genresCol.sort())
    setGenres(genresCol.sort());
  }

  return (
    <div>
      {genres.sort().map((genre, index) => {
        return <Row key={index} data={data} text={genre} />;
      })}
    </div>
  );
}
