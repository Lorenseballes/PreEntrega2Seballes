import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../main";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        
        navigate("/login");
        alert("Signed out successfully");
      })
      .catch((error) => {
       
      });
  };



   return (
    <div className='home-container'> 
    <h1 className='mensajeBienvenida'>AMARANTO HOME</h1>
    <Button color='white'> <Link to="/ItemListContainer"> VER CATALOGO
    </Link>
    </Button>
    </div>
    
    
  )
}

export default Home

