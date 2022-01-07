import react from 'react'

function Greet(props){
    return (
        <div>
    <h1>Hello Rushi {props.name} check {props.check}</h1> 
    {props.children}
    </div>
    )
}
export default Greet