import React from 'react'
import { Nav } from 'react-bootstrap'

function Navigation() {
    return (
        <div>
            <h1>Nav bar</h1>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Option 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Option 4</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navigation
