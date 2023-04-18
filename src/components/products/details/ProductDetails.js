import React from 'react';

import { useParams } from "react-router-dom";
import { getData } from '../../../apis/api';
import Product from '../Product';
class ProductDetails extends React.Component {
    constructor() {
        super();
        this.state={
            product:[],
            err:''
        }
    }
    componentDidMount(){
        getData(`products/1`).then((response) =>{
            console.log(response);
            this.setState({product:response.data})
        }).catch((err)=>{
            console.log(err);
        })
    }
    render () {
        const {product}=this.state;
        return(
            <>
            {
               product ?
                <>
                    <Product product={product??{}}></Product>
                </>:
                <>
                    <h1>No details</h1>
                </>
            }
            </>
        )
    }
}
export default ProductDetails;