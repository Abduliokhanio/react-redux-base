import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { getBlogs} from '../actions/blogs'

class Test extends Component {

    constructor(props){
        super(props)
        this.state = {clicked: null}
    }

    componentDidMount () {
        this.props.getBlogs()
      }

    handleClick = (event) => {
        event.preventDefault()

        switch (this.state.clicked){
        case null: 
            this.setState({clicked: true})
            break

        case false:
            this.setState({clicked: true})
            break

        case true:
            this.setState({clicked: false})
            break
        }
        }

    render() {

        let button 
        let jobsArr
        let title

        switch (this.state.clicked) {
            case null:
                button = <Button onClick = {this.handleClick} variant="info">Null</Button>
                title = <h1>Null title</h1>
                jobsArr = []
                break

            case false:
                button = <Button onClick = {this.handleClick} variant="primary">False</Button>
                title = <h1>Non-Alpha title</h1>
                jobsArr = this.props.jobs.map(job => {
                    return (
                        <div>
                            <p> {job.title} </p>
                        </div>
                    )
                })
                break
            
            case true:
                button = <Button onClick = {this.handleClick} variant="warning">True</Button>
                title = <h1>Alpha</h1>
                let jobArrCopy = [...this.props.jobs]
                let jobsArr_sorted = jobArrCopy.sort(function(a, b) {
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
                  jobsArr = jobsArr_sorted.map(job => {
                    return (
                        <div>
                            <p> {job.title} </p>
                        </div>
                    )
                })
                break
        }

        return (
            <div>
                <h1>Button game</h1>
                {button}
                {title}
                {jobsArr}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        jobs: state.blogReducer.blogs
    }
}

export default connect (mapStateToProps,{getBlogs})(Test)
