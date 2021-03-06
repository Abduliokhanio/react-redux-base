import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getJobs , deleteJob} from '../../../actions/jobs'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap' 
import LikeBtn from '../../LikeBtn'

class JobsIndex extends Component {

    componentDidMount() {
        this.props.getJobs()
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.deleteJob(event.target.id)
    }

    render() {
        const someCode = this.props.jobs.map((job, i) => {
            return(
                <div key ={i}>
                    <hr/>
                    <LikeBtn id = {job} likeVal = {job.like}/><br/>
                    <Link to ={`/jobs/${job.id}`}><Button id = {job.id} variant="info">Read</Button></Link>
                    <Link to={`/jobs/${job.id}/edit` } className = "link" id = {job.id}><Button variant="success" id = {job.id}>Edit</Button></Link>
                    <Button variant="danger" id = {job.id} onClick={this.handleClick}>Delete</Button>
                    <h1>{job.title}</h1>
                    <p>{job.description}</p>
                    <hr/>
                </div>
            )
        })

        //Main Return
        return (
            <div>
                <Link to="/jobs/new"><Button variant="warning">Create A Job Post</Button></Link>
                {this.props.loading ? <h3>Loading...</h3> : <div>{someCode}</div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{  
      jobs: state.jobReducer.jobs,
      loading: state.jobReducer.loading
    }
}

export default connect(mapStateToProps,{getJobs, deleteJob})(JobsIndex)

