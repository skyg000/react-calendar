import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Item from './Item';
import { motion } from 'framer-motion'
import '../style/calendar.scss';
import Calendar1 from './Calendar1';

const initData = [];
let todoArr = [];
function Write({ wrcal,date,calendars }) {
    const [idata, isetData] = useState(initData)
    const [mdata, msetData] = useState('');
    let [mcode, msetCode] = useState();
    const [delData, setDeldata] = useState();
    const [state, setState] = useState(false);
    const thisinput = useRef()
    /* 데이터 찾기 */
    const todost = (e) => {
        let stCode = e.target.checked;
        let dateCode = e.target.dataset.code;
        let dataFind = idata.map((item) => {
            if (item.id == dateCode) {
                item.state = stCode;
            }
            return item;
        })
        isetData(dataFind);
    }
    /* 수정 */
     const  modi = (code) => {
        setState(true)
        setTimeout(() => {
            let thiscontents = idata.filter(n=> n.id === code)
            thisinput.current.value = thiscontents[0].todo
            thisinput.current.id = code
        }, 100);
    }

    
    /* 삭제 */
    const del = (code) => {
            let deldata = delData.filter(obj => obj.id !== code)
            axios.post('http://localhost:3030/del',deldata)
            .then(res=>isetData(res.data))
        
    }
    /* 애니메이션 */
    const lipop = {
        init: { scale: 1, opacity: 0 },
        play: {
            scale: 1, opacity: 1,
            transition: { duration: 2, ease: 'circOut' },
        }
    }
    
    const pop = () => {
        wrcal.current.classList.remove('active');
        calendars.current.classList.remove('on');
    }
    /* 저장 */
    const insert = (e) => {
        e.preventDefault();
        if(state === true){
            let newData = {"todo":e.target.todo.value,"id":e.target.todo.id}
            axios.post('http://localhost:3030/modi',newData)
            .then(res=>{
                let datafilter = res.data.filter(n=> n.date === date)
                isetData(datafilter)
                setState(false)
                msetData('')
                e.target.todo.id=''
            })

        } else {
            let todostate = false;
            let a = new Date();
            let ab = a.getTime()
            let newData = {"todo":e.target.todo.value,"state":todostate,"date":date,"id":ab}
        
            axios.post('http://localhost:3030/insert',newData)
            .then(res=>{
                let datafilter = res.data.filter(n=> n.date === date)
                isetData(datafilter)
            })
            
        }
    }
        useEffect(()=>{
            axios.get('http://localhost:3030/abc')
            .then(res => {
                let datas = res.data.filter(n=> n.date === date);
                isetData(datas)
            })
            axios.get('http://localhost:3030/abc')
            .then(res => {
                setDeldata(res.data)
            })
        },[date])

        return (
            <motion.div
                variants={lipop}
                initial="init"
                animate="play" >
                <article className='write' ref={wrcal}>
                    
                    <h2> 나의 일정은 {idata.length} 개 </h2>
                    <form onSubmit={insert}>
                        <input type='text' name='todo' autocomplete="off" ref={thisinput} value={mdata} onChange={(e) => { msetData(e.target.value) }}  />
                        <input type='submit' value={`${state === false ? '입력' : '수정'}`} />
                        <button type="button" className='close' onClick={pop}> 닫기 </button>
                    </form>
                    <ul className='msg'>
                        {
                            idata.map((item,k) => (
                                <Item key={k}
                                    item={item}
                                    todost={todost}
                                    del={del}
                                    modi={modi}
                                />
                            ))
                        }
                    </ul>
                </article>
            </motion.div>
        )
    }

export default Write