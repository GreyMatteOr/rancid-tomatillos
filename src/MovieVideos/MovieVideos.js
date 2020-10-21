import React from 'react';
import './MovieVideos.css';
import request from '../api-requests.js';
let { getMovieVideos } = request;

class MovieVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movieID: this.props.movieID,
      movieName: this.props.movieName
    };
  }

  componentDidMount() {
    getMovieVideos(this.state.movieID)
      .then( (videos) => {
        videos.isLoading = false;
        this.setState(videos);
      })
      .catch( err => console.log(err));
  }

  render() {
    if( this.state.isLoading ) {
      return <h3>loading</h3>
    } else {
      return (
        <div
          className='videos-grid'
          data-testid='movie-videos'
        >
          {this.state.videos.map(video => {
            return <div className='video' key={video.key}>
              <h3>{video.type}</h3>
              <iframe
                title={`${video.type} for this.movieName`}
                width="356"
                height="200"
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                allow="acceleromedata-testidplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
              </iframe>
            </div>
          })}
        </div>
      );
    }
  }
}

export default MovieVideos;
