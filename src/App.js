import './App.css';
import Login from './components/login/Login';
import ProductDetails from './components/products/details/ProductDetails';
import Register from './components/register/Register';
import Cart from './components/cart/Cart';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import PageNotFound from './components/pagenotfound/PageNotFound';
import Header from './components/header/Header';
import ProductsContainer from './components/container/ProductsContainer';

function App () {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Login/>} exact/>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/products" element={<ProductsContainer/>}/>
                    <Route path="/details/:id" element={<ProductDetails/>}/>
                    <Route path="/cart" element={<Cart/>}/>  
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
        
    )
}

export default App;