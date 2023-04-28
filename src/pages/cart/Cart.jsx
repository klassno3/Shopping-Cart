/* eslint-disable array-callback-return */
import React from 'react'
import { PRODUCTS } from '../../product'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'
import { CartItem } from './CartItem'
import "./Cart.css"
import {useNavigate} from "react-router-dom"

export const Cart = () => {
  const{cartItems} = useContext(ShopContext)
  const{getTotalCartAmount} = useContext(ShopContext)
  const totalAmount=getTotalCartAmount()
  
const navigation= useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>  
      <div className="cartItems">
        { PRODUCTS.map( ( product ) => {
          if ( cartItems[ product.id ] !== 0 ) {
            return <CartItem data={ product } />
            
          }
        })}
      </div>
      { totalAmount > 0 ?
      <div className="checkout">
        <p>SubTotal: $ { totalAmount }</p>
        <button onClick={()=>navigation("/")}> Continue Shopping</button>
        <button>Chekout</button>
      </div>
      :<p>Your Card is Empty</p>}
    </div>
  )
}


