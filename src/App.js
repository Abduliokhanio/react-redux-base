import './App.css';
import React, { Component } from 'react'

//links
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';

//component State-full
import BlogForm from './components/statefull/BlogForm'
import BlogsIndex from './components/statefull/BlogsIndex'
import EditForm from './components/statefull/EditForm'

//component Stateless
import Navigation from './components/stateless/Nav'
import AboutPage from './components/stateless/AboutPage'
import Footer from './components/stateless/Footer'
import JobsIndex from './components/stateless/JobsIndex'
import Contact from './components/stateless/Contact'
import Team from './components/statefull/Team'
import TeamDetail from './components/statefull/TeamDetail'
import BlogDetail from './components/statefull/BlogDetail'
import Wwd from './components/stateless/Wwd'

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App App-background">
        <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <div className="pb-5">
              <Navigation/>
            </div>
            <div className="py-5">
            <Switch> 
              <Route exact path="/" >
                <Redirect to="/blogs"/>
              </Route>
              <Route exact path="/blogs" component={BlogsIndex}/>
              <Route exact path="/new" component={BlogForm}/>
              <Route exact path="/about" component={AboutPage}/>
              <Route exact path="/jobs" component={JobsIndex}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/teams" component={Team}/>
              <Route exact path= "/whatwedo" component={Wwd}/>
              <Route exact path="/teams/:id" component={TeamDetail}/>
              <Route exact path="/blogs/:id" component={BlogDetail}/>
              <Route exact path="/blogs/:id/edit" component={EditForm}/>
            </Switch>
            <Footer />
            </div>
        </div>        
      </Router>
    );
  }
}

export default App;
