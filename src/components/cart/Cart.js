import React from 'react';
import Product from '../products/Product';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions'; 
class Cart extends React.Component {
    constructor(){
        super();
        this.state={
            cart:[]
        }
    }
    removeFromCart = (id) => {
        this.props.actions.removeFromCart(id);
    }
    render () {
        const {cartList} = this.props?.cart;
        return (
            <div>
                {
                    cartList?.length > 0 ? <>
                    <h1>List of items in the cart:{cartList.length}</h1>
                    <button onClick={()=>this.props.actions.clearCart()}> Clear</button>
                    {
                        cartList?.map((item)=>{
                            return <Product product={item} key={item?.id}>
                                <button onClick={()=>this.removeFromCart(item?.id)}>Remove from cart</button>
                                <button>View more</button>
                            </Product>
                        })
                    }
                    </> :
                    <>
                        No Items in the cart
                    </>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(cartActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);