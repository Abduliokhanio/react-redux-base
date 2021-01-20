import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getJobs} from '../../actions/jobs'
import { Link } from 'react-router-dom'

class JobsIndex extends Component {

    componentDidMount() {
        this.props.getJobs()
    }

    render() {
        const someCode = this.props.jobs.map((job, i) => {
            
            return(
                <div key ={i}>
                    <h1>{job.title}</h1>
                    <p>{job.description}</p>
                </div>
            )
        })

        //Main Return
        return (
            <div>
                <Link to="/jobs/new">New</Link>
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

export default connect(mapStateToProps,{getJobs})(JobsIndex)

