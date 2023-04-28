import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { PRODUCTS } from '../product'


export const ShopContext = createContext( null )

const getCart = () => {
  let cart = {}
  for ( let i = 1; i < PRODUCTS.length+1; i++ ){
    cart[i]=0
  }
  return cart;
}
export const ShopContextProvider = ( props ) => {
  const [ cartItems, setCartItems ] = useState( getCart() );
 
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for ( const item in cartItems ) {
      if ( cartItems[ item ] > 0 ) {
        let itemInfo = PRODUCTS.find( ( product ) =>product.id === Number( item ) );
        totalAmount += cartItems[ item] * itemInfo.price
        
      }
    }
    return totalAmount;  
}



  const addTocart = ( itemId ) => {
    setCartItems( ( prev ) =>
    ( { ...prev, [ itemId ]: prev[ itemId ] + 1 } ) );
    
  }

  const removeFromcart = ( itemId ) => {

    setCartItems( ( prev ) => ( { ...prev, [ itemId ]: prev[ itemId ] - 1 } ) );

  }
  const updateCartItemCount = ( newAmount, itemId ) => {
    setCartItems( ( prev ) => ( {
      ...prev, [ itemId]:newAmount
    } ) )
}
  const contextValue= {
    cartItems,addTocart,removeFromcart,updateCartItemCount,getTotalCartAmount
  }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>

  )
}

