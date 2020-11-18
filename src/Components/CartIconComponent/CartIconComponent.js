import React from 'react'
import './CartIconComponent.css'
import {ReactComponent as ShoppingIcon} from '../../iconsFile/shopping-bag.svg'


const CartIconComponent = ({cartItems}) => {
  const count = cartItems.length
  console.log(count)
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"> {count} </span>
        </div>
    )
}

export default CartIconComponent
