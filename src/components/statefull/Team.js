import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'


function Team() {

    useEffect(() => {
        getCast()        
    })

    const [items, setItems] = useState([]);

    const getCast = () => {
        fetch("https://www.officeapi.dev/api/characters/")
        .then(res => res.json())
        .then((data) => {
            setItems(data.data)
        })
    }

    
    return (
        <div>
                <h1>Our amazing team</h1>
                <Link to = "/about"><Button variant="danger" >Cancel</Button></Link> <br/><br/>
                {items.map((item,i) => (
                <div key={item._id}>
                    <Link to= {`/teams/${item._id}`} >{item.firstname} {item.lastname}</Link>
                </div>
                ))}<br/>
        </div>
    )  

    
}

// export default connect(null, {getCast})(Team);
export default Team;
