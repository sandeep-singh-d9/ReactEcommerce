import React, { Component } from 'react'
import {storeProducts , detailProduct} from './data'

const ProductContext = React.createContext();
//Provider
//Consumer



class ProductProvider extends Component {
    state={
        product:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0,
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts=()=>{
       let tempProducts =[] 
       storeProducts.forEach(item=>{
           const singleItem = {...item};
           tempProducts = [...tempProducts,singleItem]
       })
       this.setState(()=>{
           return {product:tempProducts}
       })
    }

    getItem =(id)=>{
        const product = this.state.product.find(item => item.id === id)
        return product

    }
    handleDetail=(id)=>{
        const product = this.getItem(id)
        this.setState(()=>{
            return {detailProduct:product}
        })
        // console.log('hello handle detail')

    }
    addtoCart=(id)=>{
        let tempProducts=[...this.state.product]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart =true;
        product.count = 1;
        const price =product.price
        product.total = price

       this.setState(()=>{
           return {product:tempProducts, cart:[...this.state.cart, product]};
       }, ()=>console.log(this.addTotals()))
    };
    openModal = id =>{
        const product = this.getItem(id)
        this.setState(()=>{
            return {modalProduct:product, modalOpen:true}
        })
    }
    closeModal = () =>{
     this.setState(()=>{
         return {modalOpen:false}
     })
    }
    increment = (id) =>{
        console.log('increment')
    }
    decrement = (id) =>{
        console.log('decrement')
    }
    removeItem = (id) =>{
        console.log('remove')
    }
    clearCart = () =>{
        console.log('clearCart')
    }

    addTotals =()=>{
        let subTotals = 0;
        this.state.cart.map(items =>{
            subTotals += items.total
        })
       const tempTax = subTotals *0.1
       const tax = parseFloat(tempTax.toFixed(2))
       const total = subTotals+ tax;

       this.setState(()=>{
           return {
               cartSubtotal:subTotals,
               cartTax:tax,
               cartTotal:total
           }
       })
    }
    render() {
        return (
            <ProductContext.Provider value={{
               ...this.state,
               handleDetail:this.handleDetail,
               addToCart:this.addtoCart,
               openModal:this.openModal,
               closeModal:this.closeModal,
               increment:this.increment,
               decrement:this.decrement,
               removeItem:this.removeItem,
               clearCart:this.clearCart,
            }}>
               {this.props.children} 
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider , ProductConsumer}