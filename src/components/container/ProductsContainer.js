import { bindActionCreators } from "redux";
import * as cartActions from '../../redux/actions/cartActions'; 
import { connect } from 'react-redux';
import Products from "../products/Products";
import AjaxHoc from "../hoc/AjaxHoc";

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(cartActions,dispatch)
    }
}
const ProductsContainer = AjaxHoc(connect (mapStateToProps,mapDispatchToProps)(Products));
export default ProductsContainer;