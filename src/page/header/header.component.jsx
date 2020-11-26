import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../icon/logo.svg';
import {Link} from 'react-router-dom';
import SearchInput from '../../component/search-input/search-input.component';
import {ReactComponent as Cart} from '../../icon/shopping-bag.svg';
const Header = () => (
    <div className='header'>
         <div className='logo-box'><Logo className='logo'/></div>
         <SearchInput/>
         <div className='options'>
             <Link className='option' to='/'>Home</Link>
             <Link className='option' to='/login'>Log In</Link>
             <div className='option'>
                 <Cart className='shopping-cart'/>
                 <span className='amount'>0</span>
             </div>
         </div>
    </div>
);

export default Header;