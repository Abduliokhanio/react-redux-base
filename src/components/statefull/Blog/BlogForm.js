import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../../../actions/blogs'
import {Button, Card, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import '../../../index.css'

class BlogForm extends Component {
    state = {
        title: "",
        description: ""
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const blog = {title: this.state.title, description: this.state.description}
        console.log("a")
        this.props.addBlog(blog)
        console.log("b")
        this.setState({
            title: "",
            description: ""
        })
    }

    handleChangeTitle = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handleChangeDesc = (event) =>{
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            <div className="center-card">
                <div className="vertical-center">
                    <Card style={{backgroundColor: '#282c34', width: '25rem', height: '23rem'}} border="light" >
                        <div className = 'pt-2 px-3'>
                        <h1>Create Your Blog</h1>
                        <Form onSubmit = {this.handleSubmit}>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control input type="text" value ={this.state.title} onChange={this.handleChangeTitle}  placeholder="Enter Title" />
                            <Form.Text className="text-muted">
                            Add a unique title so your blog sticks out!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value ={this.state.description} onChange={this.handleChangeDesc} placeholder="Enter Description" />
                        </Form.Group>
                        
                        <Button type="submit">Submit</Button>
                        <Link to = "/"><Button variant="danger">Cancel</Button></Link>
                        </Form>
                        </div>
                    </Card>
                </div>
                
            </div>
        )
    }
}

export default connect(null,{addBlog})(BlogForm)
