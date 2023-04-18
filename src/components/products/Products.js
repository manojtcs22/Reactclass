import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import React from 'react';
import { getData } from '../../apis/api';
import Product from './Product';
export default class Products extends React.Component {
    
    addToCart = (product) => {
        console.log(product)
        this.props.actions.addToCart(product);
    }
    render (){
        const {products,isLoading}=this.props;
        return (
           
            <div>
                {
                    isLoading?<>Loading....</>:<>
                    {
                        products?.length > 0 ? 
                        <>
                            <h1>List of products available: {products?.length}</h1>
                            <ul>
                            {
                                products.map((product)=>{
                                    return <Product product={product} key={product.id} history={this.props.history}>
                                        <button onClick={()=>this.addToCart(product)}>Add to cart</button>
                                        <button>View more</button>
                                    </Product>
                                })
                            }
                            </ul>
                        </>
                        :   <h1>No products available</h1>
                        }
                    </>
                }
                
            </div>
        )
    }
   
}
