import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler1('Childh')}>new</button>
            <button onClick={()=>props.greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
