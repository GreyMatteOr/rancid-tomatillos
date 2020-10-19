import Logo from '../Logo/Logo.js';
import FunFacts from '../FunFacts/FunFacts.js';
import React from 'react';
import UserInfo from '../UserInfo/UserInfo.js';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    }
    this.movies = this.props.movies;
  }

  render() {
    return (
      <header>
        <UserInfo
          isLoggedIn={this.state.isLoggedIn}
          displayUserRatings={this.props.displayUserRatings}
          hideUserRatings={this.props.hideUserRatings}
        />
        <Logo />
        <FunFacts />
      </header>
    );
  }
}

export default Header;
