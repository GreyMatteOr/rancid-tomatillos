import React from 'react';
import rtIcon from './rancidtomatillos.png';

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section role='logo'>
        <img className='logo-pic' src={rtIcon} alt='The RT Logo'/>
        <section className='header-text'>
          <h1 className='site-title'>Rancid Tomatillos</h1>
          <h3 className='quote'>'Some clever quote!'</h3>
        </section>
      </section>
    )
  }
}

export default Logo;
