import React from 'react';
import './login.styles.scss';
import Input from '../input/input.component';
import CustomButton from '../custom-button/custom-button.component';
import {Link} from 'react-router-dom';
const Login = () => (
    <div class='login'>
        <h1 className='login-title'>Log In</h1>
       <Input name='email' type='email' icon='fa fa-envelope email' lable='Email'/>
       <Input name='password' type='password' icon='fa fa-lock' lable='Password'/>
       <Link to='/forgotpasword' className='sublink sub-forgot'>Forgot password?</Link>
       <Link to='/signup' className='sublink sub-signup'>Sign Up</Link>

       <CustomButton type='login-btn'>Log in</CustomButton>
       <h3 className='social-title'>Or Sign In with</h3>
       <div className='social'>
             <button className='social-btn fa fa-facebook'></button>
             <button className='social-btn fa fa-twitter'></button>
             <button className='social-btn fa fa-google'></button>
       </div>
    </div>
);

export default Login