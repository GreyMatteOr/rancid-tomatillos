import CommentForm from '../CommentForm/CommentForm.js';
import React from 'react';
import time from '../Time.js';
import request from '../api-requests.js';

import './Comments.css';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isLoading: true,
      isLoggedIn: this.props.isLoggedIn
    }
    this.movieID = this.props.movieID;
    this.userName = this.props.userName;
  }

  componentDidMount() {
    this.getComments();
  }

  createComment(comment) {
    let now = new Date();
    let aMinuteAgo = time.advanceDateBy(-time.minute);
    let timeOfPost = new Date(comment.id);
    let isCurrent = time.isBetween(aMinuteAgo, timeOfPost, now);
    let timestamp = (isCurrent ? 'just now' : `${time.getRelativeDistance(timeOfPost)} ago`);
    let commentBy = `${timestamp} by: ${comment.author}`;
    return (
      <div className='comment' data-testid='comment' key={comment.id}>
        <h3 className='comment'>{comment.comment}</h3>
        <h3 className='comment-by'>{commentBy}</h3>
      </div>
    )
  }

  getComments = () => {
    request.getComments(this.movieID)
    .then( ({comments}) => this.setState({comments: comments, isLoading: false}))
    .catch( err => console.log(err));
  }

  render() {
    if (this.state.isLoading) {
      return <h3 className='comment'>Loading Comments</h3>;
    } else {
      return <>
        {this.state.comments.map( comment => this.createComment(comment))}
        <CommentForm
          movieID={this.movieID}
          isLoggedIn={this.state.isLoggedIn}
          userName={this.userName}
          loadComments={this.getComments}
        />
      </>
    }
  }
}

export default Comments;
