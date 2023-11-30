import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAccessToken, loginSuccess } from "../reducer/action";
import { BeatLoader } from 'react-spinners';

const KakaoRedirect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const code = new URL(window.location.href).searchParams.get("code");

        const response = await fetch(`http://localhost:8000/kakao?code=${code}`, {
          method: "POST",
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const data = await response.json();

        console.log(data);
        localStorage.setItem('name', data.result.name);
        localStorage.setItem('token', data.result.token);
        // 토큰을 Redux 스토어에 저장
        dispatch(setAccessToken(data.result.accessToken));
        dispatch(loginSuccess(data.result.name));

        navigate("/");
      } catch (error) {
        console.error("카카오 로그인 실패", error);
        navigate('/');
      }
    };

    fetchAccessToken();
  }, [dispatch, navigate]);

  return (
    <div>
      <BeatLoader color="#36d7b7" />
    </div>
  );
};

export default KakaoRedirect;
