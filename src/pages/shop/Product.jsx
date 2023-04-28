import React, { useContext } from 'react'
import { ShopContext } from "../../context/ShopContext"


export const Product = ( props ) => {
  const { id, productName, price, productImage }
    = props.data
  const {addTocart,cartItems}=useContext(ShopContext)
 // eslint-disable-next-line no-undef
 const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
      <img src = { productImage } alt="product" />

      <div className="description">
        <p><b>{ productName }</b></p>
        <p>${ price}</p>
      </div>
      <button className='addToCartBtn'
        onClick={ () => addTocart( id ) }>
        Add To Cart{cartItemAmount>0 && <>({cartItemAmount})</> }</button>
      
    </div>
  )
}

 