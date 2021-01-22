import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../../../index.css'

function JobDetail2(props) {
    const id = props.match.params.id
    useEffect(() => {
        getJob(id)
    })

    const [job, setjob] = useState([]);

    const getJob = (id) => {
        fetch(`http://localhost:3001/jobs/${id}`)
        .then(resp => resp.json())
        .then(data => {
            setjob(data)
        })
    }
    
    return (
        <div>
            
            <p>id: {job.id}</p>
            <p>Title: {job.title}</p>
            <p>Description: {job.description}</p>
        </div>
    )
}

export default JobDetail2
