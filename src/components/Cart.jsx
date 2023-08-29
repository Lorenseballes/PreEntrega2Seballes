import React from 'react'
import { useContext } from 'react';
import { CartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../App.css'
import { Button } from '@chakra-ui/react';


const Cart = () => {
  const { cartItem, vaciarCart, totalPrecio, borrarItem} = useContext(CartContext);
  

  if( cartItem.length === 0) {
    return (
      <div>
        <h1 className='mensaje-carrito'>No hay productos en el carrito</h1>
          <Button size='md' height='48px' width='200px' className='opciones'> <Link to="/ItemListContainer">VER CATÁLOGO</Link> 
          </Button>
        </div>
    )
  }


  return (
    <div className='cart-container'>
      <div className='cart-items'>
        {cartItem.map(product => (
      <div key={product.id} className='cart-item' > 
      <img src={product.image} alt={product.nombre} className='item-imagen' />
      <div className='item.details'>
      <h3 className='item-nombre'>{product.nombre}</h3>
      <h2 className='item-precio'>Precio por unidad: $ {product.precio}</h2>
      <p className='item-cantidad'>Cantidad: {product.quantity}</p>
      <button onClick={() => borrarItem(product.id)} className='Button-borrar'>
          Eliminar
        </button>
      </div>
      </div>
      ))}
      </div>
      <div className='cart-suma'>
      <h2 className='total'>Total: ${totalPrecio}</h2>
      <button onClick={() => vaciarCart()} className='Button-vaciar'>Limpiar Carrito</button>
      <Link to='/Terminar' className='opciones'>Terminar compra</Link>
   </div>
   </div>
  )
}

export default Cart