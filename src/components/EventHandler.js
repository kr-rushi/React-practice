import React, { Component } from 'react'

export class EventHandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hi',
             message1:'hii',
             message2:'hiii',
             message3:'hiiii',
        }
        this.events2=this.events2.bind(this)
    }
    events(){
        this.setState({
            message:'hello'
        })
    }
    events1(){
        this.setState({
            message1:'helloo'
        })
    }
    events2(){
        this.setState({
            message2:'helloooo'
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.events.bind(this)}>{this.state.message} bind in render</button>
                <button onClick={()=>this.events1()}>{this.state.message1} arrow function</button>
                <button onClick={this.events2}>{this.state.message2} bind in constructor</button>
            </div>
        )
    }
}

export default EventHandler
