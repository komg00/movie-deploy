import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function LoginControl() {
  const username = useSelector((state) => state.username);
  const token = localStorage.getItem('token');

  return (
    <div className='login'>
      <Link to="/login">
      <button className='login-control' >
        {token ? `${username}님` : '로그인'}
      </button>
      </Link>
      <p className='login-msg'>{token ? '환영합니다!' : '로그인해주세요!'}</p>
    </div>
  )
}
