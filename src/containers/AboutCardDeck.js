import React from 'react'
import {Card, CardDeck} from 'react-bootstrap'

function AboutCardDeck() {
    return (

        <div>
            <CardDeck>
            <Card >
                <Card.Img variant="top" src="https://www.sporcle.com/blog/wp-content/uploads/2018/12/5-11.jpg" />
                <Card.Body>
                <Card.Title>Who We are</Card.Title>
                <Card.Text>
                Find out about our business, people and how we are working to power progress together with more and cleaner paper solutions.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://www.wired.com/images_blogs/photos/uncategorized/2007/10/30/office10254.jpg" />
                <Card.Body>
                <Card.Title>What we do</Card.Title>
                <Card.Text>
                Dunder Mifflin is an local paper company company that aims to meet the world’s growing need for more and cleaner paper solutions in ways that are economically, environmentally and socially responsible..{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardDeck>
        </div>
    )
}

export default AboutCardDeck
