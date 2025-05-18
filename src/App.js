import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = 'https://omdbapi.com?apikey=fe2f6c44'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const searchMovies = async (title) => {
    await fetch(`${API_URL}&s=${title}`).then((res) => res.json()).then((data)=> {
      data.Response === "True" ? (setMovies(data.Search)) : setMovies([])
    })
  }
  useEffect(() => {
    searchMovies("SpiderMan")
  }, [])

  return (
    <div className="app">
      <h1>GeekforGeek's Movie Center</h1>
      <div className="search">
        <input
        placeholder="Search for Movies"
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}} />
        <img 
        src="https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
        alt="search icon"
        onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
      )}
    </div>
  );
}

export default App;
