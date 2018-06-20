import React, { Component } from 'react';

class ShelfChanger extends Component {

  assertShelf(books, book) {
    const found = books.find(item => item.id===book.id);
    if(found) return found.shelf;
    return 'none';
  }

  render() {
    const { book, books, changeShelf } = this.props;
    let currentShelf = this.assertShelf(books, book);
    return (
      <div className="book-shelf-changer">
        <select  onChange={(event) => changeShelf(book, event.target.value)}
          defaultValue={ currentShelf }>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
  
}

export default ShelfChanger