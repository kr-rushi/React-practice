import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.componentref=React.createRef()
    }

    clickHandler = () =>{
        this.componentref.current.focusInput()
    }

    render() {
        return (
            <div>
              <Input ref={this.componentref}/>
              <button onClick={this.clickHandler}>Set Focus</button>  
            </div>
        )
    }
}

export default FocusInput
