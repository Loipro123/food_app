import React from 'react';
import './sign-up.styles.scss';
import {auth,createUser} from '../../firebase/firebase';
import Input from '../reuse-component/input/input.component';
import CustomButton from '../reuse-component/custom-button/custom-button.component';
import {SignOut} from '../../firebase/auth/log-out';
class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayName:'',
            email: '',
            password: '',
            repeatPassword:''
        }
    }
    handleSubmit = async () => {
        const {displayName,email,password,repeatPassword} = this.state;
        if(password!==repeatPassword){
            alert('The password does not match!');
            return;
        }
        try{
            await auth.createUserWithEmailAndPassword(email,password)
           .then(result => {
            return result.user.updateProfile({
              displayName: displayName
            })
            
          }).catch(function(error) {
            console.log(error);
          });
           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           });
        }catch(error){
            console.log('Error: ' + error);
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
        <div className='sign-up'>
            <h1 className='signUp-title'>Sign Up</h1>
            <Input name='displayName' type='text' icon='fa fa-user' lable='Full Name' value={this.state.displayName} handlechange={this.handleChange}/>
            <Input name='email' type='email' icon='fa fa-envelope email' lable='Email' value={this.state.email} handlechange={this.handleChange}/>
            <Input name='password' type='password' icon='fa fa-lock' lable='Password' value={this.state.password} handlechange={this.handleChange}/>
            <Input name='repeatPassword' type='password' icon='fa fa-lock' lable='Repeat password' value={this.state.repeatPassword} handlechange={this.handleChange}/>
            <CustomButton type='login-btn' onClick={this.handleSubmit}>Sign Up</CustomButton>
        </div>
    )
 }
}

export default SignUp;