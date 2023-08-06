import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';

const ItemDetail = ({productos}) => {
   const {id} = useParams ();

   const filterProducts = productos.filter((producto) => producto.id == id)

  return (
    <div>
      {filterProducts.map((p) => {
       
        return (
          
          <div key={p.id}>
           <h3>{p.nombre}</h3>
             <p>{p.stock}</p>
             <p>{p.precio}</p>
             <h1>{p.category}</h1>

             <ItemCount/>
            
          </div>

        )
      })}
    
     </div>
  )
}

export default ItemDetail