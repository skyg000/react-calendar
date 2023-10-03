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
        let a = e.target;
        let d = {
            msg: a.diary.value,
            code: Date.now(),
        }
        setData1([...data1, d])
    }
    useEffect(() => {
        axios.get('http://localhost:3030/abcd')
            .then(res => {
                console.log(res);
            }, [data1])
        axios.post('http://localhost:3030/insert1', { "diary": data1 })
        
    })

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