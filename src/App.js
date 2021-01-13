import './App.css';
import React, { Component } from 'react'

//links
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';

//component State-full
import BookForm from './containers/statefull/BookForm'
import BooksIndex from './containers/statefull/BooksIndex'
import EditForm from './containers/statefull/EditForm'

//component Stateless
import Navigation from './containers/stateless/Nav'
import AboutPage from './containers/stateless/AboutPage'
import Footer from './containers/stateless/Footer'
import Jobs from './containers/stateless/Jobs'
import Contact from './containers/stateless/Contact'
import Team from './containers/statefull/Team'
import TeamDetail from './containers/statefull/TeamDetail'

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
              <Route exact path="/about" component={AboutPage}/>
              <Route exact path="/jobs" component={Jobs}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/teams" component={Team}/>
              <Route exact path="/teams/:id" component={TeamDetail}/>
              <Route exact path="/books/:id/edit" component={EditForm}/>
            </Switch>

            <Footer />
        </div>        
      </Router>
    );
  }
}

export default App;
