import React from 'react';
import "./Navibar.css"
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
export const Navibar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <FaShoppingCart size={32}/>
        </Link>
      </div>
    </div>

  )
}


