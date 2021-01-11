import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks, deleteBook } from '../actions/books'

import {Button} from 'react-bootstrap'


class BooksIndex extends Component {

  componentDidMount () {
    this.props.getBooks()
  }

  handleClick = (event) =>{
    event.preventDefault()
    this.props.deleteBook(event.target.id)
  }

  handleClickEdit = (event) =>{
    event.preventDefault()
    debugger
  }

  render() {
    const books = this.props.books.map((book, i) => {
        return (
        <div>
          <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <li key={i}>
                <h3>
                  {book.title + " "}
                  <Button variant="success" id = {book.id} onClick={this.handleClickEdit}>Edit</Button>
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
        <div>
              <h1>Book App</h1>
              <ul>{this.props.loading ? <h3>Loading...</h3> : books}</ul>
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

export default connect(mapStateToProps, {getBooks, deleteBook})(BooksIndex);
