import React from "react";
import BookItem from "./BookItem";
class SearchResult extends React.Component {
  render() {
    console.log("res", this.props.searchedBooks);
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.searchedBooks.map((bookItem) => (
            <li key={bookItem.id}>
              {
                <BookItem
                  book={bookItem}
                  updateShelf={this.props.updateShelf}
                  handleChange={this.props.handleChange}
                />
              }
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
export default SearchResult;
