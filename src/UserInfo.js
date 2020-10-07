import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <button className='logout-button'>Log out, ya dingus</button>
        <h1 className='welcome' id='welcome-msg'>Welcome, User!</h1>
      </section>
    )
  }
}

export default UserInfo;
