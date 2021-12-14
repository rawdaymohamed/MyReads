import React from "react";
import ShelfOptions from "./shelfOptions";
class BookItem extends React.Component {
  render() {
    const defaultThumbnail =
      "https://dummyimage.com/400x600/000/fff.png&text=No+book+image+available";
    let bookThumbnail = this.props.book.imageLinks;
    if (bookThumbnail === undefined) bookThumbnail = defaultThumbnail;
    else bookThumbnail = bookThumbnail.thumbnail;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookThumbnail}})`,
            }}
          />
          <ShelfOptions
            book={this.props.book}
            updateShelf={this.props.updateShelf}
            handleChange={this.props.handleChange}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}
export default BookItem;
