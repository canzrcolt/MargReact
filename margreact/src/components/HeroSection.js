import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/girlwalk.mp4' autoPlay loop muted />
      <h1>Welcome to my page</h1>
      <p>Please enjoy!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          My Photos
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          My Food <i className='far fas fa-apple-alt' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
