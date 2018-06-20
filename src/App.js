import React from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'
import BookList from './BookList'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    });
  }

  changeShelf = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response =>{
      newBook.shelf = newShelf;
      const updatedBooks = this.state.books.filter( book => book.id !== newBook.id );
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks });
    })
  }

  render() {

    const { books } = this.state

    return (

      <div className="app">
        
        <Route path="/search" render={( { history }) => (
          <Search 
            books={ books } 
            changeShelf={ this.changeShelf }
          />
        )} />
        
        <Route exact path="/" render={() => (
          <BookList
            books={ this.state.books }
            changeShelf={ this.changeShelf }
          />
        )} />

      </div>
    )
  }
}

export default BooksApp
