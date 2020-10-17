import React from 'react';
import './FunFacts.css'
import cornerFiligree from './corner-filigree.png';


class FunFacts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <section className='quotearea'>
      <img className='topright' src={cornerFiligree}/>
      <h3 className='title'>Movie Facts</h3>
      <p className='quote'>'This is where fun facts will go!'</p>
      <img className='bottomleft' src={cornerFiligree}/>
    </section>
    )
  }
}

export default FunFacts;
