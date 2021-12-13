import React from "react";
import BookList from "./BookList";
import * as BooksAPI from "../BooksAPI";

import { Link } from "react-router-dom";
class BooksPage extends React.Component {
  state = { allBooks: [], currentlyReading: [], wantToRead: [], read: [] };
  updateAllBooks = () => {
    
    this.retrieveAll();
  };
  componentDidMount() {
    this.retrieveAll();
  }

  retrieveAll = () => {
    BooksAPI.getAll().then((all) => {
      const _currentlyReading = all.filter(
        (book) => book.shelf === "currentlyReading"
      );
      const _wantToRead = all.filter((book) => book.shelf === "wantToRead");
      const _read = all.filter((book) => book.shelf === "read");
      this.setState({
        allBooks: all,
        currentlyReading: _currentlyReading,
        wantToRead: _wantToRead,
        read: _read,
      });
    });
  };
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookList
          shelf="currentlyReading"
          updateAllBooks={this.updateAllBooks}
          books={this.state.currentlyReading}
        />
        <BookList
          shelf="wantToRead"
          updateAllBooks={this.updateAllBooks}
          books={this.state.wantToRead}
        />
        <BookList
          shelf="read"
          updateAllBooks={this.updateAllBooks}
          books={this.state.read}
        />
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default BooksPage;
