import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
  
  
  const [product, setProduct] = useState([])
  
  const {id} = useParams ();



  useEffect(() => {
    const db = getFirestore()

    const oneItem = doc(db, "Productos", `${id}`);
    getDoc(oneItem).then((snapshot)=> {
      if(snapshot.exists()){
        const data = snapshot.data()
        setProduct({id:snapshot.id, ...data});
      }
    })
   
  .catch((error) => {
  console.log("Error de producto", error);
});
}, [id]);

  return (
    <div>
      
    <ItemDetail product={product} />
  
 </div>
  );
};

export default ItemDetailContainer
  