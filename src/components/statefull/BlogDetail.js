import React from 'react'
import { useEffect, useState } from 'react';
// import {readBlog} from '../actions/blogs'
import { connect } from 'react-redux'
import {Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../../index.css'

function BlogDetail(props) {
    
    const id = props.match.params.id
    useEffect(() => {
        getBlog(id)
    })

    const [blog, setblog] = useState([]);

    const getBlog = (id) => {
        fetch(`http://localhost:3001/blogs/${id}`)
        .then(resp => resp.json())
        .then(data => {
            setblog(data)
        })
    }

    return (
        <div className="center-card">
            <Card border = "light" style={{backgroundColor: '#282c34', width: '60rem'}}>
                <div className="px-3 py-3">
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                    <Link to = "/"><Button variant="danger">Cancel</Button></Link>
                </div>
            </Card>
        </div>
    )
}

// export default connect(null, {readBlog})(BlogDetail);
export default (BlogDetail);
