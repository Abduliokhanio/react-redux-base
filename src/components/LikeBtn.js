import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class LikeBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {like: false};
    }


    handleClick1=(event)=>{
        event.preventDefault()
        this.setState({
            like: true
        })
    }

    handleClick2=(event)=>{
        event.preventDefault()
        this.setState({
            like: false
        })
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

export default LikeBtn
