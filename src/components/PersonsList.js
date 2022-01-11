import React from 'react'
import Listwithprop from './Listwithprop'

export default function PersonsList() {
    const person=['hello','hi','how' ,'are' ,'you']
    const persons=[
        {
            id:'1',
            name:'hi'
        },
        {
            id:'2',
            name:'hello'
        }
    ]
    const personlist=persons.map(person=><Listwithprop person={person}/>)
    return (
    <div>
    <div>{personlist}</div>


<div>{
 person.map(persons=> <h1>{persons}</h1>)
}</div>
    </div>
    )
    }