import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Movie from './Movie';

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_KEY;
    const endpoint = 'movie/popular';
    axios.get(`https://api.themoviedb.org/3/${endpoint}`, {
      params: {
        api_key: API_KEY,
        page: currentPage,
      },
    })
      .then(response => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log(newPage);
  };

  return (
    <div className="container" >
      {movies.map((item) => (
        <Movie
        key={item.id}
        title={item.title}
        poster_path={item.poster_path}
        vote_average={item.vote_average}
      />
      ))}
      <div className='pagination'>
        {currentPage > 1 && <button onClick={() => handlePageChange(currentPage - 1)}>
          이전
        </button>}
        <span>{currentPage}페이지</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          다음
        </button>
      </div>
    </div>
  );
};
