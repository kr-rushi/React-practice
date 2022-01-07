import React from 'react'

function FunctionClick() {
    function click(){
        console.log("button click")
    }
    return (
        <div>
            <button onClick={click}>click</button>
        </div>
    )
}

export default FunctionClick
