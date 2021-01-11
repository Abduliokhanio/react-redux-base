import './App.css';
import React, { Component } from 'react'

//links
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';

//component State-full
import BookForm from './containers/BookForm'
import BooksIndex from './containers/BooksIndex'
import EditForm from './containers/EditForm'

//component Stateless
import Navigation from './containers/Nav'
import BookDetail from './containers/BookDetail';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App App-background">
        <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <Navigation/>
            
            <Switch> 
              <Route exact path="/" component={BooksIndex}/>
              <Route exact path="/new" component={BookForm}/>
              <Route exact path="/books/:id" component={BookDetail}/>
              <Route exact path="/books/:id/edit" component={EditForm}/>
            </Switch>
        </div>        
      </Router>
    );
  }
}

export default App;
