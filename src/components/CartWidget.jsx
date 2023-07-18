import React from 'react'
import {Flex, Box} from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'



const CartWidget = () => {
  return (
    <Flex>
       <box className="cart-icon">
        <FaShoppingCart />
      </box>
       <Box> 5 </Box>

    </Flex>
  )
}

export default CartWidget