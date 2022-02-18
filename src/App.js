import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';
import SearchPage from './SearchPage';
import WatchlistPage from './WatchlistPage';
import { logout } from './services/fetch-utils';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  return (
    <Router>
      <div className="App">
        {
          user &&
          <ul>
            <li>
              <NavLink activeClassName='my-active-class' to="/search">Search Page</NavLink>
            </li>
            <li>
              <NavLink activeClassName='my-active-class' to="/watchlist">Watchlist</NavLink>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        }
        <Switch>
          <Route exact path="/">
            {
              user
                ? <Redirect to="/search"/>
                : <AuthPage setUser={setUser}/>
            }
          </Route>
          <Route exact path="/search">
            {
              !user
                ? <Redirect to="/"/>
                : <SearchPage />
            }
          </Route>
          <Route exact path="/watchlist">
            {
              !user
                ? <Redirect to="/"/>
                : <WatchlistPage />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
