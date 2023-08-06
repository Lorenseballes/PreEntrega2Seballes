import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    /*filtrar por id*/
    const {id} = useParams()
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail