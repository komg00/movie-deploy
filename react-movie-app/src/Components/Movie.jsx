import React from "react";
import { useNavigate } from "react-router-dom";

const PosterUrl = "https://image.tmdb.org/t/p/w1280/";

function Movie(props)  {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/movie/${props.title}`, { state: props });
  };

  return (
  <div className="movie-container" onClick={onClickImg}>
    <img src={PosterUrl + props.poster_path} alt={props.title} />
    <div className="info">
      <h4>{props.title}</h4>
      <span>{props.vote_average}</span>
    </div>
  </div>
  );
}

export default Movie;