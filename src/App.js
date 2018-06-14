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

  render() {

    console.log(this.state);

    return (

      <div className="app">
        
        <Route path="/search" render={( { history }) => (
          <Search/>
        )} />
        
        <Route exact path="/" render={() => (
          <BookList
            books={this.state.books}
          />
        )} />

      </div>
    )
  }
}

export default BooksApp
