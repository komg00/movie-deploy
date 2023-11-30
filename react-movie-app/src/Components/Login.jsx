import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserInfo, loginSuccess } from '../reducer/action';
import axios from 'axios';

const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
const K_REDIRECT_URI = process.env.REACT_APP_K_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
  }
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert('아이디와 비밀번호를 입력하세요.');
        return;
      }
      const endpoint = 'http://localhost:8000/user/login';
      const requestBody = {
        id: email,
        pw: password,
      };

      const response = await axios.post(endpoint, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('AccessToken')}`,
        },
      })
        if (response.data.result.AccessToken) {
          dispatch(loginSuccess(requestBody.id));
          localStorage.setItem('token', response.data.result.AccessToken);
          localStorage.setItem('id', requestBody.id);
          alert('성공적으로 로그인했습니다!');
          navigate("/");
        } 
      console.log(response.data);
      dispatch(setUserInfo(response.data.result));
    } catch(error) {
      console.log(error);
      alert('ID 또는 비밀번호가 틀립니다.');
    }
  };
  
  useEffect(() => {

  }, [dispatch]);
  
  
  const onEmailHandler = e => {
    const curremail = e.target.value;
    setEmail(curremail);

    if (!curremail) {
      setEmailMsg('올바른 아이디를 입력해주세요.');
    } else {
      setEmailMsg("");
    }
  }

  const onPasswordHandler = e => {
    const currpwd = e.target.value;
    setPassword(currpwd);

    if (!currpwd) {
      setPasswordMsg('올바른 비밀번호를 입력해 주세요.');
    } else {
      setPasswordMsg('');
    }
  }
  
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  }

  return (
    <div className='login-page'>
      <h2 className='login-title'>아이디와 비밀번호를 입력해주세요</h2>
      <form className='login-form' onSubmit={onSubmitHandler}>
        <label>아이디</label>
        <input type='text' className='email' placeholder="아이디" onChange={onEmailHandler}/>
        <p className='login-text'>{emailMsg}</p>
        <label>비밀번호</label>
        <input type='password' className='password' placeholder='비밀번호' onChange={onPasswordHandler}/>
        <p className='login-text'>{passwordMsg}</p>
        <button className='login-btn' type='submit' onClick={handleLogin} style={{backgroundColor: (email&& password) ? "#032541" : "gray"}}>확인</button>
      </form>  
      <button onClick={handleKakaoLogin} className='kakaobutton' />   
    </div>
  );
};
