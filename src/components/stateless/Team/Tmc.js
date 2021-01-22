import React from 'react'
import {Card, Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom';
import '../../../index.css';

function Tmc(props) {
    const id = props.data._id
    const fName = props.data.firstname
    const lName = props.data.lastname
    const imgDB = props.img
    
    return (
        <div className ="center-card">
                <Card style={{ width: '18rem'}}>
                    <div className ="px-3 pt-3">   
                        <Card.Img variant="top" src= {imgDB} width="300" height="300"/>
                            <Card.Body>
                                <Card.Title>Id: {id}</Card.Title>
                                    <Card.Text>
                                    First Name: {fName}<br/>
                                    Last Name: {lName}
                                    </Card.Text>
                            <Link to="/teams" className = "link"> <Button variant="danger">Cancel</Button></Link>
                            </Card.Body>
                    </div>
                </Card>
            </div>
        
    )
}

export default Tmc
