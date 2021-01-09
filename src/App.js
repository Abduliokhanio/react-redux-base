import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from './actions/books'

class App extends Component {

  componentDidMount () {
    this.props.getBooks()
  }

  render() {
    const books = this.props.books.map((book, i) => {
        return <div>
        <li key={i}>
            <h3>
              {book.title}
            </h3>
            <p> 
              {book.description} 
            </p>
          </li>
          <hr/>
          </div>
    })

    return (
      <div className="App">
        <div className="App-header">
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

export default connect(mapStateToProps, {getBooks})(App);
