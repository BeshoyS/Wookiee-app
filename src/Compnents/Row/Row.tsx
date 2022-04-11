import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
  data: any[];
};

export default function Row({ data, text }: Props) {
  const navigate = useNavigate();
  return (
    <section className="row">
      <h2>{text}</h2>
      <div className="category">
        {data
          ?.filter((movie) => movie.genres?.includes(text))
          ?.map((movie) => {
            return (
              <img
                onClick={() => navigate(`/movies/${movie.id}`)}
                key={movie.id}
                className="movie__backdrop"
                src={movie?.backdrop}
                alt={movie?.title}
              />
            );
          })}
      </div>
    </section>
  );
}
