import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'

class Book extends Component {

  render() {
    const { book, books, changeShelf } = this.props
    const title = book.title ? book.title : "No title available"
    const coverImg = book.imageLinks.thumbnail;
    return (
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})`}}>
                </div>
                <ShelfChanger
                  book={ book }
                  books={ books }
                  changeShelf={ changeShelf }
                />
              </div>
              <div className="book-title">{ title }</div>
              { 
                book.authors && book.authors.map((author, index) => (
                  <div className="book-authors" key={index}>{author}</div>
              ))}
            </div>
          </li>
    )
  }

}

export default Book