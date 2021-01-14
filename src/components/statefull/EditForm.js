import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editBook } from '../../actions/books'
import {Button, Card, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import '../../index.css'

class EditForm extends Component {
    state = {
        title: "",
        description: ""
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const book = {id: this.props.match.params.id, title: this.state.title, description: this.state.description}
        this.props.editBook(book)
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
                    <Card style={{backgroundColor: '#282c34', width: '25rem', height: '17rem'}} border="light" >
                        <div className = 'py-2 px-3'>
                            <Form onSubmit = {this.handleSubmit}>
                                    <Form.Group controlId="formBasicTitle">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" value ={this.state.title} onChange={this.handleChangeTitle} placeholder="Enter Title" />
                                        <Form.Text className="text-muted">
                                        Add a unique title so your blog sticks out!
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" value ={this.state.description} onChange={this.handleChangeDesc} placeholder="Enter Description" />
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

export default connect(null,{editBook})(EditForm)
