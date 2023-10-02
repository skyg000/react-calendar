import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import axios from 'axios';

function Diary({diary}) {
    const diaryPop = useRef();
    const lipop = {
        init:{scale:1,x:1000, opacity:0},
        play:{scale:1,x:0, opacity:1,
        transition:{duration:1.5, ease:'circOut'},
        }
    } 
/* 창띄우기 */
    const pop1 = (e)=>{
        diary.current.classList.remove('active1')
    }
/* data */
    const [data1,setData1] = useState([]);
    let insert1 = (e)=>{
        e.preventDefault();
        let a = e.target;
        let d = {
            msg: a.name.value,
            code: Date.now(),
        }
        setData1([...data1,d])
    }
    useEffect(()=>{
        axios.get('http://localhost:3030/abcd')
    .then(res=>{
        console.log(res);
    })
    axios.post('http://localhost:3030/insert1',{"diary":data1})
    },[data1])
    
    return (
        <article className='diary' ref={diaryPop}>
        <motion.div variants={lipop} initial= "init" animate="play" >
                <h2> 하루를 마무리해 보세요 </h2>
            <ul className='msg1' >
                {
                    data1.map((item)=>(
                        <li key={item.code} >
                            {item.msg}
                        </li>
                    ))
                }
            </ul>
        <form onSubmit={insert1}>
            <input type='text' name='name' />
            <input type='submit' value={'입력하기'} />
            <button className='close' onClick={pop1}> 닫기 </button>
        </form>
        </motion.div>
    </article>
    )
}

export default Diary