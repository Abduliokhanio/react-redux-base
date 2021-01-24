import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {likeJob, unlikeJob} from '../actions/jobs'
import {connect} from 'react-redux'

class LikeBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {like: this.props.likeVal}
    }

    // componentWillUnmount(){
    //     this.setState({like: this.props.likeVal})
    // }


    handleClick1=(event)=>{
        event.preventDefault()
        let cardId = event.target.parentElement.parentElement.getElementsByClassName("link")[0].id
        this.props.likeJob(cardId)
        this.setState({like: true})
        
    }

    handleClick2=(event)=>{
        event.preventDefault()
        let cardId = event.target.parentElement.parentElement.getElementsByClassName("link")[0].id
        this.props.unlikeJob(cardId)
        this.setState({like: false})
    }

    render() {

        let button

        if (this.state.like === false){
            button = <Button onClick = {this.handleClick1} variant="light">Un-Like</Button>
        }else {
            button = <Button onClick = {this.handleClick2} variant="danger">Liked</Button>
        }
        

        return (
            <div>
                {button}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{  
      jobs: state.jobReducer.jobs,
    }
}

export default connect(mapStateToProps,{likeJob, unlikeJob})(LikeBtn)
