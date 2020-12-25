import React from 'react';
import './add-to-bag.styles.scss';
import {connect} from 'react-redux';
import {closePopup} from '../../redux/pop-up/pop-up.action';
const AddToBag = ({close_popup}) => (
    <div className='add_to_bag'>
        <span className='bag_close' onClick = {
           ()=> {close_popup()}
        }>&times;</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    close_popup: () => dispatch(closePopup())
})
export default connect(null,mapDispatchToProps)(AddToBag);