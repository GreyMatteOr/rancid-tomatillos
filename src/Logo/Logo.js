import React from 'react';
import rtIcon from './rancidtomatillostitle.png';
import './Logo.css';

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section data-testid='logo'>
        <img className='logo-pic' src={rtIcon} alt='The RT Logo'/>
      </section>
    )
  }
}

// <section className='header-text'>
//   <h3 className='quote'>'Some clever quote!'</h3>
// </section>

export default Logo;
