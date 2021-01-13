import React from 'react'
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../../index.css';

function Navigation() {
    return (
            <div className="App-header">
                <Navbar bg="primary" variant="dark" fixed="top">
                    <Nav.Link><Link to="/" className = "link">Home</Link></Nav.Link>
                    <Nav className="mr-auto">
                    <Nav.Link ><Link to="/new" className = "link">New</Link></Nav.Link>
                    <Nav.Link ><Link to="/about" className = "link">About</Link></Nav.Link>
                    
                    </Nav>
                    {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    </Form> */}
                </Navbar>
            </div>
        
    )
}

export default Navigation
