import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormularioFinal from './components/FormularioFinal'
import Signup from './components/Signup'
import Login from './components/Login'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  return (
    <BrowserRouter>
     <ThemeProvider theme={theme}> 
     <CartProvider>
       <NavBar/>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/ItemListContainer' element={<ItemListContainer/>} />
      <Route exact path='/category/:category' element={<ItemListContainer/>} />
      <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route exact path='/terminar' element={<FormularioFinal/>} />
      </Routes>
      </CartProvider>
      </ThemeProvider>

    </BrowserRouter>
  )
}

export default App
