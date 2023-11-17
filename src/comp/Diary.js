import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';

function Diary({ diary, diaryPop }) {
    const nosc1 = useRef();
    const [ddata, dsetData] = useState('');
    const lipop = {
        init: { scale: 1, x: 1000, opacity: 0 },
        play: {
            scale: 1, x: 0, opacity: 1,
            transition: { duration: 1.5, ease: 'circOut' },
        }
    }
    /* 창닫기 */
    const pop1 = (e) => {
        if (diaryPop.current) {
            diaryPop.current.classList.remove('active1');
        }
    }
    /* data */
    const [data1, setData1] = useState([]);
    let insert1 = (e) => {
        e.preventDefault();
        let diaryData ={"diary":e.target.diary.value,"date":Date.now()} ;
        axios.post(`${process.env.REACT_APP_SERVER}/insert1`, diaryData)
        setData1(data1)
        console.log(diaryData);
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/abcd`)
        .then(res => {
            /* setData1(Array.isArray(res.data) ? res.data : []); */
        })
            }, [data1])

    return (
        <motion.div variants={lipop} initial="init" animate="play" >
            <article className='diary' ref={diaryPop}>
                <h2> 하루를 마무리해 보세요 </h2>
                <form onSubmit={insert1} >
                    <input className='f-diary' type='text' name='diary' autoComplete="off"  />
                    <input type='submit' value={'입력'} />
                    <button className='close' onClick={pop1}> 닫기 </button>
                </form>
                <ul className='msg1' >
                    {
                        data1.map((item) => (
                            <li key={item.code} >
                                {item.msg}
                            </li>
                        ))
                    }
                </ul>
            </article>
        </motion.div>
    )
}

export default Diary