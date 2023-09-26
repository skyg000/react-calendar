import React from 'react'
import '../style/calendar.scss'; 
import { Link } from 'react-router-dom';

function Home() {
   
    return (
        <article className='home'>
            <article className='m-back'></article>
            <article className='info'>
                <h1> My Todo </h1>
                <p> 나의 하루를 정리해 보세요. </p>
                <Link to="/calendar1" className='login'> 시작하기 </Link>
                <article className='back'></article>
            </article>
           
        </article>
    )
}

export default Home