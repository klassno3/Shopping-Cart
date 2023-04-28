import React from 'react'
import "./Shop.css"
import {PRODUCTS} from "../../product"
import {Product} from "./Product"
export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Flov Shop</h1>
      </div>
      <div className="products ">
        {" "}
        { PRODUCTS.map( ( product ) => (
          
        
          <Product data={ product } />
        ) ) }

      </div>
    </div>
  )
}


