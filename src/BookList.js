import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookList extends Component {

    constructor(props) {
        super(props);
        this.shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
                           { type: 'wantToRead',  title: 'Want to Read' },
                           { type: 'read', title: 'Read'}];
    }

    render () {
        const {books} = this.props;
        return (
            <div className="list-books">

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    {this.shelfTypes.map((shelf, index) =>  {
                        const shelfBooks = books.filter( book => book.shelf === shelf.type)
                        return  (
                                <div className="bookshelf" key={index}>
                                <h2 className="bookshelf-title">{ shelf.title }</h2>
                                <div className="bookshelf-books">
                                    <BookShelf books={ shelfBooks }/>
                                </div>
                                </div> 
                            )
                    })}
                </div>

                <div className="open-search">
                    <Link to="/search">Search</Link>
                </div>

            </div>
      )
    }

}

export default BookList