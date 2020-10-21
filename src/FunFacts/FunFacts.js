import React from 'react';
import './FunFacts.css'
import cornerFiligree from './corner-filigree.png';


class FunFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [
        'The Doelp\'s invented the concept of passwords!',
        'The longest distance is a contiguonomalo-meter.',
        '14 is divisible.',
        'We have met before.',
        'Fun rhymes with `son` but not `Diamedes`.',
        'Billy-bob... or William Robert?',
        '<Redacted to prevent a time paradox>',
        'People watch talkies. Corn watch stalkies.',
        'The first feature length talkie, The Jazz Singer, was released in 1927.',
      ]
    }
  }

  render() {
    let fact = this.state.facts[Math.floor(Math.random() * this.state.facts.length)];
    return (
    <section className='quotearea' data-testid='fun-facts'>
      <img className='topright' src={cornerFiligree} alt='framing filigree'/>
      <h3 className='title'>Fun Facts</h3>
      <p className='quote'>{fact}</p>
      <img className='bottomleft' src={cornerFiligree} alt='framing filigree'/>
    </section>
    )
  }
}

export default FunFacts;
