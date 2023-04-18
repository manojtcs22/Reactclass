import { createStore } from "redux";
import rootReducer from "../reducers";

const configStore = (initState) => {
    return createStore(rootReducer,initState)
}


export default configStore;