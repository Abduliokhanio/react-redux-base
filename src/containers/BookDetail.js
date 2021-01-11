import React from 'react'
import { useEffect } from 'react';
// import {readBook} from '../actions/books'
import { connect } from 'react-redux'

function BookDetail(props) {
    useEffect(() => {
        // readBook(props.match.params.id)
    })

    return (
        <div>
            <h1>Book Detail</h1>
        </div>
    )
}

// export default connect(null, {readBook})(BookDetail);
export default (BookDetail);
