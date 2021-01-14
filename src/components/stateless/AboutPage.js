import React from 'react'
import {Card, CardDeck} from 'react-bootstrap'
import AboutPgImg from './AboutPgImg'
import AboutInspText from './AboutInspText'
import AboutCardDeck from './AboutCardDeck'
import "../../index.css"
//container component
function AboutPage() {
    return (
        <div style={{ color: 'black', paddingBottom: "100px"}}>
            <div className ="center-card">
                <Card style={{ width: '60rem'}}>
                    <div className = "px-5">
                        <AboutPgImg/>
                        <AboutInspText/>
                        <AboutCardDeck/>
                    </div>
                </Card>
            </div> 
        </div>
        
    )
}

export default AboutPage
