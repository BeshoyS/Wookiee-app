import { useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { Api } from '../Interface/Interfaces';

// type Props = {}

export default function MovieDetails() {
  const location = useLocation();
  const [movie] = useState<any>(location.state)
  return (
    <main className='movie-details'>
      <section>
        <img src={movie?.poster} alt={movie?.slug} />
      </section>
      <section>
        <div className="title-rating">
          <h1>{movie?.title} <span>[{movie?.imdb_rating}/10]</span></h1>
        </div>
        <div className="genres">
          <h4>{movie?.slug.split('-').at(-1)} | {movie?.length} | {Array.isArray(movie?.director) ? movie?.director.join(', '): movie?.director}</h4>
          <h4>Cast: {movie?.cast.join(', ')}</h4>
        </div>
        <div>
          <p>Movie Overview: {movie?.overview}</p>
        </div>
      </section>
    </main>
  )
}