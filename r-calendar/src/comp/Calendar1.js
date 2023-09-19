import React, { useRef, useState } from 'react';
import '../style/calendar.scss'; 
import Calendar from 'react-calendar';
import Write from './Write';
import background from '../background.jpg';

function Calendar1() {
    const [value, onChange] = useState();
    const wrcal = useRef();
    const list = function(e){
        
        wrcal.current.classList.add('active');
    }
    
    /* 년월일을 id로 내용을 msg json 생성해주기 */
    return (
        <article className='T-calendar'>
        <article className='Wr'>
            <Write wrcal={wrcal}/>
            <img src={background} alt='' className='back'/>
        </article>
        <article className='calendars'>
            <Calendar onClickDay={list} onChange={onChange}
                calendarType="US" /* 일 부터 시작 */
                formatDay={(locale, date) =>  //xx일 -> xx 으로 format 변경
                    new Date(date).toLocaleDateString("en-us", {day: "2-digit",})} 
                // value={['2023-09-06','2023-09-18']}
                tileContent={({ activeStartDate, date, view }) => {
                    const sYear = date.getFullYear(),
                          sMonth = date.getMonth()+1,
                          sDate = date.getDate();

// console.log(sYear, sMonth);
                    let createDate,nYear,nMonth,nDate,role,msg=null;
                   
                    let sca = [
                        {"todo":"홍길동","state":true,"date":'2023-09-02'},{"todo":"홍홍홍","state":false,"date":1695109323325}
                    ];
                    sca.forEach(obj=>{
                        createDate = new Date(obj.date);
                        nYear = createDate.getFullYear();
                        nMonth = createDate.getMonth()+1;
                        nDate = createDate.getDate();

                        role = (view === 'month' && sDate === nDate && sMonth === nMonth && sYear === nYear);
                        if(role){                            
                            msg = obj.todo;
                        }
                    })
                    

                    return msg;
                }}
                />
        </article>
        </article>

        
    );
}
export default Calendar1