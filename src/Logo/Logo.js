import React from 'react';
import rtIcon from './rancidtomatillostitle.png';
import './Logo.css';

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section role='logo'>
        <img className='logo-pic' src={rtIcon} alt='The RT Logo'/>
      </section>
    )
  }
}

export default Logo;
