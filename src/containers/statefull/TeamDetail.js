import React, { useState, useEffect } from 'react';
import {Card} from 'react-bootstrap'
import Tmc from '../stateless/Tmc'

function TeamDetail(props) {

    useEffect(() => {
        teamMemberInfo(props.match.params.id)
        pokemon(Math.floor(Math.random() * 800) + 1)
        
    }, [])

    const [teamMember, setTeamMember] = useState([]);
    const [teamMemberImg, setTeamMemberImg] = useState([]);

    const teamMemberInfo = (id) => {
        fetch(`https://www.officeapi.dev/api/characters/${id}`)
        .then(resp =>resp.json())
        .then(data => {
            setTeamMember(data.data)
        })
    }

    const pokemon = (id) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => resp.json())
        .then(data => {
            setTeamMemberImg(data.sprites.other.dream_world.front_default)
        })
    }
    
    return (
        <div style={{ color: 'black'}}>
            <Tmc data = {teamMember} img = {teamMemberImg} />
        </div>
    )
}

export default TeamDetail
