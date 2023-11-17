import React from 'react'
import '../style/calendar.scss'; 
import { Link } from 'react-router-dom';

function Home() {
   
    return (
        <article className='home'>
            <article className='m-back'></article>
            <article className='info'>
                <h1> 나 </h1>
                <h1> 의 </h1>
                <h1> 하 </h1>
                <h1> 루 </h1>
                </article>
                <p> 나의 하루를 정리해 보세요. </p>
                <Link to="/calendar1" className='login'> 시작하기 </Link>
              
                <article className='back'></article>
        </article>
    )
    }
export default Home