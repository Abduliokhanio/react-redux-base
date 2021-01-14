import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks, deleteBook, editBook } from '../../actions/books'

import {Button, CardDeck, Card} from 'react-bootstrap'

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
        <div className="center-card">
          <div className="py-3 px-3"  >
            <Card style={{backgroundColor: '#282c34', width: '30rem'}} border="light"  >
            <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
              <div key={i} >
                  <h3>
                    <div className = "card-text-description-header py-2">
                      {book.title + " "}
                    </div>
        
                    <hr/>
                    <div>
                      <Link to={`/books/${book.id}/edit` } className = "link" id = {book.id}><Button variant="success" id = {book.id}>Edit</Button></Link>
                      <Link to ={`/books/${book.id}`}><Button variant="info" id = {book.id} >Read</Button></Link>
                      <Button variant="danger" id = {book.id} onClick={this.handleClick}>Delete</Button>
                      
                    </div>
                  </h3> 
                  <p> 
                    <div className="card-text-description px-3">
                      {book.description} 
                    </div>
                  </p>
                </div>
                
            </Card> 
          </div>
        </div>)
    })

    return (
        <div className="px-3"  >
           
              <h1>The Dunder Blog:</h1>
              <br/>
              {this.props.loading ? <h3>Loading...</h3> : <CardDeck className="center-card"> {books} </CardDeck>}
          
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