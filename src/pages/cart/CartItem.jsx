import React, { useContext} from 'react'
import { ShopContext } from '../../context/ShopContext'

export const CartItem = ( props ) => {
  const {cartItems,addTocart,removeFromcart, updateCartItemCount}=useContext(ShopContext)
  const { id, productName, price, productImage }
    = props.data
  
  return (
    <div className='cartItem'>
      <img src={ productImage }
        alt='product image' />
      <div className='description'>
        
      <p>
        { " " }
        <b> { productName }</b>
      </p>
        <p>${ price }</p>
        <div className='countHandler'>
          <button onClick={()=>removeFromcart(id)} > - </button>
          <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
          <button onClick={()=>addTocart(id)}> + </button>
        </div>
     </div>
    </div>
  )
}

