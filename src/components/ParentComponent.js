import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 parentName:'Parent'
            }
            this.greetParent=this.greetParent.bind(this)
            this.greetParent1=this.greetParent1.bind(this)
        }
        greetParent1(childName){
            return(
            this.setState({parentName:`${childName}`})
                
            )
        }
        greetParent(childName){
            alert(`Hello ${this.state.parentName} from  ${childName}`)
        }
        
    render() {
        return (
            <div>
                <h1>hiiii {this.state.parentName}</h1>
                <ChildComponent greetHandler={this.greetParent} greetHandler1={this.greetParent1}/>
            </div>
        )
    }
}

export default ParentComponent
