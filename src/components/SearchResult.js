import React from "react";
import BookItem from "./BookItem";
class SearchResult extends React.Component {
  render() {
    console.log("res", this.props.booksResult);
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.booksResult.map((bookItem) => (
            <li key={bookItem.id}>{<BookItem book={bookItem} updateShelf={this.props.updateShelf}/>}</li>
          ))}
        </ol>
      </div>
    );
  }
}
export default SearchResult;
