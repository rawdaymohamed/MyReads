import React from "react";
import BookItem from "./BookItem";
import * as BooksAPI from "../BooksAPI";

class BookList extends React.Component {
  updateBooks = () => {
    this.props.updateAllBooks();
  };
  getTitle = () => {
    if (this.props.shelf === "currentlyReading") return "Currently Reading";
    if (this.props.shelf === "read") return "Read";
    if (this.props.shelf === "wantToRead") return "Want To Read";
  };
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      console.log(res);

      this.updateBooks();
    });
  };
  render() {
    const title = this.getTitle();
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book) => (
                  <li key={book.id}>
                    {
                      <BookItem
                        book={book}
                        bookTitle={book.title}
                        bookAuthors={book.authors}
                        imageURL={book.imageLinks.thumbnail}
                        updateShelf={this.updateShelf}
                      />
                    }
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BookList;
