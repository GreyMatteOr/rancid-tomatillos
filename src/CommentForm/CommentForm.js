import React from 'react';
import request from '../api-requests.js';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    };
    this.movieID = this.props.movieID;
    this.comment = '';
    this.userName = this.props.userName;
    this.loadComments = this.props.loadComments;
  }

  render() {
    if(this.state.isLoggedIn) {
      return (
        <>
          <input
            className='comment-field'
            onChange={(event) => this.comment = event.target.value}
          />
          <button
            className='post-comment'
            onClick={this.postComment}
          >POST!
          </button>
        </>
      )
    } else {
      return <h3 id='log-in-to-post'>You must be logged in to comment!</h3>
    }
  }

  postComment = () => {
    console.log(this)
    request.postComment(this.movieID, this.comment, this.userName)
    .then( response => {
      console.log(response)
      this.loadComments();
    })
    .catch( err => console.log(err));
  }
}

export default CommentForm;
