import React, { useState, useEffect } from 'react';
import {Card} from 'react-bootstrap'
import Tmc from '../stateless/Tmc'

function TeamDetail(props) {

    useEffect(() => {
        teamMemberInfo(props.match.params.id)
    }, [])

    const [teamMember, setTeamMember] = useState([]);

    const teamMemberInfo = (id) => {
        fetch(`https://www.officeapi.dev/api/characters/${id}`)
        .then(resp =>resp.json())
        .then(data => {
            setTeamMember(data.data)
        })
    }
    
    return (
        <div style={{ color: 'black'}}>
            <Tmc data = {teamMember} />
        </div>
    )
}

export default TeamDetail
