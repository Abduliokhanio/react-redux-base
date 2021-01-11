import './App.css';
import React, { Component } from 'react'

//links
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';

//component State-full
import BookForm from './containers/BookForm'

//component Stateless
import Navigation from './containers/Nav'
import BooksIndex from './containers/BooksIndex'

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App App-background">
        <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <Navigation/>
            
            <Switch> 
              <Route exact path="/" component={BooksIndex}/>
              <Route path="/new" component={BookForm}/>
            </Switch>
        </div>        
      </Router>
    );
  }
}

export default App;
