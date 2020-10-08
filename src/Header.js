import React from 'react';
import SearchForm from './SearchForm.js';
import UserInfo from './UserInfo.js';
import Logo from './Logo.js';
// import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <header>
        <UserInfo />
        <Logo />
        <SearchForm />
      </header>
    );
  }
}

export default Header;
