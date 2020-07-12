import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value); // search-2: call search function from parent
  } // event.target.value = search keywords

  // PARENT/this.props: app.js (<SearchBar searchFunction={this.search} />)
  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate} /* search-1 */
      />
    );
  }
}

export default SearchBar;
