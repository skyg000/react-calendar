import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../style/calendar.scss'; 
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Calendar1 from '../comp/Calendar1';
function Home() {
    const [value, onChange] = useState(new Date());

    return (
        <main>
            
            <Calendar onChange={onChange}
                calendarType="US"
                formatDay={(locale, date) =>
                    //xx일 -> xx 으로 format 변경
                    new Date(date).toLocaleDateString("en-us", {day: "2-digit",})
                    } 
                value={value} 
            />
        </main>
    );
}

export default Home