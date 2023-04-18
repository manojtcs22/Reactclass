import { useNavigate  } from "react-router-dom";
const Product = (props) =>{
    const {id,name, imgUrl, description, price} =props?.product;
    const navigate = useNavigate();
    const handleViewMore = (productId) => {
        console.log(productId);
        navigate(`/details/${productId}`);
    }
    return(
        <li className="product-header" >
            <div><img src={imgUrl} width="100" height="150"/></div>
            <div>
                <p>Name: {name}</p>
                <p>Description: {description}</p>
                <p>Price : {price}</p>
            </div>
            <div>{props?.children}</div>
        </li>
    )
}
export default Product;