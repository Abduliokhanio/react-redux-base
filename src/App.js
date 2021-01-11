import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks, deleteBook } from './actions/books'

//links
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';

//component State-full
import BookForm from './containers/BookForm'

//component Stateless
import Navigation from './containers/Nav'
import BooksIndex from './containers/BooksIndex'

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

    return (
      <Router>
        <div className="App">
        <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
          <div className="App-header">
            <Navigation/>

            <Switch> 
              <Route exact path="/" component={BooksIndex}/>
              <Route path="/new" component={BookForm}/>
            </Switch>
          </div>
        </div>
      </Router>
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
