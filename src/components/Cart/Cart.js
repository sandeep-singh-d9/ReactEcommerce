import React, { Component } from 'react'
import Title from '../Title'
import CartColumn from './CartColumn'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import styled from 'styled-components'
import {ProductConsumer} from '../../context'
export default class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value)=>{
                        const  {cart}= value
                        if(cart.length >0 ){
                            return (
                                <React.Fragment>
                                    <div className="container">
                                        <Title name="your" title="cart" />
                                    </div>
                                     <CartColumn /> 
                                     <CartList value={value}/>
                                     <CartTotals value={value}/>
                                </React.Fragment>
                            )
                        }else{
                            return <EmptyCart/>
                        }
                    }}
                    </ProductConsumer> 
                    
            </div>
        )
    }
}
