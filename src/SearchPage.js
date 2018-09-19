import React from 'react'
import ReactDOM from 'react-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import MainPage from './MainPage'
import { Link } from 'react-router-dom'

class SearchPage extends React.Component{
    state = {
      query: "",
      searchBooks: []
    }
    updateQuery =(query) => {
      this.setState ({
        query: query
      })
      this.updateSearchBooks(query);
    }
    updateSearchBooks = (query) => {
      if (query){
        BooksAPI.search(query).then((searchBooks) => {
          if(searchBooks.error){          
            this.setState({searchBooks: [] });
          }else {
            this.setState({ searchBooks: searchBooks });
            }
        })
        
      } else{
        this.setState({ searchBooks: [] });
        }
    }
  
    render(){
      
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                to='/'
                className="close-search" onClick={() => this.setState({ showSearchPage: false })}
               >
              Close
              </Link>
            
              <div className="search-books-input-wrapper">
                <input 
                  type="text"
                  placeholder="Search by title or author"
                  value= {this.state.query}
                  onChange= {(event)=> this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.searchBooks.map(searchBooks => (
                    <li key={searchBooks.id}>
                      <Book 
                        book={searchBooks}
                      />
                    </li>
                ))
                }
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage;
