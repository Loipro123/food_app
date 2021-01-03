import React from 'react';
import './footer.styles.scss';
import {ReactComponent as Logo} from '../../icon/logo.svg';
import FooterBar from '../../component/footer-bar/footer-bar.component';
import {footer_data} from './footer.data';
const Footer = () => (
    <div className='footer'>
        <div className='footer_main'>
            <div className='logo_footer'><Logo className='logo'/></div>
            {
                footer_data.map(({id,title,items}) => <FooterBar key={id} title={title} items={items}/>)
            }
        </div>
        <div className='footer_footer'>
            <span style={{
            }}>&copy; Copyright 2021 by Loi Le. All Rights Reserved</span>
            <div className='footer_social'>
             <button className='social-btn fa fa-facebook'></button>
             <button className='social-btn fa fa-twitter'></button>
             <button className='social-btn fa fa-instagram'></button>
             <button className='social-btn fa fa-youtube'></button>
            </div>
        </div>
    </div>
)



export default Footer;