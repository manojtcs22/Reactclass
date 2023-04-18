import React from "react";
import { postData } from "../../apis/api";
class Register extends React.Component {
    constructor () {
        super ();
        this.state= {
            formData : {
                username:'',
                password:'',
                email:'',
                sapid: ''
            }
        }
    }
    handleChange = (event) => {
        const {formData}=this.state;
        const {name,value}=event.target;
        formData[name]=value;
        this.setState({formData});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {formData} = this.state
        console.log(formData);
        postData(`users`,formData).then((response)=>{
            if(response.status==201) {
                alert(`Successfully Submitted #${response.data.id}`);
            }
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })

    }
    render () {
        return (
            <form>
                <input name="username" placeholder="Enter username" onChange={(event)=>this.handleChange(event)} />
                <input name="password" type="password" placeholder="Enter password" onChange={(event)=>this.handleChange(event)}/>
                <input name="email" type="email" placeholder="Enter Email" onChange={(event)=>this.handleChange(event)}/>
                <input name="sapid" type="number" placeholder="Enter Sapid" onChange={(event)=>this.handleChange(event)}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}
export default Register;