import React, { useEffect } from 'react'
import '../style/calendar.scss'; 
import Calendar from 'react-calendar';
import background from '../background.jpg';
import { Link } from 'react-router-dom';
import kakaoLogin from 'react-kakao-login'
function Home() {
    const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

    const onKakaoSocialLogin = () => {
        window.location.href=`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
    }
     // 1. 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  // 2. access Token 요청
  const getToken = async (code) => {
    const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

    const response = await fetch(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });
    return response.json();
  }

  useEffect(() => {
    if (code) {
      getToken(code).then((res) => {
        console.log(res.access_token);
      })
    }
  }, []);

  
    return (
        <>
            
            <h1> 일정관리 </h1>
            <button onClick={onKakaoSocialLogin}>카카오 로그인</button>
            <Link to="/calendar1" className='login'> 시작하기 </Link>
            <img src={background} className='back'/>
        </>
    )
}

export default Home