import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../icon/logo.svg';
import {Link} from 'react-router-dom';
import SearchInput from '../../component/search/search-input/search-input.component';
import {ReactComponent as Cart} from '../../icon/shopping-bag.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {amountCartList} from '../../redux/cart/cart.selector';
import {cartHidden} from '../../redux/cart/cart.action';
import CartList from '../../component/cart_drop/cart-list/cart-list.component';
import {cartHiddenSelector} from '../../redux/cart/cart.selector';
import {Dropdown,DropdownToggle,DropdownMenu} from 'reactstrap';
import UserLogin from '../../component/reuse-component/user-login/user-login.component';
import {userSelector,hiddenSelector} from '../../redux/user/user.selector';
import {setUserHidden} from '../../redux/user/user.action';
import UserInterface from '../../component/user-interface/user-interface.component';
const Header =({amount,cart_hidden,cart_open,user,user_open,user_hidden}) =>{
    const toggle1 = () => {
        cart_hidden()
    }
    const toggle2 = () => {
        user_hidden()
    }
    return(
        <div className='header'>
             <div className='logo-box'><Logo className='logo'/></div>
             <SearchInput/>
             <div className='options'>
                 <Link className='option' to='/'>Home</Link>
                 {
                     user ? null : (<Link className='option' to='/login'>Log In</Link>)
                 }
                 {
                    user ?  ( <Dropdown className='option'   
                    isOpen={user_open}
                    toggle={toggle2}
                    className='dropdownCart'>
                       <DropdownToggle className='option_drop' tag="div">
                           <UserLogin name= {user.displayName} size='haha' active/>
                       </DropdownToggle>
                       <DropdownMenu className='drop_menu'>
                           <UserInterface/>
                       </DropdownMenu>
                    </Dropdown>) : null
                 }
               
                 <Dropdown className='option'   
                 isOpen={cart_open}
                 toggle={toggle1}
                 className='dropdownCart'>
                    <DropdownToggle className='option_drop' tag="div">
                     <Cart className='shopping-cart' />
                     <span className='amount'>{amount ? amount: 0}</span>
                    </DropdownToggle>
                    <DropdownMenu className='drop_menu'>
                         <CartList/>
                    </DropdownMenu>
                 </Dropdown>
             </div>
        </div>
    )}



const mapStateToProps = createStructuredSelector({
    amount:amountCartList,
    cart_open: cartHiddenSelector,
    user: userSelector,
    user_open: hiddenSelector
})

const mapDispatchToProps = dispatch => ({
    cart_hidden: () => dispatch(cartHidden()),
    user_hidden: () => dispatch(setUserHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);