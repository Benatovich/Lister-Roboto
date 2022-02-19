import React from 'react';
import { watchMovie } from './services/fetch-utils';

export default function WatchlistItem(props) {
  async function handleClick(){
    await watchMovie(props.movie.id);

    await props.refreshWatchlist();
  }

  return (
    <div onClick={handleClick}
      className='movie-item watchlist-item'>
      <h1> {props.movie.watched ? '✅' : '👀'}</h1>
      <h3>{props.movie.title}</h3>
      <em>{props.movie.description}</em>
      <p>
        <img src={props.movie.poster ? `https://image.tmdb.org/t/p/original${props.movie.poster}` : './movie-poster-placeholder.png'} />
      </p>
    </div>
  );
}
