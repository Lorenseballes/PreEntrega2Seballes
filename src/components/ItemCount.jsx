import React from 'react'
import {useState} from 'react'
import '../App.css'



const ItemCount = ({stock, inicial, onAdd}) => {
    const [quantity, setQuantity]= useState(inicial)
    
    const suma =() => {
      if(quantity < stock) {
        setQuantity(quantity+1)
      }
    }
    const resta = () => {
      if(quantity > 1) {
        setQuantity(quantity-1)
      }
    }

  return (
    <div className='contador'>
       
       <button className='count-button' onClick={resta}>-</button>
       <h2 className='cantidad'>{quantity}</h2>
       <button className='count-button' onClick={suma}>+</button>
       <button onClick={() => onAdd(quantity)} disabled= {!stock}  className='agregar-button'>
        Agregar al carrito
       </button>

    </div>
  )
  
}

export default ItemCount