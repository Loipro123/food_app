import React from 'react';
import {UserIcon,ActiveIcon} from './user-login.styles';
import {getName} from './getName';
const UserLogin = ({name, size, active}) => {
    
   return(
        <UserIcon size={size}>
            {getName(name).toUpperCase()}
            {
                active ? <ActiveIcon/> : null
            }
        </UserIcon>
   )
}

export default UserLogin;