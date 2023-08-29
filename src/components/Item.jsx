import React from 'react'
import { Card, CardBody, Heading, Text, Button, Divider, Image, Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import '../App.css'


const Item = ({ nombre, precio, id, category, image }) => {

  return (
       <Box className='containerProductos' >
       <Flex mt='6' align='center'>
    <Card maxW='500px'  className='item-card' >
    <CardBody>
      <Image src={image} alt='Producto' borderRadius='lg' className='product-image'/>
        <div className='product-details'>
        <Heading size='md'>{nombre}</Heading>
        <Text fontSize='1x1'>Precio: $
          {precio} </Text>
        <Text>{category}</Text>
      <Link to={`/item/${id}`}> 
        <Button variant='ghost'  className='details-button'>
          Ver detalles
        </Button>
        </Link>
        </div>
        </CardBody>
    <Divider/>
  </Card>
  </Flex>
  </Box>

  )
}

export default Item