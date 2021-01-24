import React, { Component } from 'react'
import {Form, Button, Card, CardDeck} from 'react-bootstrap'
import { connect } from 'react-redux'
import {getBlogs} from '../actions/blogs'
import { Link } from 'react-router-dom'

class SearchFeature extends Component {

    state = {
        title: ""
    }

    componentDidMount () {
        this.props.getBlogs()
        debugger
    }

    handleClick = (event) =>{
        event.preventDefault()
        alert("hi")
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render(){

        const blog = this.props.blogs.filter(blog => blog.title === this.state.title).map((blog, i) => {
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
    
    return (
        <div>
            inside search feature
            <Form>
                <Form.Control type="search" onChange={this.handleChangeTitle}  placeholder="Enter Title" />
                <Button onClick = {this.handleClick} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {this.props.loading ? <h3>Loading...</h3> : <CardDeck className="center-card"> {blog} </CardDeck>}
        </div>
    )}
}

const mapStateToProps = state => {
    return{
        blogs: state.blogReducer.blogs,
        loading: state.blogReducer.loading 
    }
}

export default connect(mapStateToProps,{getBlogs})(SearchFeature)
