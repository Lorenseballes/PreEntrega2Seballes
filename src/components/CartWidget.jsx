import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const CartWidget = () => {
  const { quantity }= useContext(CartContext)

  return (
   
    <Link to={"cart"} className='cardWidget'>
      
    {quantity}
    <ShoppingCartIcon/>
      
     </Link>
   
  )
}

export default CartWidget