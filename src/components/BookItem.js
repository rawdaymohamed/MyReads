import React from "react";
import ShelfOptions from "./shelfOptions";
class BookItem extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
            }}
          />
          <ShelfOptions
            book={this.props.book}
            updateShelf={this.props.updateShelf}
          />
        </div>
        <div className="book-title">{this.props.bookTitle}</div>
        <div className="book-authors">{this.props.bookAuthors}</div>
      </div>
    );
  }
}
export default BookItem;
