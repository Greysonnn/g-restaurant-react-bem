import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { Newsletter, FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>999 Brickell Ave, Miami, FL 33131</p>
        <p className='p__opensans'>+1 305-123-4567</p>
        <p className='p__opensans'>+1 305-765-4321</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.granadilla} alt="footer_logo" />
        <p className='p__opensans'>“Skills can be taught. Character you either have or you don't have.” -Anthony Bourdain</p>
        <img src={images.spoon} alt="spoon_img" style={{ marginTop: '15'}}/>
        <div className='app__footer-links_icons'>
          <a href="https://facebook.com" target='_blank'><FiFacebook /></a>
          <a href="https://twitter.com" target='_blank'><FiTwitter /></a>
          <a href="https://instagram.com" target='_blank'><FiInstagram /></a>
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Thursday:</p>
        <p className='p__opensans'>11:00 Am - 12:00 Pm</p>
        <p className='p__opensans'>Friday - Sunday:</p>
        <p className='p__opensans'>10:30 Am - 1:00 Am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Restaurant. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
