import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Username:'',
             Messages:'',
             topic:'Angular'
        }
    }
    
changeusername = (event) =>{
    this.setState({Username:event.target.value})
}

changemessage = (event) =>{
    this.setState({Messages:event.target.value})
}

changetopic = (event) =>{
    this.setState({topic:event.target.value})
}

handleSubmit = event =>{
    alert(`${this.state.Messages} ${this.state.Username} ${this.state.topic}`)
    event.preventDefault()
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.Username} onChange={this.changeusername}/>
            </div>

            <div>
                <label>Message</label>
                <textarea type='text' value={this.state.Messages} onChange={this.changemessage}/>
            </div>


            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.changetopic}>
                    <option value='React'>React</option>
                    <option value='Angular'>Angular</option>
                    <option value='Vue'>Vue</option>
                </select>
            </div>


            <div>
                <button type='submit'>Submit</button>
            </div>
            </form>
        )
    }
}

