import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import logo from './images/logo.jpg'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <Flex>
        <Box className="boxLogo">
          <Link to= {"/"}>
            <img src={logo} alt="logo" />
            </Link>
        </Box>
        <Spacer/>
          <Box>
               <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
             Menú
        </MenuButton>
          <Button> Catalogo 2023</Button>
                 <MenuList>
                    <MenuItem>
                        <Link to={`/category/${'Catalogo'}`}>Catalogo 2023 </Link></MenuItem>
                         <MenuItem>
                         <Link to={`/category/${'Patio'}`}>Patio </Link></MenuItem>
                         <MenuItem>
                         <Link to={`/category/${'Jardin'}`}>Jardín </Link></MenuItem>
                        <MenuItem>
                        <Link to={`/category/${'Interior'}`}>Interior </Link></MenuItem>
                        <MenuItem>
                        <Link to={`/category/${'SALE'}`}> SALE </Link></MenuItem>
        </MenuList>
    </Menu>
    </Box>
    <Box p='4' bg='whait.400'>
      <Link to= {"/cart"}>
        <CartWidget/>
        </Link>
        <ItemCount/>
    </Box>
    </Flex>
  )
}

export default NavBar