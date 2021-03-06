import React from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../Interface/Interfaces";

type Props = {
  text: string;
  data: Api[];
};

export default function Row({ data, text }: Props) {
  const navigate = useNavigate();
  return (
    <section className="row">
      <h2>{text}</h2>
      <div className="category">
        {data
          ?.filter((movie) => movie?.genres?.includes(text))
          ?.map((movie) => {
            return (
              <img
                onClick={() => navigate(`/movies/${movie.id}`, {state: movie})}
                key={movie.id}
                className="movie__backdrop"
                src={movie?.backdrop}
                alt={movie?.slug}
              />
            );
          })}
      </div>
    </section>
  );
}
