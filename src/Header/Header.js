import Logo from '../Logo/Logo.js';
import SearchForm from '../SearchForm/SearchForm.js';
import React from 'react';
import UserInfo from '../UserInfo/UserInfo.js';
// import './header.css';

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
        <SearchForm />
      </header>
    );
  }
}

export default Header;
