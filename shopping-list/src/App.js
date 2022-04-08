
import { useState } from 'react';
import './App.css';
import Shopping from './components/Shopping';
import Navigation from './components/Navigation';
import AddProduct from './components/AddProduct';
import Button from './components/Button'

function App() {
  const [products, setProducts] = useState([
    { id: '123hj45fs5', product: 'milk', completed: false },
    { id: '123hj45fs6', product: 'bread', completed: true },
    { id: '123hj45fs7', product: 'apples', completed: false },
    { id: '123hj45fs8', product: 'grapes', completed: true },
    { id: '123hj45fs4', product: 'oranges', completed: true },
    { id: '123hj45fs4', product: 'bananas', completed: false }
  ])

  const [showProducts, setShowProducts] = useState(false)

  // delete product

  const deleteProduuct = (id) => {
    setProducts(products.filter(pdt => pdt.id !== id))
  }

  const showForm = () => {
    setShowProducts(!showProducts)
  }

  // add a new product

  const addProduct = (product)=>{
    const id = Math.floor(Math.random() * 100)
    const newProduct = {
      id:id,
      product:product,
      completed:false
    }
    setProducts([...products, newProduct])
 
 
  }


  return (
    <>
      <Navigation />
      <Button showForm={showForm} />
      {showProducts && <AddProduct addProduct={addProduct}/>}
      <Shopping products={products} onDelete={deleteProduuct} />
    </>
  );
}

export default App;
