import React, { useState } from 'react'
import '../style/calendar.scss'; 
import Calendar from 'react-calendar';
import background from '../background.jpg';
import { Link } from 'react-router-dom';
function Home() {

    return (
        <>
            <h1> 일정관리 </h1>
            <Link to="/calendar1" className='login'> 시작하기 </Link>
            <img src={background} className='back'/>
        </>
    )
}

export default Home