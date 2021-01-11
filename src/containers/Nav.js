import React from 'react'
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../index.css';

function Navigation() {
    return (
            <div> 
                <Navbar bg="primary" variant="dark" fixed="top">
                    <Navbar.Brand><Link to="/" className = "link">Home</Link></Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link ><Link to="/new" className = "link">New</Link></Nav.Link>
                    <Nav.Link >Features</Nav.Link>
                    <Nav.Link >Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
            </div>
        
    )
}

export default Navigation
