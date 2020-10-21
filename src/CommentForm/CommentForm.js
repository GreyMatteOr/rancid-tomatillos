import React from 'react';
import request from '../api-requests.js';
import './CommentForm.css';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      comment: ''
    };
    this.movieID = this.props.movieID;
    this.userName = this.props.userName;
    this.loadComments = this.props.loadComments;
  }

  render() {
    if(this.state.isLoggedIn) {
      return (
        <div className='comment-form' data-testid='comment-form'>
          <input
            className='comment-field'
            placeholder='Leave a comment...'
            onChange={(event) => this.setState({comment: event.target.value})}
            value={this.state.comment}
          />
          <button
            className='post-comment'
            onClick={this.postComment}
          >POST!
          </button>
        </div>
      )
    } else {
      return <h3 className='comment' id='log-in-to-post'>You must be logged in to comment!</h3>
    }
  }

  postComment = () => {
    request.postComment(this.movieID, this.state.comment, this.userName)
    .then( response => {
      this.setState({comment:''});
      this.loadComments();
    })
    .catch( err => console.log(err));
  }
}

export default CommentForm;
