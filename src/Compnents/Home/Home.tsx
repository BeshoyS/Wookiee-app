import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "../Row/Row";

// type Props = {}

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(/*params:type*/) {
      const { data } = await axios.get("https://wookie.codesubmit.io/movies", {
        headers: {
          Authorization: "Bearer Wookie2021",
        },
      });
      console.log(data.movies);
      setData(data.movies);
    }
    getData();
  }, []);

  const genres: string[] = ['Action','Crime','Drama', 'Biography', 'History', 'Adventure', 'Sci-Fi', 'Animation','Romance', 'Family', 'Mystery','Thriller', 'War']

  return (
    <div>
        {genres.sort().map((genre, index)=>{
            return(<>
            <Row key={index} data={data} text={genre}/>
            </>)
        })}
    </div>
  );
}
