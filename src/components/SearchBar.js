import React from "react";
import { Link } from "react-router-dom";
class Search extends React.Component {
  handleChange = (event) => {
    this.props.handleChange(event.target.value);
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" onClick={this.props.handleClose}>
            Close
          </button>
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.props.query}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Search;
