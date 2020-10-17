import React from 'react';
import './UserInfo.css';
import request from '../api-requests.js';
let { attemptLogin } = request;

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn || false,
      isRejected: false,
      userID: '',
      name: '',
      password: '',
      attemptLogin: this.props.attemptLogin || attemptLogin,
      idNumber: null,
    }
  }

  render() {
    if(this.state.isLoggedIn) {
      return (
        <section>
          <button className='logout-button' onClick={event => this.logOut(event)}>Log out</button>
          <h1 className='userName' id='welcome-msg'>Welcome, {this.state.name}</h1>
        </section>
      )
    } else {
      return (
        <form>
          <button className='signinbutton'>꧁Sign In꧂</button>
        </form>
      )
    }
  }

  logIn(event) {
    event.preventDefault();
    this.state.attemptLogin(this.state.userID, this.state.password)
    .then(({user}) => {
      this.setState({isLoggedIn: true, name: user.name});
      this.props.displayUserRatings(user.id);
    })
    .catch((res) => {
      this.setState({isRejected: true})
      console.log('whoa',res)
    });
  }

  logOut(event) {
    event.preventDefault();
    this.setState({isLoggedIn: false, isRejected: false});
    this.props.hideUserRatings();
  }
}


//<h2 className='secondary-font'>Please log in!</h2>

export default UserInfo;
