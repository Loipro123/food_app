import React from 'react';
import './login.styles.scss';
import Input from '../reuse-component/input/input.component';
import {auth,loginWithGoogle,loginWithFacebook} from '../../firebase/firebase';
import CustomButton from '../reuse-component/custom-button/custom-button.component';
import {Link} from 'react-router-dom';
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = async () => {
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        }catch(error){
            console.log(error);
        }
    }
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name] : value
        })
    }
    render(){
        return (
            <div className='login'>
                <h1 className='login-title'>Log In</h1>
               <Input name='email' type='email' icon='fa fa-envelope email' lable='Email' value={this.state.email} handlechange={this.handleChange}/>
               <Input name='password' type='password' icon='fa fa-lock' lable='Password' value= {this.state.password} handlechange={this.handleChange}/>
               <Link to='/forgotpasword' className='sublink sub-forgot'>Forgot password?</Link>
               <Link to='/signup' className='sublink sub-signup'>Sign Up</Link>
        
               <CustomButton type='login-btn' onClick={this.handleSubmit}>Log in</CustomButton>
               <h3 className='social-title'>Or Sign In with</h3>
               <div className='social'>
                     <button className='social-btn fa fa-facebook' onClick={loginWithFacebook}></button>
                     <button className='social-btn fa fa-google' onClick={loginWithGoogle}></button>
               </div>
            </div>
        );
    }
} 

export default Login