import React, { useRef, useState } from 'react';
import '../style/calendar.scss'; // css import
/* import 'react-calendar/dist/Calendar.css'; */
import Calendar from 'react-calendar';
import Write from './Write';
import background from '../background.jpg';

function Calendar1() {
    const [value, onChange] = useState();
    let wrcal =useRef()
    let list = function(e){
        // e.preventDefault();
        console.log( e.getMonth()+1  + '월' + e.getDate() + '일');
        wrcal.current.classList.add('active')
    }
    /* 년월일을 id로 내용을 msg json 생성해주기 */
    return (
        
        <article className='T-calendar'>
        <article className='Wr'>
            <Write wrcal={wrcal}/>
            <img src={background} className='back'/>
        </article>
        <article className='calendars'>
            <Calendar onClickDay={list} onChange={onChange}
                calendarType="US" /* 일 부터 시작 */
                formatDay={(locale, date) =>  //xx일 -> xx 으로 format 변경
                    new Date(date).toLocaleDateString("en-us", {day: "2-digit",})} 
                value={value} 
                />
        </article>
        </article>
    );
}
export default Calendar1