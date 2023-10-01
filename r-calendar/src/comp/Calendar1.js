import React, { useRef, useState, useEffect } from 'react';
import '../style/calendar.scss';
import Calendar from 'react-calendar';
import Write from './Write';
import nosc from '../imges/nosc2.png'
function Calendar1() {
    const [value, onChange] = useState();
    let today = new Date();
    let tyear = today.getFullYear();
    let tmonth = today.getMonth() + 1;
    let tday = today.getDate();

    const [date, setDate] = useState(`${tyear}.${tmonth}.${tday}`);
    const wrcal = useRef();
    const calendars = useRef();
    const nosc1 =useRef();
    const list = function (e) {
        let year = e.getFullYear();
        let month = e.getMonth() + 1;
        let day = e.getDate();
        console.log(date, `${year}.${month}.${day}`);
        if (date == `${year}.${month}.${day}`) {
            wrcal.current.classList.remove('active');
            calendars.current.classList.remove('on');
            nosc1.current.classList.remove('on1');
        } else {
            setDate(`${year}.${month}.${day}`)
            wrcal.current.classList.add('active');
            calendars.current.classList.add('on');
            nosc1.current.classList.add('on1');
        }
    }

    useEffect(() => {
        // wrcal.current = document.querySelector('.T-calendar');
    }, []);
    /* 년월일을 id로 내용을 msg json 생성해주기 */
    return (
        <article className='T-calendar'>

            <article className='calendars' ref={calendars}>
                <Calendar onClickDay={list} onChange={onChange}
                    calendarType="US" /* 일 부터 시작 */
                    formatDay={(locale, date) =>  //xx일 -> xx 으로 format 변경
                        new Date(date).toLocaleDateString("en-us", { day: "2-digit", })}
                    // value={['2023-09-06','2023-09-18']}
                    tileContent={({ date, view }) => {
                        const sYear = date.getFullYear(),
                            sMonth = date.getMonth() + 1,
                            sDate = date.getDate();
                        let createDate, nYear, nMonth, nDate, role, msg = null;
                        let sca = [
                            {}
                        ];
                        sca.forEach(obj => {
                            createDate = new Date(obj.date);
                            nYear = createDate.getFullYear();
                            nMonth = createDate.getMonth() + 1;
                            nDate = createDate.getDate();
                            role = (view === 'month' && sDate === nDate && sMonth === nMonth && sYear === nYear);
                            if (role) {
                                <span>★</span>
                            }
                        })
                        return msg;
                    }}
                />
            </article>
                <article className='no-sc' ref={nosc1}>
                    <img src={nosc}></img>
                    <p> 날짜를 선택하여 일정을 추가해 보세요~ </p>
                </article>
            <article className='Wr'>
                <Write wrcal={wrcal} date={date} calendars={calendars} nosc={nosc1}/>
                <article className='back'></article>
            </article>
        </article>
    );

}
export default Calendar1