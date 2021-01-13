import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
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
                {items.map(item => (
                <li key={item.id}>
                    {item.firstname} {item.lastname}
                </li>
                ))}
            </ul>
        </div>
    )  

    
}

// export default connect(null, {getCast})(Team);
export default Team;
