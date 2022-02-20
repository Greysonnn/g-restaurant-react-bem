import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'; 
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="World Renowned Executive Chef"/>
      <h1 className='app__header-h1'>Superb Gastronomic Experience</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nihil quos. Pariatur vitae temporibus sed sit? Labore, libero et fuga ipsa nobis dolorum ipsum. Magni labore iure sit, maiores explicabo nam quos nulla fugiat necessitatibus veritatis quidem alias id odit quaerat ducimus quis? Eum, dignissimos. Ex asperiores voluptas blanditiis incidunt?</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header image" />

    </div>
  </div>
);

export default Header;
