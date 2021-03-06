import React from 'react';
import './sign-up.styles.scss';
import Input from '../reuse-component/input/input.component';
import CustomButton from '../reuse-component/custom-button/custom-button.component';
class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            repeatPassword:''
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
            <Input name='email' type='email' icon='fa fa-envelope email' lable='Email' value={this.state.email} handleChange={this.handleChange}/>
            <Input name='password' type='password' icon='fa fa-lock' lable='Password' value={this.state.password} handleChange={this.handleChange}/>
            <Input name='repeatPassword' type='password' icon='fa fa-lock' lable='Repeat password' value={this.state.repeatPassword} handleChange={this.handleChange}/>
            <CustomButton type='login-btn'>Sign Up</CustomButton>
        </div>
    )
 }
}

export default SignUp;