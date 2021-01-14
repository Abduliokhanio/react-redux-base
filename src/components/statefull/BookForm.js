import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../../actions/books'
import {Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import '../../index.css'

class BookForm extends Component {
    state = {
        title: "",
        description: ""
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const book = {title: this.state.title, description: this.state.description}
        this.props.addBook(book)
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
                <Card style={{backgroundColor: '#282c34', width: '20rem', height: '15rem'}} border="light" >
                    <h1>Write A Blog</h1>
                    <form onSubmit = {this.handleSubmit}>
                        title <input type="text" value ={this.state.title} onChange={this.handleChangeTitle} /><br/>
                        <br/>
                        desc <textarea type="text" value ={this.state.description} onChange={this.handleChangeDesc}/><br/>
                        <Button type="submit">Submit</Button>
                        <Link to = "/"><Button variant="danger">Cancel</Button></Link>
                    </form>
                </Card>
            </div>
        )
    }
}

export default connect(null,{addBook})(BookForm)
