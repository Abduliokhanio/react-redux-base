import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBlogs, deleteBlog, editBlog } from '../../../actions/blogs'

import {Button, CardDeck, Card, Form} from 'react-bootstrap'

//link
import { Link } from 'react-router-dom'

//css
import "../../../index.css"

class BlogsIndex extends Component {

  constructor(props){
    super(props)
    this.state = {search: {}}
  }

  componentDidMount () {
    this.props.getBlogs()
  }

  handleClick = (event) =>{
    event.preventDefault()
    this.props.deleteBlog(event.target.id)
  }

  someFunction = (event) => {
    event.preventDefault()
    let value = event.target.getElementsByTagName("input")[0].value

    this.setState({search: value}) 
  }

  render() {
    debugger
    const blog =  this.props.blogs.filter(blog => blog.title === this.state.search).map((blog, i) => {
      return (
          <div className="center-card">
          <div className="py-3 px-3"  >
              <Card style={{backgroundColor: '#282c34', width: '30rem'}} border="light"  >
              <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
              <div key={i} >
                  <h3>
                      <div className = "card-text-description-header py-2">
                      {blog.title + " "}
                      </div>
          
                      <hr/>
                      <div>
                      <Link to={`/blogs/${blog.id}/edit` } className = "link" id = {blog.id}><Button variant="success" id = {blog.id}>Edit</Button></Link>
                      <Link to ={`/blogs/${blog.id}`}><Button variant="info" id = {blog.id} >Read</Button></Link>
                      <Button variant="danger" id = {blog.id} onClick={this.handleClick}>Delete</Button>
                      
                      </div>
                  </h3> 
                  <p> 
                      <div className="card-text-description px-3">
                      {blog.description} 
                      </div>
                  </p>
                  </div>
                  
              </Card> 
          </div>
          </div>)
}  
)


    const blogs = this.props.blogs.map((blog, i) => {
        return (
        <div className="center-card">
          <div className="py-3 px-3"  >
            <Card style={{backgroundColor: '#282c34', width: '30rem'}} border="light"  >
            <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
              <div key={i} >
                  <h3>
                    <div className = "card-text-description-header py-2">
                      {blog.title + " "}
                    </div>
        
                    <hr/>
                    <div>
                      <Link to={`/blogs/${blog.id}/edit` } className = "link" id = {blog.id}><Button variant="success" id = {blog.id}>Edit</Button></Link>
                      <Link to ={`/blogs/${blog.id}`}><Button variant="info" id = {blog.id} >Read</Button></Link>
                      <Button variant="danger" id = {blog.id} onClick={this.handleClick}>Delete</Button>
                      
                    </div>
                  </h3> 
                  <p> 
                    <div className="card-text-description px-3">
                      {blog.description} 
                    </div>
                  </p>
                </div>
                
            </Card> 
          </div>
        </div>)
    })

    return (
        <div className="px-3"  >
              
                <Form onSubmit =  {this.someFunction}>
                  <Button type ="submit"></Button>
                  <input id = "someinput"></input>
                </Form>
              

              <h1>The Dunder Blog:</h1>

              {blog}
              <br/>
              {this.props.loading ? <h3>Loading...</h3> : <CardDeck className="center-card"> {blogs} </CardDeck>}
          
        </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    blogs: state.blogReducer.blogs,
    loading: state.blogReducer.loading
  }
}

export default connect(mapStateToProps, {getBlogs, deleteBlog, editBlog})(BlogsIndex);
// export default connect(mapStateToProps, {getBlogs, deleteBlog,editBlog, readBlog})(BlogsIndex);

// connect allows us to connect our component to our redux &&
// allows us to use our action-object-creator functions