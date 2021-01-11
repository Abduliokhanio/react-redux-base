import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editBook } from '../actions/books'

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
            <div>
                 <h1>edit a book</h1>
                <form onSubmit = {this.handleSubmit}>
                    title <input type="text" value ={this.state.title} onChange={this.handleChangeTitle} /><br/>
                    <br/>
                    desc <textarea type="text" value ={this.state.description} onChange={this.handleChangeDesc}/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null,{editBook})(EditForm)
