import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks, deleteBook, editBook } from '../../actions/books'

import {Button} from 'react-bootstrap'

//link
import { Link } from 'react-router-dom'

//css
import "../../index.css"

class BooksIndex extends Component {

  componentDidMount () {
    this.props.getBooks()
  }

  handleClick = (event) =>{
    event.preventDefault()
    this.props.deleteBook(event.target.id)
  }

  handleClickRead = (event) => {
    event.preventDefault()
    
    this.props.readBook(event.target.parentElement)
  }

  render() {
    const books = this.props.books.map((book, i) => {
        return (
        <div>
          <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <div key={i}>
                <h3>
                  {book.title + " "}
                  <Link to={`/books/${book.id}/edit` } className = "link" id = {book.id}><Button variant="success" id = {book.id}>Edit</Button></Link> 
                  <Link to ={`/books/${book.id}`}><Button variant="info" id = {book.id} >Read</Button></Link>
                  <Button variant="danger" id = {book.id} onClick={this.handleClick}>Delete</Button>
                </h3> 
                <p> 
                  {book.description} 
                </p>
              </div>
              <hr/>
          </div>)
        
    })

    return (
        <div>
              <h1>Blog</h1>
              <br/>
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

export default connect(mapStateToProps, {getBooks, deleteBook,editBook})(BooksIndex);
// export default connect(mapStateToProps, {getBooks, deleteBook,editBook, readBook})(BooksIndex);