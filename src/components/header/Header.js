import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <Link to="/login">Login |</Link>
            <Link to="/register">Register |</Link>
            <Link to="/products">Products |</Link>
            <Link to="/cart">Cart ({props?.cart?.length??0})</Link>
            
        </>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        cart:state.cart.cartList
    }
}
export default connect(mapStateToProps,null)(Header);