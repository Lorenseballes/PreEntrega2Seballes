import React from 'react'
import {useState} from 'react'



const ItemCount = () => {
    const [count, setCount]= useState(0)

  return (
    <div>
        <p>{count}</p>
       <button onClick={()=>setCount(count+1)}>Agregar</button>
       <button onClick={()=>setCount(count-1)}>Quitar</button>

    </div>
  )
}

export default ItemCount