import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../../actions/books'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

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
            <div>
                 <h1>Write A Blog</h1>
                <form onSubmit = {this.handleSubmit}>
                    title <input type="text" value ={this.state.title} onChange={this.handleChangeTitle} /><br/>
                    <br/>
                    desc <textarea type="text" value ={this.state.description} onChange={this.handleChangeDesc}/><br/>
                    <Button type="submit">Submit</Button>
                    <Link to = "/"><Button variant="danger">Cancel</Button></Link>
                </form>
            </div>
        )
    }
}

export default connect(null,{addBook})(BookForm)
