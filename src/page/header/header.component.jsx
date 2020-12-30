import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../icon/logo.svg';
import {Link} from 'react-router-dom';
import SearchInput from '../../component/search-input/search-input.component';
import {ReactComponent as Cart} from '../../icon/shopping-bag.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {amountCartList} from '../../redux/cart/cart.selector';
import {cartHidden} from '../../redux/cart/cart.action';
const Header = ({amount,cart_hidden}) => (
    <div className='header'>
         <div className='logo-box'><Logo className='logo'/></div>
         <SearchInput/>
         <div className='options'>
             <Link className='option' to='/'>Home</Link>
             <Link className='option' to='/login'>Log In</Link>
             <div className='option' onClick={()=> cart_hidden()}>
                 <Cart className='shopping-cart'/>
                 <span className='amount'>{amount ? amount: 0}</span>
             </div>
         </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    amount:amountCartList
})

const mapDispatchToProps = dispatch => ({
    cart_hidden: () => dispatch(cartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);