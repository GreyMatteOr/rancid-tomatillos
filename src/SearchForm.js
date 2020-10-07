import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input placeholder='Find a Flick'/>
      </form>
    )
  }
}

export default SearchForm;
