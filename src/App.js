import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieList(response.data);
    }).then(() => {
      setIsLoading(false);
    })
  }, [])

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Upcoming Shows</h1>
          {movieList.map((movie) => {
            return <div>
              <h2>{movie.title}</h2>
              <h3>{movie.date} — {movie.showtime}</h3>
              <h3>{movie.location}</h3>
              <p>{movie.summary}</p>
              <a rel="noreferrer" target="_blank" href={movie.buy_ticket_link}>Buy</a>
            </div>
          })}
        </div>
      )}
    </div>
  );
}

export default App;
