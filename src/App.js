import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import Book from './Book';

class BooksApp extends React.Component {
  state = {
    books: []
    // showSearchPage: false
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }
  moveShelf =(book,shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }
  render() {
    console.log(this.state.books);

    return (

      <div className="app">
        {/* <MainPage 
          books={this.state.books}
          moveShelf = {this.moveShelf}
        /> */}
        <SearchPage />
      </div>
    )
  }
}

export default BooksApp
