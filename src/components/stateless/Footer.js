import React from 'react'
import {Nav, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div>
            <Card className="justify-content-center fixed-bottom">
                <Nav className="justify-content-center" activeKey="/home" >
                    <Nav.Item>
                        <Nav.Link><Link to="/jobs">Jobs</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/contact" >Contact</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                            <Nav.Link href = "#" eventKey="link-2">Amazon-blogs</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card>
        </div>
    )
}

export default Footer
