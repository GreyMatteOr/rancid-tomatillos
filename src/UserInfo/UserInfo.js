import React from 'react';
import './UserInfo.css';
import request from '../api-requests.js';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn || false,
      isRejected: false,
      userID: '',
      idNumber: null
    }
    this.name = '';
    this.password = '';
  }

  render() {
    if(this.state.isLoggedIn) {
      return (
        <section>
          <h1 className='userName' id='welcome-msg'>What's shaken', {this.state.name}?</h1>
          <button className='logout-button' onClick={event => this.logOut(event)}>꧁Make Your Exit꧂</button>
        </section>
      )
    } else {
      return (
        <form>
        <h2 className='secondary-font'>Drop your deets, chikadee!</h2>
        <input
          className="username"
          type="text"
          placeholder="Moniker"
          onChange={ (event) => this.userID = event.target.value }
        />
          <input
            className="password"
            type="password"
            placeholder="Pass Code"
            onChange={ (event) => this.password = event.target.value }
          />
          <button className="submit-credentials signinbutton" id="submit-credentials" onClick={event => this.logIn(event)} submit=''>꧁Sign In꧂</button>
          <h3 id='warning'>{ this.state.isRejected ? 'TRY AGAIN FOREVER' : '' }</h3>
        </form>
      )
    }
  }

  logIn(event) {
    event.preventDefault();
    request.attemptLogin(this.state.userID, this.password)
    .then(({user}) => {
      this.setState({isLoggedIn: true, name: user.name});
      this.props.displayUserRatings(user.id, user.name);
    })
    .catch((res) => this.setState({isRejected: true}));
  }

  logOut(event) {
    event.preventDefault();
    this.setState({isLoggedIn: false, isRejected: false});
    this.props.hideUserRatings();
  }
}



export default UserInfo;
