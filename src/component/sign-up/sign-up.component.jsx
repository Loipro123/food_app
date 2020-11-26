import React from 'react';
import './sign-up.styles.scss';
import Input from '../input/input.component';
import CustomButton from '../custom-button/custom-button.component';
const SignUp = () => (
    <div className='sign-up'>
        <h1 className='signUp-title'>Sign Up</h1>
        <Input name='email' type='email' icon='fa fa-envelope email' lable='Email'/>
        <Input name='password' type='password' icon='fa fa-lock' lable='Password'/>
        <Input name='repeat-password' type='password' icon='fa fa-lock' lable='Repeat password'/>
        <CustomButton type='login-btn'>Sign Up</CustomButton>

    </div>
);

export default SignUp;