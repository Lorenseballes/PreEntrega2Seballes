import { collection, getDocs, getFirestore} from  'firebase/firestore' 
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import '../App.css'



const ItemListContainer = () => {

  const {category} = useParams ();

  const [product, setProducts] = useState([]);

  useEffect(() => {
    const db =getFirestore();

    const itemsConteiner = collection(db, "Productos" );
    getDocs(itemsConteiner).then((querySnapshot) => {
      const product = querySnapshot.docs.map((doc) => ({...doc.data(),
        id: doc.id,
      }));
      setProducts(product);
    })
  }, []);

  
  const filterProducts = product.filter((producto) => producto.category === category);

    return(
      <div>
        <h1 className='title-productos'>PRODUCTOS</h1>
         { category? <ItemList product={filterProducts} /> : <ItemList product={product} />

         }
      </div>
    );
};

export default ItemListContainer;




  