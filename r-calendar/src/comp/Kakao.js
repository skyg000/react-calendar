import React from 'react'
import KakaoLogin from "react-kakao-login";
function Kakao() {
    const kakao = ()=>{
        const CLIENT_ID = 'f99c7cdb15a9689194c203f2bcd50943';
        const REDIRECT_URI = 'https://skyg000.github.io/react-calendar/calendar1';
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
    }
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return (
        <>
           <button onClick={handleLogin}>카카오 로그인</button>
        </>
    )
}

export default Kakao