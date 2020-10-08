import React from 'react';
import request from '../api-requests.js';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn || false,
      isRejected: false,
      userID: '',
      name: '',
      password: '',
      idNumber: null
    }
  }

  render() {
    if(this.state.isLoggedIn) {
      return (
        <section>
          <button className='logout-button' onClick={event => this.logOut(event)}>Log out, ya dingus</button>
          <h1 className='userName' id='welcome-msg'>{this.state.userID}</h1>
        </section>
      )
    } else {
      return (
        <form>
          <h2 className='secondary-font'>Please log in!</h2>
          <input
            type="text"
            placeholder="user id"
            onChange={ (event) => this.state.userID = event.target.value }
          />
          <input
            type="password"
            placeholder="password"
            onChange={ (event) => this.state.password = event.target.value }
          />
          <button id="submit-credentials" onClick={event => this.logIn(event)}>Submit</button>
          <h3 id='warning'>{ this.state.isRejected ? 'TRY AGAIN FOREVER' : '' }</h3>
        </form>
      )
    }
  }

  logIn(event) {
    event.preventDefault();
    request.attempLogin(this.state.userID, this.state.password)
    .then(({user}) => {
      this.setState({isLoggedIn: true, name: user.name});
      this.props.displayUserRatings(user.id);
    })
    .catch(() => this.setState({isRejected: true}));
  }

  logOut(event) {
    event.preventDefault();
    this.setState({isLoggedIn: false, isRejected: false});
    this.props.hideUserRatings();
  }
}

export default UserInfo;
