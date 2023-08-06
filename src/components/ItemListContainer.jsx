import {Flex} from '@chakra-ui/react'
import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  const { category } = useParams()

const productos = [
  { id: 1, nombre: "Producto A", stock: 5, precio: 200, category:"Patio"},
  { id: 2, nombre: "Producto B", stock: 10, precio: 250, category:"Patio"},
  { id: 3, nombre: "Producto C", stock: 15, precio: 300, category:"Patio"},
  { id: 4, nombre: "Producto D", stock: 15, precio: 300, category:"Patio"},
  { id: 5, nombre: "Producto E", stock: 15, precio: 300, category:"Interior"},
  { id: 6, nombre: "Producto F", stock: 15, precio: 300, category:"Interior"},
  { id: 7, nombre: "Producto G", stock: 15, precio: 300, category:"Interior"},
  { id: 8, nombre: "Producto H", stock: 15, precio: 300, category:"SALE"},
  { id: 9, nombre: "Producto I", stock: 15, precio: 300, category:"SALE"}
]
const getProductos = new Promise((resolve, reject) => {
  if (productos.length > 0) {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  } else {
    reject (new Error ("No hay datos"))
  }
})

getProductos
.then((res) => {
  console.log(res)

})
.catch((error) => {
  console.log (error)
})

const filterProducts = productos.filter((producto) => producto.category === category)

  return (
    <Flex >
     <ItemList productos = {filterProducts} />
    </Flex>
  )
}

export default ItemListContainer