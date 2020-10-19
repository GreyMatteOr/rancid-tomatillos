import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.movies = this.props.movies || [];
    this.searchQuery = '';
  }

  render() {
    return (
      <form
        role='search-form'
        onChange={ event => this.searchQuery = event.target.value }
      >
        <input placeholder='Find a Flick'/>
        <button onClick={this.search}>search</button>
      </form>
    )
  }

  search() {

  }
}

export default SearchForm;
