import React from 'react'
import Item from './Item'


const ItemList = ({productos}) => {
  return (
    <>
    {productos.map((p) => {
      return (
        <Item id={p.id}
        key={p.id}
        nombre= {p.nombre}
        stock={p.stock}
        precio={p.precio}
        category={p.category}
        />
      )
    })
    }
    
    </>
  )
}


export default ItemList