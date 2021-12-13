import React from "react";

class ShelfOptions extends React.Component {
  state = { shelf: "none" };
  
  updateShelf = (event) => {
    this.setState({ shelf: event.target.value }, () => {
      this.props.updateShelf(this.props.book, this.state.shelf);
      console.log(this.state);
    });

    // this.props.updateShelf(this.props.book, this.state.shelf);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} value={this.state.shelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
export default ShelfOptions;
