import React from "react";

function MovieCard({movie}) {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Title}</p>
            </div>
            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://dummyimage.com/300x400/000/fff.png?text=No+image"} alt={movie.Title}></img>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )

}

export default MovieCard