import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import {getJobs} from '../actions/jobs'

class Test2 extends Component {

    constructor(props){
        super(props)
        this.state = {click: null}
    }

    componentDidMount(){
        this.props.getJobs()
    }

    handleClick = (event) =>{
        event.preventDefault()
        this.setState({click: false})

        switch (this.state.click){
            case null:
                this.setState({click: false})
                break 
            case false:
                this.setState({click: true})
                break
            case true:
                this.setState({click: false})
                break
        }
    }

    render() {

        let button 
        let jobsArray

        switch (this.state.click){
            case null:
                button = <Button onClick = {this.handleClick}>Click Here to Display jobs</Button>
            break;
            case false:
                button = <Button onClick = {this.handleClick} variant="secondary">Jobs displayed below</Button>
                jobsArray = this.props.jobs.map(job => {
                    return (
                        <div>
                            <hr/>
                            <p>{job.id}</p>
                            <p> {job.title} </p>
                            <p> {job.description} </p>
                            <hr/>
                        </div>
                    )
                })
            break 
            case true:
                button = <Button onClick = {this.handleClick} variant="info" >Jobs displayed below in alphabetical order</Button>
                let copy_arry = [...this.props.jobs]
                let sorted_array = copy_arry.sort(function(a, b) {
                    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                  
                    // names must be equal
                    return 0;
                  });

                  jobsArray = sorted_array.map(job => {
                    return (
                        <div>
                            <hr/>
                            <p>{job.id}</p>
                            <p> {job.title} </p>
                            <p> {job.description} </p>
                            <hr/>
                        </div>
                    )
                })

            break

        }

        return (
            <div>
                <p>Inside test2</p>
                {button}
                {jobsArray}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        jobs: state.jobReducer.jobs
    }
}

export default connect(mapStateToProps,{getJobs})(Test2)
