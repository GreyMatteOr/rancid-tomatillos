import React from 'react';
import request from './api-requests.js';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn || false,
      name: this.props.name || 'Iam Logged'
    }
  }

  render() {
    if(this.state.isLoggedIn) {
      return (
        <section>
          <button className='logout-button' onClick={event => this.logOut(event)}>Log out, ya dingus</button>
          <h1 className='userName' id='welcome-msg'>{this.state.name}</h1>
        </section>
      )
    } else {
      return (
        <form>
          <h2 className='secondary-font'>Please log in!</h2>
          <input id='userID' type="text" placeholder="user-name" />
          <input id='pw' type="password" placeholder="password" />
          <button id="submit-credentials" onClick={event => this.logIn(event)}>Submit</button>
          <h3 id='warning'></h3>
        </form>
      )
    }
  }

  logIn(event) {
    event.preventDefault();
    console.log('Am logging in!!!');
    this.setState({isLoggedIn: true});
  }

  logOut(event) {
    event.preventDefault();
    console.log('Am logging out!!!!');
    this.setState({isLoggedIn: false});
    console.log(this.state);
  }
}

export default UserInfo;
