import './App.css';
import React, { Component } from 'react'

//links
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';

import SearchFeature from './components/statefull/SearchFeature'

//////////////////////////////////component State-full

//Blog
import BlogForm from './components/statefull/Blog/BlogForm'
import BlogsIndex from './components/statefull/Blog/BlogsIndex'
import EditForm from './components/statefull/Blog/EditForm'

//Job
import JobForm from './components/statefull/Job/JobForm'
import JobEF from './components/statefull/Job/JobEF'

//////////////////////////////////component Stateless

//About 
import AboutPage from './components/stateless/About/AboutPage'

//Layout
import Navigation from './components/stateless/Layout/Nav'
import Footer from './components/stateless/Layout/Footer'

//Team
import Team from './components/statefull/Team/Team'
import TeamDetail from './components/statefull/Team/TeamDetail'

//Blog
import BlogDetail from './components/statefull/Blog/BlogDetail'

//Job
import JobDetail2 from './components/statefull/Job/JobDetail2'
import JobsIndex from './components/stateless/Job/JobsIndex'

//Other
import Wwd from './components/stateless/Wwd'
import Contact from './components/stateless/Contact'
import Timer from './components/statefull/Timer'
import Test from './components/Test'
import Test2 from './components/Test2'

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
              {/* Blogs */}
              <Route exact path="/" >
                <Redirect to="/blogs"/>
              </Route>
              <Route exact path="/blogs" component={BlogsIndex}/>
              <Route exact path="/blogs/new" component={BlogForm}/>
              <Route exact path="/blogs/:id" component={BlogDetail}/>
              <Route exact path="/blogs/:id/edit" component={EditForm}/>

              {/* Jobs */}
              <Route exact path="/jobs" component={JobsIndex}/>
              <Route exact path="/jobs/new" component={JobForm}/>
              <Route exact path ="/jobs/:id" component={JobDetail2}/>
              <Route exact path ="/jobs/:id/edit" component={JobEF}/>

              {/* Teams */}
              <Route exact path="/teams" component={Team}/>
              <Route exact path="/teams/:id" component={TeamDetail}/>

              {/* Contacts */}
              <Route exact path="/contact" component={Contact}/>              
              <Route exact path= "/whatwedo" component={Wwd}/>
              <Route exact path="/about" component={AboutPage}/>   

              {/* SEARCH */}
              <Route exact path ="/search" component={SearchFeature} />     

              {/* Timer */}
              <Route exact path ="/timer"  component={Timer}/>     

              {/* Test */}
              <Route exact path ="/test"  component={Test}/>     

              {/* Test */}
              <Route exact path ="/test2"  component={Test2}/>     

            </Switch>
            <Footer />
            </div>
        </div>        
      </Router>
    );
  }
}

export default App;
