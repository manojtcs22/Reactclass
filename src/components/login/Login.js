import React, { createRef } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../apis/api";

const Login = () => {
    let username=React.createRef();
    let password=React.createRef();
    let navigate=useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        getData(`users?username=${username.current.value}&password=${password.current.value}`).then((response)=> {
            if(response?.data.length === 1) {
                navigate(`/products`);
            } else {
                alert("No user found")
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <form>
            <input placeholder="Enter Username" name="username" ref={username}/>
            <input type="password" placeholder="Enter Password" name="password" ref={password}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Login;