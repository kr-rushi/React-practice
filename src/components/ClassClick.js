import React, { Component } from 'react'

class ClassClick extends Component {
   clickme(){
       console.log("click by class")
   }
    render() {
        return (
            <div>
               <button onClick={this.clickme}>Click me</button> 
            </div>
        )
    }
}

export default ClassClick
