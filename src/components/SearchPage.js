import React from "react";
import * as BooksAPI from "../BooksAPI";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
export default class SearchPage extends React.Component {
  state = { query: "", result: [] };
  handleChange = (qry) => {
    this.getSearchResult(qry);
  };
  componentDidMount() {
    this.getSearchResult(this.state.query);
  }

  getSearchResult = (qry) => {
    BooksAPI.search(qry).then((res) => {
      console.log(typeof res);
      res = this.getArrayResult(res);
      console.log("arr", res);
      this.setState({ query: qry, result: res }, () => {
        console.log("state", this.state);
      });
    });
  };
  updateBooks = () => {
    this.getSearchResult(this.state.query);
  };
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      this.updateBooks();
    });
  };
  getArrayResult = (obj) => {
    let res = [];
    if (obj === undefined || obj === {}) return [];
    for (const [key, value] of Object.entries(obj)) {
      res.push(value);
    }
    return res;
  };
  checkResultIsEmpty = () => {
    const res = this.state.result;
    return res === null || typeof res === undefined || res[0] === "empty query";
  };
  render() {
    return (
      <div className="search-books">
        <SearchBar query={this.state.query} handleChange={this.handleChange} />
        {!this.checkResultIsEmpty() ? (
          <SearchResult
            booksResult={this.state.result}
            updateShelf={this.updateShelf}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
