import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = 'https://omdbapi.com?apikey=fe2f6c44'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const searchMovies = async (title) => {
    await fetch(`${API_URL}&s=${title}`).then(res => {
      setMovies(res.json().data.Search)
    })
  }
  

  return (
    <></>
  );
}

export default App;
