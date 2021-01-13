import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
// import {getCast}from '../actions/cast'


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
            <ul>
                {items.map((item,i) => (
                <li key={item._id}>
                    <Link to= {`/teams/${item._id}`} >{item.firstname} {item.lastname}</Link>
                </li>
                ))}
            </ul>
        </div>
    )  

    
}

// export default connect(null, {getCast})(Team);
export default Team;
