import React, { Component } from 'react';
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
class Detail extends Component {
    
    render() { 
        return ( 
            <ProductConsumer>
                {(value)=>{
                  const{id, title, company, img, info, price, inCart}=  value.detailProduct
                  return (
                    <div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>
                                    {title}
                                </h1>
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img src={img} className="img-fluid" alt="product"/>
                                    </div>    
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Modal:{title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by :<span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4>
                                        <strong>
                                         price :<span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product 
                                    </p>
                                    <p className="text-muted lead">{info}</p>

                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                Back to product
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer disabled={inCart
                                        ?true:false} onClick={()=>{
                                                value.addToCart(id);
                                                value.openModal(id);
                                        }} cart>
                                            {inCart ? "incart" :"add to cart"}
                                        </ButtonContainer>
                                    </div>
                                    </div>    
                                </div>     
                            </div>
                        </div>
                    </div>
                  )
                }}
            </ProductConsumer>
         );
    }
}
  
export default Detail;