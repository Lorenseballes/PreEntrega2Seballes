import { createContext, useState } from 'react'



 export const CartContext = createContext({
  cartItem:[]
 });
 

 export const CartProvider = ({children }) => {
        const [cartItem, setCartItem]= useState([]);
        const [totalPrecio, setTotalPrecio] = useState(0); 
       

        const agregarItem =(item, quantity) => {
      
          const newItem = {...item, quantity };
          setCartItem([...cartItem, newItem]);
          setTotalPrecio(prevTotal=> prevTotal + newItem.precio * quantity);
        } 
      

        const borrarItem = (itemId) => {
        const itemToRemove = cartItem.find(item => item.id === itemId);

        if(itemToRemove.quantity >1) {
          const updatedCartItem = cartItem.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItem(updatedCartItem);
        setTotalPrecio((prevTotal) => prevTotal - itemToRemove.precio);
        } else {
          setTotalPrecio(prevTotal => prevTotal - itemToRemove.precio * itemToRemove.quantity);
          setCartItem(cartItem.filter(item=> item.id !== itemId));
        }
        };

        const vaciarCart = () => {
          setCartItem([]);
          setTotalPrecio(0);
        };

         return (

           <CartContext.Provider value= {{ setCartItem, agregarItem, borrarItem, vaciarCart, totalPrecio, cartItem }}> 
            {children}
            </CartContext.Provider>
  );
  
 };

export default CartContext;