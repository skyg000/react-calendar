import React, { useRef, useState, useEffect } from 'react';
import '../style/calendar.scss';
import Calendar from 'react-calendar';
import Write from './Write';
import axios from 'axios';
import nosc from '../imges/nosc2.png'
function Calendar1() {
    const [value, onChange] = useState();
    let today = new Date();
    let tyear = today.getFullYear();
    let tmonth = today.getMonth() + 1;
    let tday = today.getDate();
    const [events, setEvents] = useState([]);
    const [date, setDate] = useState(`${tyear}.${tmonth}.${tday}`);
    const wrcal = useRef();
    const calendars = useRef();
    const nosc1 = useRef();
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
        axios.get(`${process.env.REACT_APP_SERVER}/abc`)
            .then(res => {
                setEvents(res.data); // 가져온 데이터를 상태에 설정
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [date]);
    
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
                        const event = events.find(event => {
                            const evenDate = new Date(event.date)
                            return (
                                view === 'month' &&
                                evenDate.getFullYear() === sYear &&
                                evenDate.getMonth() + 1 === sMonth &&
                                evenDate.getDate() === sDate
                            );
                        })
                        if (event) {
                            return <span className='star'> ★ </span>
                        }
                        return null
                    }}
                />
            </article>
            <article className='no-sc' ref={nosc1}>
                <img src={nosc}></img>
                <p> 날짜를 선택하여 일정을 추가해 보세요~ </p>
            </article>
            <article className='Wr'>
                <Write wrcal={wrcal} date={date} calendars={calendars} nosc={nosc1} />
                <article className='back'></article>
            </article>
        </article>
    );

}
export default Calendar1