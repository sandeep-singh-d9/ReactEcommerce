import React from 'react'
import CartItem from './CartItem'
export default function CartList(props) {
   const {cart} =props.value
    return (
        <div className="conatiner-fluid">
           { cart.map(items =>{
               return  <CartItem key={items.id} item={items} value={props.value} />
           })}
        </div>
    )
}
