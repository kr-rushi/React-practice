import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    
    // incrementCount=()=>{
    //     this.setState(prevState=>{
    //         return {count:prevState.count+1}
    //     })
    // }

    render() {
        const{count,incrementCount}=this.props
        return (
            <h1 onMouseOver={incrementCount}>Click {count} times</h1>
        )
    }
}


export default HoverCounterTwo