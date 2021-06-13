import React from 'react';
import {UserInter, UserHeader,UserHeader1,Userbody} from './user-interface.styles';
import UserLogin from '../../component/reuse-component/user-login/user-login.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {userSelector,hiddenSelector} from '../../redux/user/user.selector';
import {resetUser} from '../../redux/user/user.action';
import {SignOut} from '../../firebase/auth/log-out';
const UserInterface = ({user,reset_user}) => {
    return(
        <UserInter>
            <UserHeader>
                 <UserLogin name= {user.displayName}/>
                 <UserHeader1>
                   <h5>{!user.displayName ? "" : user.displayName.toUpperCase()}</h5>
                   <div>{user.email}</div>
                 </UserHeader1>
            </UserHeader>
            <Userbody top>Notification</Userbody>
            <Userbody border>Message</Userbody>
            <Userbody border>Setting</Userbody>
            <Userbody onClick={()=>{
                reset_user();
                SignOut();
            }}>Log out</Userbody>
        </UserInter>
    )
}

const mapStateToProps = createStructuredSelector({
    user: userSelector,
    userOpen: hiddenSelector
})

const mapDispatchToPops = dispatch => ({
    reset_user: () => dispatch(resetUser())
})
export default connect(mapStateToProps,mapDispatchToPops)(UserInterface);