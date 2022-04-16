import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../Interface/Interfaces";
import Row from "../Row/Row";


export default function Home() {
  const [data, setData] = useState<Api[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    async function getData() {
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

  function getGenres(data: Api[]) {
    let genresCol: string[] = [];
    data.forEach(({ genres }) => {
      genres.forEach((value: string) => {
        !genresCol.includes(value) && genresCol.push(value);
      });
    });
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
