import React from 'react'
import {Card, Button} from 'react-bootstrap' 

function Tmc(props) {
    const id = props.data._id
    const fName = props.data.firstname
    const lName = props.data.lastname
    
    return (
        <div className ="center-card">
                <Card style={{ width: '18rem'}}>
                 <div className ="px-3 pt-3">   
                <Card.Img variant="top" src="https://source.unsplash.com/collection/888146/300x300" />
                <Card.Body>
                    <Card.Title>Id: {id}</Card.Title>
                    <Card.Text>
                    First Name: {fName}<br/>
                    Last Name: {lName}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </div>
                </Card>
            </div>
        
    )
}

export default Tmc
