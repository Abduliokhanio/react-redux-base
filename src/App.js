import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks, deleteBook } from './actions/books'

//component
import BookForm from './containers/BookForm'

//styling
import { Button } from 'react-bootstrap';

class App extends Component {

  componentDidMount () {
    this.props.getBooks()
  }

  handleClick = (event) =>{
    event.preventDefault()
    this.props.deleteBook(event.target.id)
  }

  render() {
    const books = this.props.books.map((book, i) => {
        return (
        <div>
          <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <li key={i}>
                <h3>
                  {book.title + " "}
                  <Button variant="danger" id = {book.id} onClick={this.handleClick}>Delete</Button>
                </h3> 
                <p> 
                  {book.description} 
                </p>
              </li>
              <hr/>
          </div>)
        
    })

    return (
      <div className="App">
        <div className="App-header">
          <h1>Build a book</h1>
          <BookForm />
          <h1>Book App</h1>
          <ul>{this.props.loading ? <h3>Loading...</h3> : books}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    books: state.bookReducer.books,
    loading: state.bookReducer.loading
  }
}

export default connect(mapStateToProps, {getBooks, deleteBook})(App);
