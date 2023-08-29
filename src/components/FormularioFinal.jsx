import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert, AlertIcon } from '@chakra-ui/react';
import { useState } from 'react';
import '../App.css'

const FormularioFinal =() => {
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
    setEmail('');
    setTelefono('');
  };


  return (

    <div>
      <h1 className='titulo'> Ingrese Email y Teléfono para coordinar la entrega.</h1>
    {showAlert && (
      <Alert status='success'>
        <AlertIcon />
        ¡Nos contactaremos contigo a la brevedad!
      </Alert>
    )}

    <Form onSubmit={handleSubmit} className='custom-form'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="number" placeholder="Telefono" value={telefono}
            onChange={(e) => setTelefono(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" className='custom-button'>
        Enviar
      </Button>
    </Form>
  </div>
);
};


export default FormularioFinal;