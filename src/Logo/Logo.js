import React from 'react';
import rtIcon from './rancidtomatillostitle.png';
import './Logo.css';

function Logo() {
  return (
    <section data-testid='logo'>
      <img className='logo-pic' src={rtIcon} alt='The RT Logo'/>
    </section>
  )
}

export default Logo;
