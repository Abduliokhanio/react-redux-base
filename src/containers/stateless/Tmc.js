import React from 'react'
import {Card, Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom';
import '../../index.css';

function Tmc(props) {
    const id = props.data._id
    const fName = props.data.firstname
    const lName = props.data.lastname
    const imgDB = props.img
    
    return (
        <div className ="center-card">
                <Card style={{ width: '18rem'}}>
                 <div className ="px-3 pt-3">   
                <Card.Img variant="top" src= {imgDB} />
                <Card.Body>
                    <Card.Title>Id: {id}</Card.Title>
                    <Card.Text>
                    First Name: {fName}<br/>
                    Last Name: {lName}
                    </Card.Text>
                    <Button variant="primary"><Link to="/teams" className = "link">Go Back</Link></Button>
                </Card.Body>
                </div>
                </Card>
            </div>
        
    )
}

export default Tmc
