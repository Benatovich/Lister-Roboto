import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieItem from './MovieItem';
import WatchlistItem from './WatchlistItem';

export default function MovieList(props) {
  const location = useLocation();

  return (
    <div className='movie-list'>
      {
        props.movies.map((movie, i) => location.pathname.includes('search')
          ? <MovieItem
            key={movie.title + i}
            movie={movie}
            isOnWatchlist={props.isOnWatchlist}
            refreshWatchlist={props.refreshWatchlist} />
          : <WatchlistItem
            key={movie.title + i}
            refreshWatchlist={props.refreshWatchlist}
            movie={movie} />)
      }
    </div>
  );
}


// first attempt below. new attempt above

// export default function MovieList(props) {
//   // props.movies or props.results?
//   const moviesEl = props.movies.map((item, i) => {
//     return (
//       <MovieItem key={`${item.}`}
//     )
//   })
//   return (
//     <div>MovieList</div>
//   );
// }
