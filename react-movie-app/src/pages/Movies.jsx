import React, { useState, useRef, useEffect } from "react";
import Movie from "../Components/Movie";
//import { movies } from "../movieDummy";
import axios from "axios";

export default function Movies() {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1); // 스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [loading, setLoading] = useState(false); // 로딩 성공, 실패를 담을 state
  
  const API_KEY = process.env.REACT_APP_KEY;
  const endpoint = 'movie/popular';
  const pageEnd = useRef(null);

  const movieHandler = (page) => {
    setLoading(true);
    axios.get(`https://api.themoviedb.org/3/${endpoint}`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    })
    .then((res) => {
      setMovie((preMovie) => [...preMovie, ...res.data.results]);
      setPage(page + 1)
      setLoading(false);
      console.log(res);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  };
  
  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      movieHandler(page);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (pageEnd.current) {
      observer.observe(pageEnd.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [page]);

  return (
    <div className="container">
      {movie.map((item) => (
        <Movie
          key={item.id}
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
        />
      ))}
      {loading && <p>Loading...</p>}
      <div ref={pageEnd}></div>
    </div>
  );
}
