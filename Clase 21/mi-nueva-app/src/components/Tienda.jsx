import React, { useEffect, useState } from 'react'
import ProductData from "../utilities/stock.json"
import {ProductList} from "./ProductList"
import "../App.css";
import { Header } from './Header';
import { ThemeProvider } from './ThemeContext';
import { ThemeToggleButton } from './Header';
import { Paginado } from './Paginado';

export const Tienda = () => {

  const items = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
    { id: 3, name: "Producto 3" },
    { id: 4, name: "Producto 4" },
    { id: 5, name: "Producto 5" },
    { id: 6, name: "Producto 6" },
    // Más productos...
  ];

  const [productos, setProductos] = useState([])
 console.log(productos)
  useEffect(()=>{
    setProductos(ProductData)
    
  },[productos])
  
  console.log(productos)
  return (

    <div className='App'>
      <ThemeProvider >
      <Header/>
      <ThemeToggleButton />
       <h1>Lista de productos</h1>
       <ProductList productos={productos}/>
       
       <Paginado items={items}/>
       </ThemeProvider>
    </div>
  )
}
