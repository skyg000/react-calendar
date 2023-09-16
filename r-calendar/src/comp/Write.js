import React, { useState } from 'react'

function Write({wrcal}) {
    const [data,setData] = useState([])
    let insert = (e)=>{
        e.preventDefault();
        let a = e.target;
        let d = {
            name: a.name.value,
            id: Date.now()
        }
        setData([...data,d])
    }
    return (
        <article className='write' ref={wrcal}>
            <form onSubmit={insert}>
                <input type='text' name='name' />
                <input type='submit' value={'입력하기'} />
            </form>
            <ul>
                {
                    data.map((item)=>(
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default Write