import React from 'react'
import books from './BooksAPI'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SearchPage from './components/searchpage'
import './App.css'
import {ErrorPage} from './components/error'
import BooksPage from './components/BooksPage'

class BooksApp extends React.Component {
  state = {
    // showSearchPage: [


    // ]
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // from students 
    // BooksAPI.getAll().then((booksFromAPI) => { this.setState({ booksFromAPI })

    showSearchPage: false
  }
  gobackpage = () => {
    this.setState({ showSearchPage: false })
  }

  clickSearch = () =>{
    this.setState({ showSearchPage: true })
  }

  render() {

    console.log(books);
    
    return (
    <BrowserRouter>
       <div className="app">
          <BrowserRouter>
            <Route path="/search" component={SearchPage}>
            </Route> 
          </BrowserRouter>
          {this.state.showSearchPage 
          ? (
          <SearchPage gobackpage = {this.gobackpage}/>
          ) 
          : (
            <BooksPage books={books} clickSearch ={this.clickSearch}/>
          )}
      </div>
     </BrowserRouter>
    )
  }
}

export default BooksApp
