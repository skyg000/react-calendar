import React, { useState } from 'react'
import axios from 'axios';
import Item from './Item';
import {motion} from 'framer-motion'
import '../style/calendar.scss';

const initData = [

]

function Write({wrcal}) {
    const [idata,isetData] = useState(initData)
    const [mode,setMode] = useState(true);
    const [mdata,msetData] = useState('');
    let [mcode,msetCode] = useState();
/* 데이터 찾기 */
const todost = (e)=>{
    let stCode = e.target.checked;
    let dateCode = e.target.dataset.code;
    let dataFind = idata.map((item)=>{
        if(item.date == dateCode){
            item.state = stCode;
        }
        return item;
    })
    isetData(dataFind);
}
/* 수정 */
    const modi =(code)=>{
        msetCode(code)
        setMode(false);
    let wdata = idata.filter(obj=>obj.date == code)
    msetData(wdata[0].todo)
    }
/* 삭제 */
    const del = (code)=>{
        let deldata = idata.filter(obj=>obj.date !== code)
        isetData(deldata)
        console.log(idata);
    }
/* 애니메이션 */
    const lipop = {
        init:{scale:1, opacity:0},
        play:{scale:1, opacity:1,
        transition:{duration:2, ease:'circOut'},
        }
    }   
/* 입력창 */
    const pop = (e)=>{
        e.preventDefault();
        wrcal.current.classList.remove('active')
    }
/* 저장 */
    const insert = (e)=>{
        e.preventDefault();
        let todo = e.target.todo.value;
        
        if(mode){
            isetData([...idata,{todo,state:false, date:Date.now()}])
            msetData('');
        }else{
            isetData(idata.map(obj=>{
                if(obj.date == mcode){
                    obj.todo = todo;
                }
                return obj;
            }))
            setMode(true);
        }
        console.log(todo);
}
/* 데이터 */
    axios.get('http://localhost:3030/abc')
    .then(res=>{
       /*  console.log(res); */
    })
    axios.post('http://localhost:3030/insert',{"일정":idata})

    return (
        <motion.div
                variants={lipop}
                initial= "init"
                animate="play" >
        <article className='write' ref={wrcal}>
                    <h2> 나의 일정은 {idata.length} 개 </h2>
            <form onSubmit={insert}>
                <input type='text' name='todo' autocomplete="off" value={mdata} onChange={(e)=>{msetData(e.target.value)}} />
                <input type='submit' value={(mode)?'입력' : '수정'} />
                <button className='close' onClick={pop}> 닫기 </button>
            </form>
                <ul className='msg'>
                    {
                        idata.map((item)=>(
                            <Item key={item.date}
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