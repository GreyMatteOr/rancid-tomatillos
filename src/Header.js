import Logo from './Logo.js';
import SearchForm from './SearchForm.js';
import React from 'react';
import UserInfo from './UserInfo.js';
// import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    }
  }

  render() {
    return (
      <header>
        <UserInfo
          isLoggedIn={this.state.isLoggedIn}
          displayUserRatings={this.props.displayUserRatings}
        />
        <Logo />
        <SearchForm />
      </header>
    );
  }
}

export default Header;
