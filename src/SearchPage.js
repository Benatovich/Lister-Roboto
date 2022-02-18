import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { searchMovies, getWatchlist } from './services/fetch-utils';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();

    const movies = await searchMovies(searchQuery);

    setResults(movies);
  }

  async function refreshWatchlist() {
    const myWatchlist = await getWatchlist();

    setWatchlist(myWatchlist);
  }

  useEffect(() => {
    refreshWatchlist();
  }, []);

  function isOnWatchlist(api_id) {
    const match = watchlist.find(item => Number(item.api_id) === Number(api_id));

    return Boolean(match);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <section>
            Search Results:
        <MovieList movies={results} isOnWatchlist={isOnWatchlist}
          refreshWatchlist={refreshWatchlist} />
      </section>
    </div>
  );
}
