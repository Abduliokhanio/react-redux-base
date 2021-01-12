import React from 'react'
import {Card, CardDeck} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function AboutCardDeck() {
    return (

        <div>
            <CardDeck className="pb-3">
            <Card>
                <Card.Img variant="top" src="https://www.sporcle.com/blog/wp-content/uploads/2018/12/5-11.jpg" />
                <Card.Body>
                <Card.Title><Link to= "/teams">Who We are</Link></Card.Title>
                <Card.Text>
                Find out about our business, people and how we are working to power progress together with more and cleaner paper solutions.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://www.dailydot.com/wp-content/uploads/2019/06/WHere_stream_The_Office_Michael_Pam-800x400.jpg" />
                <Card.Body>
                <Card.Title><Link to= "/whatwedo">What we do</Link></Card.Title>
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
