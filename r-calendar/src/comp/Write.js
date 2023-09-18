import React, { useState } from 'react'
import axios from 'axios';
import {motion} from 'framer-motion'
import '../style/calendar.scss';
function Write({wrcal}) {
    const [mdata,msetData] = useState('');
    let [mcode,msetCode] = useState();
    const [mode,setMode] = useState(true);
    const modi =(code)=>{
        msetCode(code)
        setMode(false);
    let data = data.filter(obj=>obj.date == code)
    msetData(data[0].todo)
    }

    const del = (code)=>{
        let deldata = data.filter(obj=>obj.date !==code)
        setData(del)
    }

    const todoState = (e)=>{
        let stateCode = e.target.checked
        let dataCode = e. target.dataset.code
        let datafind = data.map((obj)=>{
            if(obj.date == dataCode){
                obj.state = stateCode;
            }
            return obj;
        })
        setData(datafind)
    }




    const lipop = {
        init:{scale:1, opacity:0},
        play:{scale:1, opacity:1,
                transition:{duration:2, ease:'circOut'},
        },
    }   
    const pop = (e)=>{
        e.preventDefault();
        wrcal.current.classList.remove('active')
    }
    const [data,setData] = useState([])
    let insert = (e)=>{
        e.preventDefault();
        let a = e.target;
        let d = {
            msg: a.name.value,
            code: Date.now(),
        }
        setData([...data,d])
    }
    axios.get('http://localhost:3030/abc')
    .then(res=>{
        console.log(res);
    })
    axios.post('http://localhost:3030/insert',{"일정":data})
    
   
    return (
        <motion.div
                variants={lipop}
                initial= "init"
                animate="play" >
        <article className='write' ref={wrcal}>
                    <h2> 나의 일정은 {data.length} 개 야~</h2>
                <ul className='msg'>
                    {
                        data.map((item)=>(
                            <li key={item.id}>
                                <input type='checkbox'className='box' data-code={item.date} />{item.msg}
                                <button onClick={()=>{modi(item.code)}}disabled={item.state? true:false}>수정</button>
                                <button>삭제</button>
                            </li>
                                
                        ))
                    }
                </ul>
            <form onSubmit={insert}>
                <input type='text' name='name' />
                <input type='submit' value={'입력하기'} />
                <button className='close' onClick={pop}> 닫기 </button>
            </form>
        </article>
            </motion.div>
    )
}

export default Write