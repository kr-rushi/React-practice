import React, { Component } from 'react'
class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            value:1
        }
    }
    Increment(){
        this.setState({
            count:this.state.count+1,
            value:this.state.value+1
       
        },
        ()=>{
            console.log(this.state.count)
        })
        
        // this.setState((prevstate)=>
        // ({
        //     count:prevstate.count+1
        // }))
        
        
    }
    MoreIncrement(){
        this.Increment()
        this.Increment()
    }
    render() {
        return (
            <div>
                <div>Count = {this.state.count} {this.state.value}</div>
                <button onClick={() => this.Increment()}>Increment</button>
            
                <button onClick={() => this.Increment()}>valueIncrement</button>
            </div>
            
        )
    }
}

export default Counter
