import React from "react";
import * as BooksAPI from "../BooksAPI";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
export default class SearchPage extends React.Component {
  // state = { query: "", result: [], allData: [] };

  componentDidMount() {
    this.props.getSearchResult(this.props.query);
  }

  // getSearchResult = (qry) => {
  //   BooksAPI.search(qry).then((res) => {
  //     console.log(typeof res);
  //     res = this.getArrayResult(res);
  //     console.log("arr", res);
  //     setTimeout(() => {
  //       this.setState({
  //         result: res,
  //       });
  //     }, 1000);
  //   });
  // };

  // addShelfToResult = (old_res) => {
  //   let new_res = [];
  //   const all_books = this.state.allData;
  //   console.log("add shelf to res", all_books, old_res);
  //   for (const book of all_books) {
  //     for (const res_book of old_res) {
  //       if (book.id === res_book.id) {
  //         let new_book = res_book;
  //         new_book.shelf = book.shelf;
  //         new_res.push(new_book);
  //       }
  //     }
  //   }
  //   // this.setState({ result: new_res });
  //   return new_res;
  // };
  // getAllData = () => {
  //   BooksAPI.getAll().then((res) => {
  //     console.log("all", res);
  //     this.setState({ allData: res });
  //   });
  // };

  // updateBooks = () => {
  //   this.props.getSearchResult(this.state.query);
  // };
  // updateShelf = (book, shelf) => {
  //   BooksAPI.update(book, shelf).then((res) => {
  //     this.updateBooks();
  //   });
  // };

  render() {
    return (
      <div className="search-books">
        <SearchBar
          query={this.props.query}
          handleChange={this.props.handleChange}
        />
        {!this.props.checkResultIsEmpty() ? (
          <SearchResult
            searchedBooks={this.props.searchedBooks}
            updateShelf={this.props.updateShelf}
            handleChange={this.props.handleChange}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
