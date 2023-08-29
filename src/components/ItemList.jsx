import React from 'react'
import Item from './Item'
import { Grid } from '@chakra-ui/react'
import '../App.css'


const ItemList = ({product}) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
    {product.map((p) => {
      return (
        <Item 
        key={p.id}
        id={p.id}
        image={p.image}
        nombre= {p.nombre}
        precio={p.precio}
        category={p.category}
        />
      )
    })
    }
    
    </Grid>
  )
}


export default ItemList