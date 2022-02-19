import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getWatchlist } from './services/fetch-utils';

export default function WatchlistPage() {
  const [movies, setMovies] = useState([]);

  async function refreshWatchlist() {
    const watchlist = await getWatchlist();

    setMovies(watchlist);
  }

  useEffect(() => {
    refreshWatchlist();
  }, []);

  return (
    <div>
      <h1>Watchlist</h1>
      <MovieList movies={movies} refreshWatchlist={refreshWatchlist} />
    </div>
  );
}
