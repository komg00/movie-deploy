// MovieDetail.jsx
import React from "react";
import { useParams, useLocation } from "react-router-dom";

const PosterUrl = "https://image.tmdb.org/t/p/w1280/";

const MovieDetail = () => {
  const { title } = useParams();
  const { state } = useLocation();
  return (
    <div className="movie-detail">
      <img src={PosterUrl + state.poster_path} alt="영화이미지" />
      <p>{title}</p>
    </div>
  );
};

export default MovieDetail;