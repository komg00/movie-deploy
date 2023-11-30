import React from 'react'
import { Link } from 'react-router-dom';
import LoginControl from './LoginControl';
export default function Header() {
  return (
    <header className='header'>
      <Link to="">
        <img 
          className='background-img'
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <ul className='list'>
        <li className='list1'>
          <Link to="/movie">영화</Link>
        </li>
        <li className='list2'>
          <Link to="/tv">TV 프로그램</Link>
        </li>
        <li className='list3'>
          <Link to="/celebrity">인물</Link>
        </li>
        <li className='list4'>
          <Link to="/movie2">movie</Link>
        </li>
        <LoginControl>
          <Link to="/login"></Link>
        </LoginControl>
      </ul>
    </header>
  )
}
