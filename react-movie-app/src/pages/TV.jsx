import React from "react";
//import { useNavigate } from "react-router-dom";
import { programs } from "../tvDummy";

const PosterUrl = "https://image.tmdb.org/t/p/w1280/";

function TV()  {
  //const navigate = useNavigate();

  const onClickImg = () => {
    //navigate(`/tv/${name}`, { name, poster_path, vote_average });
  };

  return (
    <div className="container">
      
        {programs.results.map((item) => (
          <div key={item.id} className="movie-container" onClick={() => onClickImg(item)}>
            <img src={PosterUrl + item.poster_path} alt={item.name} />
            <div className='info'>
              <h4>{item.name}</h4>
              <span>{item.vote_average}</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TV;