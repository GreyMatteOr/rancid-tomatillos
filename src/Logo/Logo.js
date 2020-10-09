import React from 'react';
import rtIcon from './rancidtomatillos.png';

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='logo'>
        <img className='logo-pic' src={rtIcon} alt='Rancid Tomatillos Logo & Title'/>
        <section className='header-text'>
          <h3 className='quote'>'Some clever quote!'</h3>
        </section>
      </section>
    )
  }
}

export default Logo;
