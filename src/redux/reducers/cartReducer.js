import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/actionsTypes";

const initialState = {
    cartList: [],
    isLoading:false
}

const cartReducer = (state = initialState, action={}) => {
    console.log(action);
    switch(action?.type) {
        case ADD_TO_CART:
            let updatedState = {...state,cartList:[...state.cartList,action.payload]};
            return updatedState;
        return;
        case REMOVE_FROM_CART:
            let updatedState1 = {...state, cartList:state.cartList.filter((item)=>item.id!=action.id)};
            return updatedState1;
        case CLEAR_CART:
            return initialState;
        return;
            
        default: return state;
    }

}
export default cartReducer;