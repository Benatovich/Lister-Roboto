import React from 'react';
import { addToWatchlist } from './services/fetch-utils';

export default function MovieItem(props) {
  const haveWatched = props.isOnWatchlist(props.movie.id);
  async function handleClick() {
    if (!haveWatched) {
      const watchlistItem = {
        title: props.movie.title,
        api_id: props.movie.id,
        description: props.movie.overview,
        poster: props.movie.poster_path,
      };

      await addToWatchlist(watchlistItem);
      await props.refreshWatchlist();
    }
  }

  return (
    <div onClick={handleClick} 
      className={`movie-item ${haveWatched ? 'watched' : ''}`}>
      <h1>{haveWatched && '❤️'}</h1>
      <h3>{props.movie.title}</h3>
      <em>{props.movie.overview}</em>
      <p>
        <img src={props.movie.poster_path ? `https://image.tmdb.org/t/p/original${props.movie.poster_path}` : './movie-poster-placeholder.png'} />
      </p>
    </div>
  );
}
