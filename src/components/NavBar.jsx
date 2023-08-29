import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'; 
import { Box } from '@chakra-ui/react';
import logo from './images/logo.jpg';
import { Button, MenuButton, MenuItem, Menu, MenuList, Flex } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import '../App.css'
import CartWidget from './CartWidget';



function NavBar() {
  return (
    <AppBar position="static" className='navbar'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    
          <Box className="boxLogo">
          <Link to= {"/"}  style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={logo} alt="logo" />
            </Link>
        </Box>
          </Typography>
        <div className='navbar-links'>
          <Link to="/" className='navbar-link'>
            Home
          </Link>
          <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
             Menú
        </MenuButton>
                 <MenuList>
                    <MenuItem>
                        <Link to={"ItemListContainer"} className="menu-link">Catalogo 2023 </Link></MenuItem>
                         <MenuItem>
                         <Link to={`/category/${'Patio'}`} className="menu-link">Patio </Link></MenuItem>
                         <MenuItem>
                         <Link to={`/category/${'Electrodomésticos'}`} className="menu-link">Electrodomésticos </Link></MenuItem>
                        <MenuItem>
                        <Link to={`/category/${'Muebles'}`} className="menu-link">Muebles </Link></MenuItem>
                        <MenuItem>
                        <Link to={`/category/${'Decoración'}`} className="menu-link"> DECORACIÓN </Link></MenuItem>
        </MenuList>
    </Menu>
        
          <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
            Registrarse
          </Link>
          <CartWidget/>
        </div>
        
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
