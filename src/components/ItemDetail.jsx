import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import '../App.css'


const ItemDetail = ({ product }) => {
  

  const [agregarCantidad, setAgregarCantidad] = useState(0)
  
  const {agregarItem} = useContext(CartContext)

  const finAgregar = (quantity) => {
    setAgregarCantidad (quantity)

    const item = { id: product.id, nombre: product.nombre, precio: product.precio, image: product.image}
  
    
    agregarItem(item,quantity)
    
  }

  return (
    <div className='item-detail'>
      <div key={product.id} id={product.id}>
        <img src={product.image} alt="Producto#" />
        <h3 className='item-name'>{product.nombre}</h3>
        <p className='item-price'>Precio: $ {product.precio}</p>
        <h1 className='item-category'>{product.category}</h1>
        <Link to="/ItemListContainer" className='ir-productos'> Volver a Productos</Link> 
        { agregarCantidad > 0 ? 
        (<Link to= "/Cart" className='link-to-cart'> Finalizar compra </Link> ) :
        ( <div className='item-count-container'> <ItemCount inicial={0} stock={10} onAdd={finAgregar}/>
         </div>
         )}
      </div>
    </div>
  );
};

export default ItemDetail;