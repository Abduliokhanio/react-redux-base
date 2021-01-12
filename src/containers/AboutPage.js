import React from 'react'
import {Card, CardDeck} from 'react-bootstrap'
import AboutPgImg from './AboutPgImg'
import AboutInspText from './AboutInspText'
import AboutCardDeck from './AboutCardDeck'
import "../index.css"

function AboutPage() {
    return (
        <div style={{ color: 'black', paddingBottom: "100px"}}>
            <div className ="center-card">
                <Card style={{ width: '75%' }}>
                    
                        <h1>About Us:</h1>
                        <AboutPgImg/>
                        <AboutInspText/>
                        <AboutCardDeck/>
                </Card>
            </div> 
        </div>
        
    )
}

export default AboutPage
