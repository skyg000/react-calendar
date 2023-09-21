import React from 'react'
import '../style/calendar.scss'; 
import background from '../background.jpg';
import { Link } from 'react-router-dom';

function Home() {
   
    return (
        <article className='home'>
            <h1> My Todo </h1>
            <p> 나의 하루를 정리해 보세요. </p>
            <Link to="/calendar1" className='login'> 시작하기 </Link>
            <article className='back'></article>
        </article>
    )
}

export default Home