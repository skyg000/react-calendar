import React from 'react'
import '../style/calendar.scss'; 
import { Link } from 'react-router-dom';
import KakaoLogin from "react-kakao-login";

function Home() {
    const kakaoClientId = '99799a84525a196bb384d3d3fc0b6545'
    const kakaoOnSuccess = async (data)=>{
      	console.log(data)
        const idToken = data.response.access_token  // 엑세스 토큰 백엔드로 전달
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
    };
    return (
        <article className='home'>
            <article className='m-back'></article>
            <article className='info'>
                <h1> My Todo </h1>
                <p> 나의 하루를 정리해 보세요. </p>
                <Link to="/calendar1" className='login'> 시작하기 </Link>
                <KakaoLogin
                    token={kakaoClientId}
                    onSuccess={kakaoOnSuccess}
                    onFail={kakaoOnFailure}
                />
                <article className='back'></article>
            </article>
        </article>
    )
    }
export default Home