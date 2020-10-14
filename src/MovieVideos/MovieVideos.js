import React from 'react';
import request from '../api-requests.js';
// import './MovieVideos.css';

class MovieVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movieID: this.props.movieID
    };
  }

  componentDidMount() {
    request.getMovieVideos(this.state.movieID)
      .then( (videos) => {
        videos.isLoading = false;
        this.setState(videos);
      })
      .catch( err => console.log(err));
  }

  render() {
    if( this.state.isLoading ) {
      return <h3>LOADING</h3>
    } else {
      return (
        <div
          className='videos'
          role='movie-videos'
        >
          {this.state.videos.map(video => {
            return <>
              <h3>{video.type}</h3>
              <iframe
                width="356"
                height="200"
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
              </iframe>
            </>
          })}
        </div>
      );
    }
  }
}

export default MovieVideos;

//https://www.youtube.com/watch?v=SUXWAEX2jlg
