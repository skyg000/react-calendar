import React from 'react'

function Item({item,todost,del,modi}) {
    return (
        <li className={item.state ? 'active':''}>
            <input type='checkbox'className='box' data-code={item.date} onChange={todost} />
            <code>{item.todo}</code>
                <button onClick={()=>{modi(item.date)}}disabled={item.state? true:false}>수정</button>
                <button onClick={()=>{del(item.date)}}>삭제</button>
        </li>
    )
}

export default Item