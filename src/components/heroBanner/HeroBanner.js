import React from 'react';
import './heroBanner.css';
import herobannerimg from '../../assets/images/herobannerimg.png';

const HeroBanner = () => {
  return (
    <header className='container'>
      
      <img src={herobannerimg} alt="herobannerimage" className='hero_img section__title' id='home'/>
      <h1 className='hero__subtitle  py-0 my-0'>Welcome to our DIY <strong> YouTube </strong> video search page! 
        Our search page helps you find the perfect tutorial 
        video to guide you through any project. 
        Explore our vast library of DIY videos 
        today and unleash your inner creativity and resourcefulness!
        <br/>
        <strong>Just start typing and watch the magic!</strong></h1>
        <br/>
    </header>
  )
}

export default HeroBanner