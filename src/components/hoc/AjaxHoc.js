import React from 'react';
import { getData } from '../../apis/api';
const AjaxHoc = (Wrapper) => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state ={
                products:[],
                error:'',
                isLoading: false
            }
            
        }
        componentDidMount(){
            this.setState({isLoading: true});
            getData('products').then((res)=>{
                console.log(res.data);
                this.setState({products:res.data});
            }).catch(err=>{
                this.setState({error:err.message});
            }).finally(()=>{
                this.setState({isLoading:false});
            })
        }
        render () {
            const {products,isLoading,error}=this.state;
            return (
                <Wrapper products={products} isLoading={isLoading} error={error}/>
            )
        }
    }
}
export default AjaxHoc;