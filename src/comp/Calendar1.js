import React, { useState } from 'react';
import '../style/calendar.scss'; // css import
/* import 'react-calendar/dist/Calendar.css'; */
import Calendar from 'react-calendar';
import background from '../background.jpg';

function Calendar1() {
    const [value, onChange] = useState(new Date());

    return (
        
        <div>
        <main>
            <img src={background} className='back'/>
        </main>
        <article className='calendars'>
            <Calendar onChange={onChange}
                calendarType="US" /* 일 부터 시작 */
                formatDay={(locale, date) =>  //xx일 -> xx 으로 format 변경
                    new Date(date).toLocaleDateString("en-us", {day: "2-digit",})} 
                value={value} 
            />
        </article>
        </div>
    );
}
export default Calendar1