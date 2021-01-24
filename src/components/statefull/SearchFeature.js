import React, { Component } from 'react'
import {Form, Button, Card, CardDeck} from 'react-bootstrap'
import { connect } from 'react-redux'
import {getBlogs} from '../../actions/blogs'
import { Link } from 'react-router-dom'

import '../../index.css'

class SearchFeature extends Component {

    state = {
        title: ""
    }

    componentDidMount () {
        this.props.getBlogs()
    }

    handleClick = (event) =>{
        event.preventDefault()
        alert("Does the same thing as regular search but in button format")
        let inputValue = event.target.parentElement.getElementsByTagName('input')[0].value
        this.setState({
            title: inputValue
        })
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
        <div className="center-card">
            
            <Form style={{ width: '25rem'}}>
                <h1>Search Here</h1>
                <Form.Control type="search" onChange={this.handleChangeTitle}  placeholder="Enter Title" /><br/>
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
