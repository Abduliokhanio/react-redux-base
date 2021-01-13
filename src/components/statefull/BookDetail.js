import React from 'react'
import { useEffect, useState } from 'react';
// import {readBook} from '../actions/books'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function BookDetail(props) {
    
    const id = props.match.params.id
    useEffect(() => {
        getBook(id)
    })

    const [book, setbook] = useState([]);

    const getBook = (id) => {
        fetch(`http://localhost:3001/blocks/${id}`)
        .then(resp => resp.json())
        .then(data => {
            setbook(data)
        })
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
        <Link to = "/"><Button variant="danger">Cancel</Button></Link>
        </div>
    )
}

// export default connect(null, {readBook})(BookDetail);
export default (BookDetail);
