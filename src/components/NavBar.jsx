import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import logo from './images/logo.jpg'
import ItemCount from './ItemCount'


const NavBar = () => {
  return (
    <Flex>
        <Box className="boxLogo">
            <img src={logo} alt="logo" />
        </Box>
        <Spacer/>
          <Box>
               <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
             Menú
        </MenuButton>
                 <MenuList>
                    <MenuItem>Catalogo 2023</MenuItem>
                         <MenuItem>Patio</MenuItem>
                         <MenuItem>Jardín</MenuItem>
                 <MenuItem>Interior</MenuItem>
            <MenuItem>SALE</MenuItem>
        </MenuList>
    </Menu>
    </Box>
    <Box p='4' bg='whait.400'>
        <CartWidget/>
    </Box>
    <Box>
    <ItemCount/> 
    </Box>
    </Flex>
  )
}

export default NavBar