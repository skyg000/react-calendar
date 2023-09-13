import React, { useState } from 'react';
import '../style/calendar.scss'; // css import
import Calendar from 'react-calendar';


function Calendar1() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
        <Calendar onChange={onChange} value={value} />
        </div>
    );
}
export default Calendar1