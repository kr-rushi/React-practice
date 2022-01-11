import React from 'react'

export default function Listwithprop({person}) {
    return (
        <div>
            <h1>{person.id}   {person.name}</h1>
        </div>
    )
}
