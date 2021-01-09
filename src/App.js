import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount () {
    
  }

  render() {

    const books = this.props.books.map((book, i) => {
        return <li key={i}>{book.title}</li>
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

export default connect(mapStateToProps)(App);
