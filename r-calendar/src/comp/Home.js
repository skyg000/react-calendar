import React from 'react'
import '../style/calendar.scss'; 
import background from '../background.jpg';
import { Link } from 'react-router-dom';

function Home() {
   
    return (
        <article className='home'>
            <h1> 일정관리 </h1>
            <Link to="/calendar1" className='login'> 시작하기 </Link>
            <article className='back'></article>
        </article>
    )
}

export default Home