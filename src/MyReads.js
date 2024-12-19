import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPage from "./components/BooksPage";
import SearchPage from "./components/SearchPage";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

class HomePage extends React.Component {
  state = {
    allBooks: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    searchedBooks: [],
    query: "",
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
  getSearchResult = (qry) => {
    BooksAPI.search(qry).then((res) => {
      res = this.getArrayResult(res);
      this.addShelfToResult(res);
    });
  };
  handleChange = (qry) => {
    this.setState({ query: qry });
    this.getSearchResult(qry);
  };
  addShelfToResult = (res) => { // res is an array
    const all_books = this.state.allBooks;
    const _searchedBooks = res;
    if (_searchedBooks === undefined) {
      this.setState({ searchedBooks: [] });
    } else {
      let adjusted_books = _searchedBooks.map((b) => {
        all_books.forEach((b1) => {
          if (b.id === b1.id) {
            b.shelf = b1.shelf;
          }
        });
        return b;
      });
      this.setState({ searchedBooks: adjusted_books });
    }
  };
  // Transform result object to array
  getArrayResult = (obj) => {
    let res = [];
    if (obj === undefined) return [];
    for (const [, value] of Object.entries(obj)) {
      res.push(value);
    }
    return res;
  };
  checkResultIsEmpty = () => {
    const res = this.state.searchedBooks;
    return res === null || typeof res === undefined || res[0] === "empty query";
  };
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      this.updateBooks();
    });
  };
  updateBooks = () => {
    this.getSearchResult(this.state.query);
  };
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <BooksPage
                currentlyReading={this.state.currentlyReading}
                read={this.state.read}
                wantToRead={this.state.wantToRead}
                retrieveAll={this.retrieveAll}
              />
            }
          />
          <Route
            exact
            path="/search"
            element={
              <SearchPage
                searchedBooks={this.state.searchedBooks}
                getSearchResult={this.getSearchResult}
                query={this.query}
                handleChange={this.handleChange}
                checkResultIsEmpty={this.checkResultIsEmpty}
                updateShelf={this.updateShelf}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default HomePage;
