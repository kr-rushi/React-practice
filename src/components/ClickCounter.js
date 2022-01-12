import React, { Component } from 'react'
import HighOrderComp from './HighOrderComp'
export class ClickCounter extends Component {
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
        const { count,incrementCount }=this.props
        return (
            <button onClick={incrementCount}>{this.props.name} Click {count} times</button>
        )
    }
}


export default HighOrderComp(ClickCounter, 5)
